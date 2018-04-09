const pathUtil = require('path');
const fs = require('mz/fs');
const Utils = require('../../src/utils');

module.exports = async ctx => {
  //前端传{file:'',name:'',components:{}}
  const body =  ctx.request.body
  let fileName  = body.id
  let now = Date.now()
  if(!fileName){
    body.data.time = now //写入时间
    fileName =  Utils.parseTime(now)
  }else{
    body.data.time = fileName

  }
  const file = pathUtil.join(__dirname, '../../data/'+ fileName + '.json');
  const data = JSON.stringify(body.data)
  await fs.writeFile(file,data,(err) => {
    if (err){
      throw err
    } else{
      console.log('ok')
    }

  })

  ctx.body = {success: true,code:2000,message:'文件保存成功',time:body.data.time};

};
