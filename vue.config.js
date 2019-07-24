module.exports = {
  baseUrl: process.env.TYPE === "PAGES" ? "/donationshop/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: process.env.TYPE === "PAGES" ? "$env: 'pages';" : "$env: 'production';"
      }
    }
  }
};
