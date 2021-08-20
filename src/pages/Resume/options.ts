import { InfoCardProps } from './Components/BaseInfoCard'
import { ExpirenceCardProps } from './Components/ExperienceCard'

export const baseInfo: InfoCardProps[] = [
  {
    title: '基本信息',
    items: [
      {
        label: '电话',
        content: '15802138262',
      },
      {
        label: '邮箱',
        content: 'a417420zha@gmail.com',
      },
      {
        label: '个人网站',
        content: 'blog.zxueping.com/dist/index.html',
      },
      {
        label: '开始工作时间',
        content: '2015',
      },
    ],
  },
  {
    title: '求职意向',
    items: [
      { label: '意向岗位', content: '前端开发' },
      { label: '意向城市', content: '长沙' },
      { label: '期望月薪', content: '20k-30k' },
      { label: '求职类型', content: '社招' },
    ],
  },
]

export const expirences: {
  title: string
  content: ExpirenceCardProps[]
}[] = [
  {
    title: '教育经历',
    content: [
      {
        title: '2010.09-2014.07',
        titleContent: '中国地质大学(武汉)',
        cards: [
          {
            title: '安全工程',
            items: [],
          },
        ],
      },
    ],
  },
  {
    title: '项目经历',
    content: [
      {
        title: '2018-07 - 至今',
        titleContent: '上海亦存',
        cards: [
          {
            title:
              '网盘项目的重构,由backbone转向vue(https://www.jianguoyun.com)',
            items: [
              '技术架构- vue+iview+vuex',
              '负责内容- 整体架构/权限管理/文件列表/图片预览/文件上传等模块',
              '难点- 主要是业务上比较复杂,由于后端的接口数据不完全统一,所以用之前node中间层的编写经验,在接口请求数据与使用数据时增加一个类似中间层的用户数据格式转换。保证数据格式统一以及接口修改时编译管理。',
            ],
          },
          {
            title:
              '大纲笔记及集成到坚果云(https://gaochao.jianguoyun.com/p/DYKd4okQi_WfBxiNuoME)',
            items: [
              '技术架构 react+redux+rxjs+prosemirror',
              '负责内容- 整个项目',
              {
                title: ' 难点-',
                content: [
                  '富文本编辑器功能处理,这个主要是充分利用好 prosemirror,根据需求构建功能与监听变化',
                  '编辑状态管理。 rxjs 管理编辑状态',
                  '集成到坚果云, 这个主要是考虑到后续也有其他功能需要集成, 所以专门设计了一套 sdk 去与坚果云对接,并保证其独立性。',
                ],
              },
            ],
          },
          {
            title:
              'markdown 编辑器及集成(https://gaochao.jianguoyun.com/p/DcmfFfQQi_WfBxiQuoME)',
            items: [
              '技术架构 vue+vuex+stackedit',
              '负责内容- 整个项目',
              '难点-这个项目主要的难点是改变 stackedit 的 api 及部分 ui, 并保证后续能使用 stackedit 的新功能。 所以该项目在 stackedit 的基础上尽量少对原文件进行覆盖,而是通过修改 webpack 配置修改文件引入,在源文件的基础上对功能进行增删。',
            ],
          },
          {
            title: '论文查重小程序',
            items: [
              '技术架构 react+kbone',
              '技术负责点- 整个项目',
              {
                title: '难点-',
                content: [
                  '由于官方只提供了 vue 版本, 所以该项目只使用了 kbone 的 mp-webpack-plugin 插件, 拆分打包步骤由react->js->小程序。 方便后续修改及复用。',
                  '小程序 api 兼容及 typescript 集成。使用官方的 ts 文件,对 promise 等会出现各种奇怪问题的地方进行单独的 polyfills',
                ],
              },
            ],
          },
          {
            title:
              '坚果云网站群更新并进行移动端和IE8兼容（www.jianguoyun.com/s/*）',
            items: [
              '技术架构 Jquery+原生css,js',
              '内容 主要是页面样式修改， 低版本浏览器及移动端兼容兼容',
              {
                title: '要点-',
                content: ['页面自适应', '部分页面区分当前平台(下载 app)'],
              },
              {
                title: '主要方案',
                content: [
                  '1. 基于原有页面，做部分修改， 用媒体查询对 css 进行修改，这种重要针对网页端样式没有变动或者变动很小的页面。',
                  ' 2. 使用 html 和 css 的部分 hack 去对页面进行过滤， 在低版本 ie 上展示原来的页面， 在高版本 ie 和其他浏览器上则使用新的页面和 css, 这种情况可以在保留原有页面不变的情况下增加新的内容',
                ],
              },
            ],
          },
        ],
      },
      {
        title: '2017-03至2018-04',
        titleContent: '上海店达信息技术有限公司',
        cards: [
          {
            title: '店达商城',
            items: [
              '店达商城的迭代及日常更新。技术栈为(jquery+bootstrap),主要技术难点是购物车及订单结算时的计算。（http://www.diandainfo.cn/home）',
            ],
          },
          {
            title: '公司财务系统重构(jquery->vue)',
            items: [
              '前端使用(vue+elementui)构建页面，包含数据展示(echart+table)，excel导出，打印(canvas)及多项交互(付款，审核等)。vuex管 理全局数据，页面代码分割(60+页面)',
            ],
          },
          {
            title: '加盟商看板后台管理系统，供第三方加盟商及公司使用',
            items: [
              '前端采用jquery+boot strap构建页 第三方管理平台(多项目) 面，同时承担node中间层编写(express + request)，后端渲染(ejs模板)',
            ],
          },
        ],
      },
      {
        title: '2015.02-2017.02',
        titleContent: '广州百单网互联网科技有限公司',
        cards: [
          {
            title:
              '基础页面编写(h5+scss)，部分系统开发环境配置及后台对接。整理前端文档，规范  开发。',
            items: [],
          },
        ],
      },
    ],
  },
]

/**
 * 坚果云网站群移动端兼容（www.jianguoyun.com/s/*）
    基于原有网站进行修改
    保持对 ie8 的兼容
    页面自适应
    部分页面区分当前平台(下载 app)
    由于是陆陆续续进行修改，再加上移动端样式改动比较大，这边主要用了两种方案。 1. 基于原有页面，做部分修改， 用媒体查询对 css 进行修改，这种重要针对网页端样式没有变动或者变动很小的页面。

    2. 使用 html 和 css 的部分 hack 去对页面进行过滤， 在低版本 ie 上展示原来的页面， 在高版本 ie 和其他浏览器上则使用新的页面和 css
 */
