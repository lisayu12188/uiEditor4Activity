  const pathUtil = require('path');
const fs = require('mz/fs');


module.exports = async ctx => {
  //前端传{name:'',components:{}}
  const body =  ctx.request.body
  let fileName  = body.file
  let now = Date.now()
  if(body.data){
    body.data.time = now
  }
  now = new Date(now)
  const data = JSON.stringify(body.data)

  // console.log(data);
  if(!fileName){
    fileName =  '' + now.getFullYear() + (now.getMonth()+1) + now.getDate() + now.getHours() + now.getMinutes() + now.getSeconds()
  }
  const file = pathUtil.join(__dirname, '../../data/'+ fileName + '.json');

  await fs.writeFile(file,data,(err) => {
    if (err){
      throw err
    } else{
      console.log('ok')
    }

  })

  ctx.body = {success: true,code:2000,message:'文件保存成功'};

};
