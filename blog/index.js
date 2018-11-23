const fs = require('fs');
const layout = require('./layout');
const postLayout = require('./post');
const marked = require('marked');

const posts = [
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

for (const post of posts) {
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
