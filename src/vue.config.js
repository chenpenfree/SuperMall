module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets', // @ : 表示src/的别名
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}