const pathUtil = require('path');
const fs = require('mz/fs');
const Utils = require('../../src/utils');

module.exports = async ctx => {
  //前端传{file:'',name:'',components:{}}
  const body =  ctx.request.body
  let id  = body.id
  console.log(id)
  let fileName = Utils.parseTime(id)
  const now = Date.now()
  if(isNaN(fileName)){
    fileName =  Utils.parseTime(now)
  }
  let file = pathUtil.join(__dirname, '../../data/'+ fileName + '.json')
  if (!(await fs.exists(file))) {
    body.data.time = now //写入时间
    fileName =  Utils.parseTime(now)
  }
  file = pathUtil.join(__dirname, '../../data/'+ fileName + '.json')
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
