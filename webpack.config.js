const path = require('path');

module.exports = env => {  
    return {
      performance: { hints: false },
      mode: 'production',
      entry: './index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    };
  };