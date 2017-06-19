/**
 * Created by ionut on 15-6-2017.
 */

module.exports = function () {

    var config = {
        compiledTs: 'app/**/*.js',
        dist: 'dist',
        index: 'index.html',
        ngTemplates: 'app/**/*.html',
        sourceMaps: 'app/**/*.map',
        tsFiles: 'app/**/*.ts',
        tsConfig: 'tsconfig.json',
        vendors: base + 'vendors'
    };

    return config;
};