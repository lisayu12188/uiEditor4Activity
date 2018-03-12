const state = {
  imgSrc:''
}

const mutations = {
  changeImgSrc(state,{newImgSrc}){
    state.imgSrc = newImgSrc
  }
}

export default{
  state,
  mutations
}
