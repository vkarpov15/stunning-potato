const fs = require('fs');
const layout = require('./layout');
const marked = require('marked');

const posts = [
  {
    title: 'This Week on npm v20181116',
    content: '20181116_weekly.md',
    output: 'this-week-on-npm-20181116'
  }
];

for (const post of posts) {
  const file = `${__dirname}/posts/${post.content}`;
  const content = layout(`
    <h1>${post.title}</h1>
    ${marked(fs.readFileSync(file, 'utf8'))}
  `);
  fs.writeFileSync(`${__dirname}/${post.output}.html`, content);
}
