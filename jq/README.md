# 欢迎使用 carKeyboard

------

作者：丁少华

网名：会飞的鱼lala

QQ：960423114


------

## 什么是 carKeyboard

carKeyboard是一款车牌号输入法软键盘，此版本为jq版

分为3个版本，jq版，angularJs版，vue2版

jq版：https://github.com/dingshaohua90/jq-carKeyboard.git

angularJs版：https://github.com/dingshaohua90/angular-carKeyboard.git

vue2版：


## 此版本如何使用
### 1. 下载插件
bower install jq-carKeyboard --save

### 2. 具体使用方法
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=0" />
    <title>示例</title>
    <!--第一步：引入插件-->
    <link rel="stylesheet" href="dist/carKeyboard.css">
    <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="dist/carKeyboard.js"></script>
</head>
<body>
    <input type="text" class="myipt">
    <script>
        //第二步：使用插件
        carKeyboard.init($('.myipt'));
    </script>
</body>
</html>
```
### 3. 预览