---
title: Input
---

# 输入框
## 简单使用
### 预览
<br/>
<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

### 代码

```HTML
<g-input value="中文"></g-input>
<g-input value="readonly" readonly></g-input>
<g-input value="disabled" disabled></g-input>
<g-input value="error" error="error"></g-input>
```

## 双向绑定
### 预览
<br/>
<ClientOnly>
<input-demos-2></input-demos-2>
</ClientOnly>

### 代码

```js
data:{
  value: 'value'
}
```

```HTML
<g-input v-model="value"></g-input>
<div>
  value: {{value}}
</div>
```

