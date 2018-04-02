const pathUtil = require('path');
const fs = require('mz/fs');


module.exports = async ctx => {
  const name = ctx.query.name;
  console.log(name);

  const dir = pathUtil.join(__dirname, '../../data');
  const names = await fs.readdir(dir);
  const defers = names.map(async name => {
    const path = pathUtil.join(dir, name);
    const body = await fs.readFile(path);
    const data = JSON.parse(body);
    return data;
  });
  const list = await Promise.all(defers);
  // ctx.body = {success: true, data: list};
  ctx.cookies.set('name', 'tobi');
  ctx.body = '<h1>Hello World</h1>';
  // ctx.redirect('https://www.google.com');

};
