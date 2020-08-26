module.exports = {
    base: '/Vui-demo/',
    title: 'Black-Milk UI',
    description: 'Black Milk UI',
    themeConfig: {
        logo: '/black-milk.png',
        nav: [
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: '首页', link: '/' },

             //格式二：添加下拉菜单，link指向的文件路径
            // {
            //     text: '入门',  //默认显示
            //     ariaLabel: '入门',   //用于识别的label
            //     items: [
            //         { text: '安装', link: '/pages/start/install.md' },
            //         //点击标签会跳转至link的markdown文件生成的页面
            //         { text: '快速上手', link: '/pages/start/get-started.md' },
            //     ]
            // },

            //格式三：跳转至外部网页，需http/https前缀
            { text: 'Github', link: 'https://github.com/Luke19950111' },
            { text: 'Blog', link: 'http://liukuai.gitee.io/blog' },
        ],
        // sidebar: [
        //     {
        //         title: '组件',
        //         children: ['/components/button']
        //     }
        // ]
        sidebar: {
            '/pages/':[
                {
                    title: '入门',   // 一级菜单名称
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 0,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['install.md', '安装'],
                        ['get-started.md', '快速上手']
                    ]
                },
                {
                    title: '组件',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        ['button.md', 'Button'],
                        ['tabs.md', 'Tabs'],
                        ['input.md', 'Input'],
                    ]
                }
            ]
        }

    }
}