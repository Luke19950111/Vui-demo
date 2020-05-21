import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGruop from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('button-group', ButtonGruop)

new Vue({
    el: '#app',
    data(){
        return{
            loading1: false
        }
    }
})