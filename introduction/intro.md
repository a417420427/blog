项目经历

1.  网盘项目的重构,由 backbone 转向 vue(https://www.jianguoyun.com)
    技术架构- vue+iview+vuex
    负责技术点- 整体架构/权限管理/文件列表/图片预览/文件上传等模块
    难点- 主要是业务上比较复杂,由于后端的接口数据不完全统一,所以利用之前 node 中间层的编写经验,在接口请求数据与使用数据时增加一个中间层用户数据格式转换。保证数据格式统一以及接口修改时编译管理。
2.  大纲笔记及集成到坚果云(https://gaochao.jianguoyun.com/p/DYKd4okQi_WfBxiNuoME)
    技术架构 react+redux+rxjs+prosemirror
    技术负责点- 整个项目
    难点-
    富文本编辑器功能处理,这个主要是充分利用好 prosemirror,根据需求构建功能与监听变化
    编辑状态管理。 rxjs 管理编辑状态
    集成到坚果云, 这个主要是考虑到后续也有其他功能需要集成, 所以专门设计了一套 sdk 去与坚果云对接,并保证其独立性。
3.  markdown 编辑器及集成(https://gaochao.jianguoyun.com/p/DcmfFfQQi_WfBxiQuoME)
    技术架构 vue+vuex+stackedit
    技术负责点- 整个项目
    难点- 这个项目主要的难点是改变 stackedit 的 api 及部分 ui, 并保证后续能使用 stackedit 的新功能。 所以该项目在 stackedit 的基础上尽量少对原文件进行覆盖,而是通过修改 webpack 配置修改文件引入,在源文件的基础上对功能进行增删。
4.  论文查重小程序
    技术架构 react+kbone
    技术负责点- 整个项目
    难点-
    .项目配置, 由于官方只提供了 vue 版本, 所以该项目只使用了 kbone 的 mp-webpack-plugin 插件,拆分打包步骤, react-js-小程序。 方便后续修改及复用。
    小程序 api 兼容及 typescript 集成。使用官方的 ts 文件,对 promise 等会出现各种奇怪问题的地方进行单独的 polyfills

5.  坚果云合同库（https://legaldb.jianguoyun.com/）
    基于 vue 的 web 端网站
    响应式布局
    支持合同的 pdf 预览和下载

6.  坚果云网站群移动端兼容（www.jianguoyun.com/s/*）
    基于原有网站进行修改
    保持对 ie8 的兼容
    页面自适应
    部分页面区分当前平台(下载 app)
    由于是陆陆续续进行修改，再加上移动端样式改动比较大，这边主要用了两种方案。 1. 基于原有页面，做部分修改， 用媒体查询对 css 进行修改，这种重要针对网页端样式没有变动或者变动很小的页面。

    2. 使用 html 和 css 的部分 hack 去对页面进行过滤， 在低版本 ie 上展示原来的页面， 在高版本 ie 和其他浏览器上则使用新的页面和 css
