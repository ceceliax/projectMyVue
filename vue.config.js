module.exports = {
    configureWebpack: {
        // 配置路径相关
        resolve: {
            alias: {
                // 默认配置了@为src
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views'

            }
        }
    }
}