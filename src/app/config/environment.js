export default {
  development: {
    isProd: false
  },
  production: {
    isProd: true
  }
}[process.env.NODE_ENV || 'development'];
