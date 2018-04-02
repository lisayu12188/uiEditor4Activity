const pathUtil = require('path');
const fs = require('mz/fs');


module.exports = async ctx => {
  console.log(ctx.request.body.name);
  ctx.body = {success: true};
};
