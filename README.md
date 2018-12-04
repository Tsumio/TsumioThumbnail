# TsumioThumbnail
Vue.jsの練習で作ったサムネイルプログラム

## 導入方法
基本的にはGitHub上で公開しているフォルダ構成を参考に設置してほしい。
1. Vue.jsの読み込み  
簡単な方法はCDNからの入手。
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
```
2. thumio-thumbnailの読み込み  
scriptsフォルダにあるthumio-thumbnail.jsを読み込む。
```html
<script src="./script/thumio-thumbnail.js"></script>
```
詳細は[index.html](https://github.com/Tsumio/TsumioThumbnail/blob/master/index.html)を参照してほしい。  
3. CSSの読み込み
cssフォルダにあるstyle.cssを読み込む。
```html
<link rel="stylesheet" type="text/css" href="./css/style.css">
```
4. サムネイルの設置  
設置したい箇所に以下のようなHTMLを書く。
```html
<div id="t-thumbnail">
    <v-thumbnail base="./img/sample" extension="png" max="15" width="140" height="80">
    </v-thumbnail>
</div>
```
base属性は「対象のフォルダ+基準となるファイル名」。  
extension属性は拡張子の指定。  
max属性は読み込むサムネイルの数。  
width属性とheight属性はサムネイルのサイズ。  
今回の場合は「imgフォルダからsample[n].pngを1番から15番まで読み込む」ことになる。  
なお、ファイル番号は1から始まる（0始まりではない）。imgフォルダも参照してほしい。

## デザインの変更
デザインを変更したい場合、sytle.cssを改変してほしい。