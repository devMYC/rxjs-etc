"use strict";

exports = module.exports = function (config) {

    config.set({
        autoWatch: false,
        basePath: "",
        browsers: ["PhantomJS"],
        colors: true,
        concurrency: Infinity,
        exclude: [],
        files: [
            "node_modules/core-js/client/core.js",
            "node_modules/tslib/tslib.js",
            "bundles/rxjs-etc-test.umd.js"
        ],
        frameworks: ["mocha"],
        logLevel: config.LOG_INFO,
        port: 9876,
        preprocessors: {},
        proxies: {},
        reporters: ["spec"],
        singleRun: true
    });
};
