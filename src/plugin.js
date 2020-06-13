import Toast from './toast'

let currentToast
export default {
    install(Vue, option){
        Vue.prototype.$toast = function(message, toastOptions){
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}


// ● ● ● ● ● ● ● ● ● ● 密 封 线 内 禁 止 作 答 否 则 零 分 ● ● ● ● ● ● ● ● ● ●

function createToast ({Vue, message, propsData, onClose}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}