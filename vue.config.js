module.exports = {
    chainWebpack: config => {
        config.plugins.delete("prefetch") //删除页面引用js时的rel="prefetch"属性，禁止后台异步下载暂时不需要的其他页面组件--节约流量
    }
}