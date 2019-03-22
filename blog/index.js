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
    title: 'This Week on npm v20190322: core-js@3.0.0, uglify-js@3.5.0',
    content: '20190322_weekly.md',
    output: 'this-week-on-npm-20190322',
    description: 'New releases from the most popular npm packages from March 15 - March 22.',
    image: 'https://s3.amazonaws.com/codebarbarian-images/20190322_books.jpeg'
  },
  {
    title: 'This Week on npm v20190315: dotenv@7.0.0',
    content: '20190315_weekly.md',
    output: 'this-week-on-npm-20190315',
    description: 'New releases from the most popular npm packages from March 8 - March 15.',
    image: 'https://s3.amazonaws.com/codebarbarian-images/20190315_books.jpeg'
  },
  {
    title: 'This Week on npm v20190308: ajv@6.10.0, eslint@5.15.0',
    content: '20190308_weekly.md',
    output: 'this-week-on-npm-20190308',
    description: 'New releases from the most popular npm packages from March 1 - March 8.',
    image: 'https://s3.amazonaws.com/codebarbarian-images/20190308_winery.jpg'
  },
  {
    title: 'This Week on npm v20190222: eslint@5.14.0, next@8.0.0',
    content: '20190222_weekly.md',
    output: 'this-week-on-npm-20190222',
    description: 'New releases from the most popular npm packages from February 15 - February 22.',
    image: 'https://s3.amazonaws.com/codebarbarian-images/20190222_books.jpg'
  },
  {
    title: 'This Week on npm v20190215',
    content: '20190215_weekly.md',
    output: 'this-week-on-npm-20190215',
    description: 'New releases from the most popular npm packages from February 8 - February 15.',
    image: 'https://s3.amazonaws.com/codebarbarian-images/20190215_books.jpeg'
  },
  {
    title: 'This Week on npm v20190201: rxjs@6.4.0',
    content: '20190201_weekly.md',
    output: 'this-week-on-npm-20190201',
    description: 'New releases from the most popular npm packages from January 25 - February 1.',
    image: 'https://s3.amazonaws.com/codebarbarian-images/20190201_books.jpeg'
  },
  {
    title: 'This Week on npm v20190125: onetime@3.0.0',
    content: '20190125_weekly.md',
    output: 'this-week-on-npm-20190125',
    description: 'New releases from the most popular npm packages from January 18 - January 25.',
    image: 'https://s3.amazonaws.com/codebarbarian-images/20190126_books.jpeg'
  },
  {
    title: 'This Week on npm v20190118: ajv@6.7.0',
    content: '20190118_weekly.md',
    output: 'this-week-on-npm-20190118',
    description: 'New releases from the most popular npm packages from January 11 - January 18.',
    image: 'https://s3.amazonaws.com/codebarbarian-images/20190118_books.jpeg'
  },
  {
    title: 'This Week on npm v20190111: tough-cookie@3.0.0',
    content: '20190111_weekly.md',
    output: 'this-week-on-npm-20190111',
    description: 'New releases from the most popular npm packages from January 4 - January 11.',
    image: 'https://s3.amazonaws.com/codebarbarian-images/20190111_books.jpg'
  },
  {
    title: 'This Week on npm v20181228: eslint@5.11.0, Changelog Links',
    content: '20181228_weekly.md',
    output: 'this-week-on-npm-20181228',
    description: 'New releases from the most popular npm packages from December 21 - December 28.',
    image: 'https://s3.amazonaws.com/codebarbarian-images/book.jpeg'
  },
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
