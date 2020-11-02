const path = require('path');
// vue-loader 15.XX之后处理vue文件需要配置插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: './src/main.js'
    },
    output: {
        library: "app",
        libraryTarget: "amd",
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    // 处理import的别名
    resolve: {
        // 扩展import from 格式能够导入的文件格式
        extensions: [".js", ".json", ".vue"],

        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '&': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            // babel编译处理js文件
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // 处理scss文件
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // 处理.vue文件
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            // 处理.svg文件
            {
                test: /\.svg$/,
                include: path.resolve(__dirname, 'src/icons'),
                loader: "svg-sprite-loader",
                options: {
                    symbolId: 'icon-[name]'
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}