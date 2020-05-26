# 用 vue 自制UI框架

[![Build Status](https://www.travis-ci.org/Luke19950111/Vui-demo.svg?branch=master)](https://www.travis-ci.org/Luke19950111/Vui-demo)

作者： lk

## 介绍
学习vue过程中做的一个ui框架。

## 开始使用
1. 安装
    ```
    npm i --save vui-demo
    ```

2. 引入
    ```js
    import {Btton, ButtonGroup, Icon} from 'vui-demo'
    import 'vui-demo/dist/index.css'
    
    export default {
        name: 'app',
        components: {
            'g-button': Button,
            'g-icon': Icon
        }
    }
    ```

3. 添加css样式

    使用本框架需要在css中开启 border-box
    ```css
    *, *::before, *::after{box-sizing: border-box;}
    ```
    IE8及以上浏览器支持此样式 。
    
    现在还需要引入以下样式（后续会改为scss变量）：
    ```css
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: #fff;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE15及以上浏览器支持此样式。

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


