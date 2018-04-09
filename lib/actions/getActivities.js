const pathUtil = require('path');
const fs = require('mz/fs');


module.exports = async ctx => {
  const dir = pathUtil.join(__dirname, '../../data');
  const names = await fs.readdir(dir);
  const defers = names.map(async name => {
    const path = pathUtil.join(dir, name);
    const body = await fs.readFile(path);
    const data = JSON.parse(body);
    return data;
  });
  const list = await Promise.all(defers);
  ctx.body = {success: true,code:2000, data: list};


};
