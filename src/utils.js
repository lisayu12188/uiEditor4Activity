// export {cloneDeep} from 'lodash'
const cloneDeep = require('lodash/fp/cloneDeep')


const parseQuery = (qs) => {
  qs = qs.replace(/^\?/, '');
  var parts = qs.split(/&/);
  var re = /([^=]+)=(.*)/;
  var query = {};
  for (var i = 0; i < parts.length; i++) {
    var match = re.exec(parts[i]);
    if (match) {
      query[match[1]] = decodeURIComponent(match[2]);
    }
  }
  return query;
}



function add0(num) {
  if (num < 10) {
    return "0" + num
  }
  return num
}
//type=1 :  y-m-d h:m:s
//type=undefined :  2018091010
const parseTime = (ms,type=undefined) => {
  if(!ms){
    return
  }
  let time = new Date(Number(ms))
  if(type==1){
    let timeParsed =  time.getFullYear() +'-' + (time.getMonth()+ 1) +'-' + time.getDate() +' ' + add0(time.getHours()) +':' + add0(time.getMinutes() ) +':' + add0(time.getSeconds())
    return timeParsed
  }else{
    return ('' + time.getFullYear() + add0((time.getMonth() + 1)) + add0(time.getDate()) + add0(time.getHours()) + add0(time.getMinutes()) + add0(time.getSeconds()))
  }

}



module.exports = {
  cloneDeep:cloneDeep,
  parseTime: parseTime,
  parseQuery: parseQuery
}
