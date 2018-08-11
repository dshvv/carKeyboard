# 欢迎使用 carKeyboard

------

作者：丁少华

网名：会飞的鱼lala

QQ：960423114


------

## 什么是 carKeyboard

carKeyboard是一款车牌号输入法软键盘，此版本为angularJs版

分为3个版本，jq版，angularJs版，vue2版

jq版：https://github.com/dingshaohua90/jq-carKeyboard.git

angularJs版：https://github.com/dingshaohua90/angular-carKeyboard.git

vue2版：


## 此版本如何使用
### 1. 下载插件
bower install angular-carKeyboard --save

### 2. 在页面引入插件，并注入到你app里
```html
<link rel="stylesheet" href="plugin/carKeyboard/carKeyboard.css">
<script src="plugin/carKeyboard/carKeyboard.js"></script>
<script>
    var app = angular.module('myApp', ['carKeyboard']);
    app.controller('myCtrl', function($scope) {

    });
</script>
```

### 3. 具体使用方法
```html

<!DOCTYPE html>
<html>
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<script src="https://cdn.bootcss.com/angular.js/1.4.6/angular.min.js"></script>

<!--第一步：引入该的插件-->
<link rel="stylesheet" href="dist/carKeyboard.css">
<script src="dist/carKeyboard.js"></script>

<body ng-app="myApp" ng-controller="myCtrl">
    <div style="width: 200px; border: red solid 1px">
        <!--第三步：使用-->
        <car-keybd rs="rs"></car-keybd>
    </div>

    <button ng-click="getKy()">取值</button>
    <script>
        //第二步：注入该模块
        var app = angular.module('myApp', ['ngCarKeyboard']);
        app.controller('myCtrl', function($scope) {
            $scope.getKy=function () {
                console.log($scope.rs)//取值
            }
        });
    </script>
</body>
</html>
```
### 4. 预览