---
title: Button
---

# 布局
## 布局1
### 预览
<br/>
<ClientOnly>
<layout-demos></layout-demos>
</ClientOnly>

### 代码

```HTML
<g-layout>
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
  <g-content style="height: 100px; background:deepskyblue;">
    content
  </g-content>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>
```

## 布局2
### 预览
<br/>
<ClientOnly>
<layout-demos-2></layout-demos-2>
</ClientOnly>

### 代码

```HTML
<g-layout style="overflow:hidden">
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
  <g-layout>
    <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
      sider
    </g-sider>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
  </g-layout>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>
```

## 布局3
### 预览
<br/>
<ClientOnly>
<layout-demos-3></layout-demos-3>
</ClientOnly>

### 代码
```HTML
<g-layout overflow:hidden">
  <g-sider style=" background:#ddd; width:200px; color: black;">
    sider
  </g-sider>
  <g-layout>
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
  </g-layout>
</g-layout>
```