---
title: Tabs
---

# 标签
### 预览
<br/>
<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

### 代码

```js
data:{
  selected: 'tab1'
}
```

```HTML
<g-tabs :selected="selected">
  <g-tabs-head>
    <g-tabs-item name="tab1">tab1</g-tabs-item>
    <g-tabs-item name="tab2">tab2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="tab1">content 1</g-tabs-pane>
    <g-tabs-pane name="tab2">content 2</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```


