---
title: Button
---

# 按钮
## 简单用法
### 预览
<br/>
<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

### 代码

```HTML
<g-button>默认按钮</g-button>
<g-button icon="setting">有icon</g-button>
<g-button icon="setting" icon-position="right">icon位置</g-button>
<g-button :loading="true">loading</g-button>
<g-button disabled>禁用状态</g-button>
```

## button-group
### 预览
<br/>
<ClientOnly>
<button-demos-2></button-demos-2>
</ClientOnly>

### 代码

```HTML
<button-group>
    <g-button icon="left">left</g-button>
    <g-button icon="left" icon-position="right">right</g-button>
</button-group>

<button-group>
    <g-button icon="left"></g-button>
    <g-button>middle</g-button>
    <g-button icon="left" icon-position="right"></g-button>
</button-group>
```

