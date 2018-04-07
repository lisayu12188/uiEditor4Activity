const path = require('path');
const fs = require('mz/fs');
const util = require('../../src/utils');
import * as Utils from '../../src/utils'

module.exports = async ctx => {
  console.log(ctx.query)
  const time = ctx.query.time
  const file = time+'.json'
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
