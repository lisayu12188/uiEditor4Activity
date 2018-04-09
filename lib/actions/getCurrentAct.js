const path = require('path');
const fs = require('mz/fs');

module.exports = async ctx => {
  const id = ctx.query.id
  const file = id+'.json'
  const filePath = path.join(__dirname, '../../data/'+file);
  console.log(filePath)
  if (!(await fs.exists(filePath))) {
    ctx.throw(404);
    return;
  }

  const data = await fs.readFile(filePath);
  const fileData = JSON.parse(data);
  ctx.body = {success: true,code:2000,message:'获取文件成功',data:fileData};
};
