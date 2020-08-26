---
title: Toast
---

# Toast
## this.$toast
### 预览
<br/>
<ClientOnly>
<toast-demos></toast-demos>
</ClientOnly>

### 代码

```HTML
<g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```

## 关闭按钮回调
### 预览
<br/>
<ClientOnly>
<toast-demos-2></toast-demos-2>
</ClientOnly>

### 代码
```HTML
<g-button @click="onClickButton">上方弹出</g-button>
```
```js
methods: {
    onClickButton(){
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
}
```

## 支持 HTML
### 预览
<br/>
<ClientOnly>
<toast-demos-3></toast-demos-3>
</ClientOnly>

### 代码
```HTML
<g-button @click="onClickButton">上方弹出</g-button>
```
```js
methods: {
    onClickButton(){
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      })
    }
}
```

