const withImages = require('next-images');
const fetch = require('isomorphic-fetch');

module.exports = withImages({
  webpack(config) {
    return config
  },
  async exportPathMap(defaultPathMap) {
    const pathMap = {
      '/': { page: '/home' },
    };
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    
    data.map(post => {
      pathMap[`/detalhes/${post.id}`] = { page: '/detalhes', query: { idpost: post.id } };
    });
    return pathMap;
  }
})