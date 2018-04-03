  const pathUtil = require('path');
const fs = require('mz/fs');


function add0(num){
  if(num < 10){
    return "0"+num
  }
  return num
}
function parseTime(ms){
  let time  = new Date(ms)
  return (  '' + time.getFullYear() + add0((time.getMonth()+1)) + add0(time.getDate()) + add0(time.getHours()) + add0(time.getMinutes()) + add0(time.getSeconds())  )
}

module.exports = async ctx => {
  //前端传{file:'',name:'',components:{}}
  const body =  ctx.request.body
  let fileName  = body.file
  let now = Date.now()
  if(!fileName){
    body.data.time = now //写入时间
    fileName =  parseTime(now)
  }else{
    body.data.time = fileName
    fileName = parseTime(fileName)
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

  ctx.body = {success: true,code:2000,message:'文件保存成功'};

};
