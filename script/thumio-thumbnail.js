const tThumbnailComponent = Vue.extend({
    template:`
<ul>
    <li class="t-thumbnail-item" v-for="n in (Number(max))">
        <a href="" v-on:click.prevent="openModal(n)"><img class="t-thumbnail-img" :src="getImgAddress(n)" :width="width" :height="height"/></a>
    </li>
    <div v-if="visible">
        <transition name="modal">
            <div class="modal-mask">
            <div class="modal-wrapper" v-on:click.self="closeModal">
                <div class="modal-container">

                <div class="modal-header">
                    <slot name="header">
                        {{currentId}}/{{(Number(max))}}
                        <button class="modal-default-button" v-on:click="gotoNextImg">
                            次の画像
                        </button>
                        <button class="modal-default-button" v-on:click="gotoPrevImg">
                            前の画像
                        </button>
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        <img src="./img/prev.png" v-on:click="gotoPrevImg" class="t-thumbnail-left-button">
                        <img :src="getImgAddress(currentId)"/>
                        <img src="./img/next.png" v-on:click="gotoNextImg" class="t-thumbnail-right-button">
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                    ウィンドウ外を押してもモーダルウィンドウは閉じます。
                    <button class="modal-default-button" v-on:click="closeModal">
                        画像を閉じる
                    </button>
                    </slot>
                </div>
                </div>
            </div>
            </div>
        </transition>
    </div>
</ul>
`,
    props: ['base', 'extension', 'max', 'width', 'height'],
    data: function (){
        return {
            visible: false,
            currentId:0,
        }
    },
    methods: {
        getImgAddress: function(id) {
            return `${this.base}${id}.${this.extension}`;
        },
        openModal: function(id) {
            this.visible   = true;
            this.currentId = id;
        },
        closeModal: function() {
            this.visible = false;
        },
        gotoNextImg() {
            this.currentId = Math.max(this.minItem(), ((this.currentId + 1) % this.maxItem()));
        },
        gotoPrevImg() {
            //Note:min,maxを利用したらもっと綺麗に書けそうな気がするが、思いつかないのでこのまま
            if(this.currentId === this.minItem()) {
                this.currentId = this.maxItem() - 1;
            }else {
                this.currentId = Math.max(this.minItem(), (this.currentId + (this.maxItem()-1)) % this.maxItem());
            }
        },
        minItem() {
            return 1;
        },
        maxItem() {
            return (Number(this.max)+1);
        },
    }
});

Vue.component('v-thumbnail', tThumbnailComponent);

new Vue({
    el: '#t-thumbnail'
});