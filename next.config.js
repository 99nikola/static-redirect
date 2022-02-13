module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "latn"],
    defaultLocale: "en"
  },
  async redirects() {
    return [
      {
        source: "/en/news/prva-novost",
        destination: "/en/news/first-news",
        permanent: false,
        locale: false
      },
      {
        source: "/latn/news/first-news",
        destination: "/latn/news/prva-novost",
        permanent: false,
        locale: false
      }
    ]
  }
}
