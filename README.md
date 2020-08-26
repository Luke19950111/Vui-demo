# 用 vue 自制UI框架

[![Build Status](https://www.travis-ci.org/Luke19950111/Vui-demo.svg?branch=master)](https://www.travis-ci.org/Luke19950111/Vui-demo)

作者： lk

## 介绍
Black-Milk UI 是一个学习导向的UI框架。
面向源码阅读者，追求代码可读性，学习轮子制作思路。
完成按钮、输入框、网格、布局、Toast、Tabs、Popover、手风琴等轮子。

### 知识点
使用 Travis CI 进行持续集成，了解单元测试、持续集成等工程概念；
重构、TDD/BDD、设计模式、单向数据流等技术概念；
深入理解 Vue 几乎所有功能。

本UI框架基于 Vue2 实现。

## 开始使用
1. 安装
    ```
    yarn add black-milk  //npm i black-milk
    ```

2. 引入
    ```js
    import {Btton, ButtonGroup, Icon} from 'black-milk'
    import 'black-milk/dist/index.css'
    
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
    
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


