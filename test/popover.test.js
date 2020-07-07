const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })

    it('可以设置position', (done) => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        div.innerHTML = `
        <g-popover position="right" ref="test">
            <template slot="content">
                content
            </template>
            <button>button</button>
        </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        setTimeout(() => {
            const {contentWrapper} = vm.$refs.test.$refs
            expect(contentWrapper.classList.contains('position-right')).to.be.true
            done()
        },0)
    })

    it('可以设置trigger', (done) => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        div.innerHTML = `
        <g-popover trigger="hover" ref="test">
            <template slot="content">
                content
            </template>
            <button>button</button>
        </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        let event = new Event('mouseenter')
        const {popover} = vm.$refs.test.$refs
        popover.dispatchEvent(event)
        setTimeout(() => {
            const {contentWrapper} = vm.$refs.test.$refs
            expect(contentWrapper).to.exist
            done()
        },500)
    })
})