// next.config.js
module.exports = {

    // following config will create a build folder instead of a .next folder
    distDir: 'build',
    
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'serverRuntimeConfig',
        secondSecret: process.env.NODE_ENV, // Pass through env variables
        INIT_USER_SERVER: process.env.INIT_USER,
        REACT_APP_INIT_USER: process.env.REACT_APP_INIT_USER,
      },
      
      publicRuntimeConfig: {
        mySecret: 'publicRuntimeConfig',
        // Will be available on both server and client
        INIT_USER_CLIENT: process.env.INIT_USER,
        REACT_APP_INIT_USER: process.env.REACT_APP_INIT_USER,
      },
  }