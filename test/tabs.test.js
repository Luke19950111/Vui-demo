const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    it('接收 selected 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-tabs selected="basketball">
                <g-tabs-head>
                    <template slot="action">
                        <button>操作</button>
                    </template>
                    <g-tabs-item name="basketball">篮球</g-tabs-item>
                    <g-tabs-item name="football">足球</g-tabs-item>
                    <g-tabs-item name="pingpong">乒乓球</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="basketball">篮球内容</g-tabs-pane>
                    <g-tabs-pane name="football">足球内容</g-tabs-pane>
                    <g-tabs-pane name="pingpong">乒乓球内容</g-tabs-pane>
                </g-tabs-body>
            </g-tabs>            
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="basketball"]`)
            expect(x.classList.contains('active')).to.be.true
        })
    })
    it('接收 direction 属性', () => {

    })

})