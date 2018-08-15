var config = {
  entry:  __dirname + "/src/app.js",

    //...
    output: {
  
      filename: "../public/bundle.js"
    },
  };
  
  module.exports = (env, argv) => {
  
    if (argv.mode === 'development') {
      config.devtool = 'source-map';
    }
  
    if (argv.mode === 'production') {
      //...
    }
  
    return config;
  };