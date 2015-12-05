'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'activate-power-mode': 'index'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'POWERMODE'
    },
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['src', 'lib', 'node_modules']
    }
};
