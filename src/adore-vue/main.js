console.log("execute main.js")
require.config({
    //By default load any module IDs from js/lib
    baseUrl: 'lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        Vue: './vue',
        VueParser: './requirejs-vue'
    }
});
require(
    ['Vue', 'VueParser'],
    function (Vue, VueParser) {
        // now load our single-file-component app
        // syntax: <vue loader module>!<relative path to .vue file>
        require(['VueParser!App'], function (app) {
            // mount app.
            //console.log(app.prop)
            app.$mount('#app');
        });
    }
);