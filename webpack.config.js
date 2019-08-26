const path = require('path');
// vue-loader 15.XX之后处理vue文件需要配置插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
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
            // 处理css文件
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 处理.vue文件
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}