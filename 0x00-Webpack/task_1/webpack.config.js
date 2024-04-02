// task_1/webpack.config.js
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
	    main:vpath.resolve(__dirname, './js/dashboard_main.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

