const state = {
  value:['糖尿病是一种代谢紊乱综合征，除血糖高以外，往往还同时伴有血脂代谢异常等，共同构成了糖尿病慢性并发症的高危因素。']
}

const mutations = {
  changeValue(state,{value}){
    state.value.push(value)
  }
}

export default{
  state,
  mutations
}
