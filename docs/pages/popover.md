---
title: Popover
---

# 弹出框
## 简单用法（支持 HTML）
### 预览
<br/>
<ClientOnly>
<popover-demos></popover-demos>
</ClientOnly>

### 代码

```HTML
<g-popover>
  <g-button>上方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="bottom">
  <g-button>下方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="left">
  <g-button>左边弹出</g-button>
  <template slot="content">
    <a href="https://www.qq.com/?fromdefault" target="_blank">去看新闻</a>
  </template>
</g-popover>
<g-popover position="right">
  <g-button>右边弹出</g-button>
  <template slot="content">
    <a href="https://www.taobao.com/" target="_blank">去购物</a>
  </template>
</g-popover>
```

## hover 触发
### 预览
<br/>
<ClientOnly>
<popover-demos-2></popover-demos-2>
</ClientOnly>

### 代码
```HTML
<g-popover trigger="hover">
  <g-button>上方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="bottom" trigger="hover">
  <g-button>下方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="left" trigger="hover">
  <g-button>左边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="right" trigger="hover">
  <g-button>右边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
```



