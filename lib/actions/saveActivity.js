const pathUtil = require('path');
const fs = require('mz/fs');


module.exports = async ctx => {
  //前端传{name:'',components:{}}
  console.log(ctx.request.body);

  const body =  ctx.request.body
  const fileName  = body.file
  const now = new Date()
  body.data.time = now
  const data = JSON.stringify(body.data）
  if(!file){
    fileName =  '' + now.getFullYear() + (now.getMonth()+1) + now.getDate() + now.getHours() + now.getMinutes() + now.getSeconds()
  }
  const file = pathUtil.join(__dirname, '../../data/'+ fileName + '.json');

  fs.writeFileSync(file,data, (err) => {
    if (err) throw err;
    ctx.body = {success: true,code:2000,message:'文件保存成功'};
  })
};
