const fs = require('fs');
const layout = require('./layout');
const postLayout = require('./post');
const marked = require('marked');

const highlight = require('highlight.js');
marked.setOptions({
  highlight: function(code) {
    return highlight.highlight('JavaScript', code).value;
  }
});

const posts = [
  {
    title: 'This Week on npm v20181221: webpack@4.28.0, Fixing GitHub Security Warnings',
    content: '20181221_weekly.md',
    output: 'this-week-on-npm-20181221',
    description: 'New releases from the most popular npm packages from December 14 - December 21.',
    image: 'https://i.imgur.com/MGjWxTu.png'
  },
  {
    title: 'This Week on npm v20181214: moment@2.23.0, Automated vs Manual Changelogs',
    content: '20181214_weekly.md',
    output: 'this-week-on-npm-20181214',
    description: 'New releases from the most popular npm packages from December 7 - December 14.',
    image: 'https://i.imgur.com/bBOgZxu.jpg'
  },
  {
    title: 'This Week on npm v20181207: is-ci, react-redux, How Often Should You Update Dependencies?',
    content: '20181207_weekly.md',
    output: 'this-week-on-npm-20181207',
    description: 'New releases from the most popular npm packages from November 30 - December 7.',
    image: 'https://i.imgur.com/vA0a4eD.png'
  },
  {
    title: 'This Week on npm v20181130: event-stream, qs, snapdragon-node',
    content: '20181130_weekly.md',
    output: 'this-week-on-npm-20181130',
    description: 'New releases from the most popular npm packages from November 23 - November 30.',
    image: 'https://i.imgur.com/S0ObOcJ.png'
  },
  {
    title: 'This Week on npm v20181123',
    content: '20181123_weekly.md',
    output: 'this-week-on-npm-20181123',
    description: 'New releases from the most popular npm packages from Nov 16 to Nov 23, broken down by major, minor, and patch releases.',
    image: 'https://i.imgur.com/XZlI1P3.jpg'
  },
  {
    title: 'This Week on npm v20181116',
    content: '20181116_weekly.md',
    output: 'this-week-on-npm-20181116',
    description: 'New releases from the most popular npm packages from Nov 9 - Nov 16.',
    image: 'https://i.imgur.com/qsKE9gx.jpg'
  }
];

for (let i = 0; i < posts.length; ++i) {
  const post = posts[i];
  const file = `${__dirname}/posts/${post.content}`;
  const content = postLayout(`
    <h1>${post.title}</h1>
    ${marked(fs.readFileSync(file, 'utf8'))}
  `, post);
  fs.writeFileSync(`${__dirname}/${post.output}.html`, content);
}

const index = layout(`
  <h1>The JSReport Blog</h1>

  ${posts.map(listView).join('\n')}
`, { title: 'Blog' });

fs.writeFileSync(`${__dirname}/index.html`, index);

function listView(post) {
  return `
    <div class="post">
      <div class="post-image">
        <img src="${post.image}">
      </div>
      <div class="post-description">
        <h2><a href="/blog/${post.output}">${post.title}</a></h2>
        <i>${post.description}</i>
      </div>
      <div style="clear: both"></div>
    </div>
  `;
}
