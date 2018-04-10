import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import VuexUndoRedo from "vuex-undo-redo"

import components from './components'

import imgSrc from '../assets/img/pic-title.png'
import bannerSrc from '../assets/img/banner.jpg'

Vue.use(Vuex)
// Vue.use(VuexUndoRedo)

const debug = process.env.NODE_ENV !== 'production'


const datas = {
  headerBannerImg1:{
    name:'headerBannerImg1',
    data:{
      src:bannerSrc
    },
    // forms:['uploadImg']
  },
  paragraph1:{
    name:'paragraph1',
    data:{
      text:'糖尿病是一种代谢紊乱综合征，除血糖高以外，往往还同时伴有血脂代谢异常等，共同构成了糖尿病慢性并发症的高危因素。'
    },

    // forms:['textareaForm']
  },
  picTitle:{
    name:'picTitle',
    data:{
      src:imgSrc
    },
    // forms:['uploadImg']
  },
  title1: {
    name:'title1',
    data:{
      text:'我是h2标题',
      color:'#333'
    },
    // forms:['textareaForm']
  },
  blackFooter:{
    name:'blackFooter',
    data:{
      backgroundColor:'transparent'
    },
    // forms:['backgroundColor']
  },
  whiteFooter: {
    name:'whiteFooter',
    data:{
      backgroundColor:'transparent'
    },
    // forms:['backgroundColor']
  },


}


// 拷贝
function clone(obj){
  return JSON.parse(JSON.stringify(obj))
}
export default new Vuex.Store({
  actions,
  modules: {


  },

  state:{
    mymodule: 'pageSet',
    selectedCompIndex: 0,
    allComponents: components.allComponents,
    allForms: components.allForms,
    myPageComps:[
      clone(datas.headerBannerImg1),
    ],
    pageConfig:{
      actCode:'',
      actTitle:'',

        shareLink:'',
        shareTitle:'',
        shareContent:'',
        shareDesc:'',
        sharePic:''

    },
    activities:[],
    currentAct:null

  },



  mutations:{
    emptyState() {
      this.replaceState({ myval: null });
    },
    getSelectedIndex(state,index) {
      if (state.selectedCompIndex === index) {
        state.selectedCompIndex = -1
      } else {
        state.selectedCompIndex = index
      }

    },

    showModule(state,moduleName) {
      state.mymodule = moduleName;
      // state.isCurrent = moduleName
    },

    deleteThisComp(state,index) {
      state.myPageComps.splice(index, 1)
      state.selectedCompIndex = -1
    },
    moveTop(state,index) {
      if (index > 0) {
        let comp = state.myPageComps.splice(index, 1);
        state.myPageComps.splice(index - 1, 0, comp[0]);
        state.selectedCompIndex--
      }
    },
    moveDown(state,index) {
      if (index >= 0) {
        let comp = state.myPageComps.splice(index, 1);
        state.myPageComps.splice(index + 1, 0, comp[0]);
        state.selectedCompIndex++
      }

    },
    moveToFirst(state,index) {
      if (index > 0) {
        let comp = state.myPageComps.splice(index, 1);
        state.myPageComps.splice(0, 0, comp[0]);
        state.selectedCompIndex = 0

      }
    },

    addComp(state,compName) {
      let selected = clone(datas[compName]);
      const len = state.myPageComps.length;
      if (state.selectedCompIndex < 0 || state.selectedCompIndex === len - 1) { //添加到最后
        state.myPageComps.push(selected);
        state.selectedCompIndex = state.myPageComps.length - 1




      } else { //插入到中间
        state.myPageComps.splice(state.selectedCompIndex, 0, selected);
        updateForms(state,compName)

      }


    },

    uploadShareImg(state,payload){
      state.pageConfig.sharePic = payload.url
    },


    changeValue(state,payload){
      state.myPageComps[state.selectedCompIndex].data[payload.key] = payload.value
    },

    getActivities(state,list){
      state.activities = list
    },

    getPageConfigComps(state,list){
      state.pageConfig = list.pageConfig
      state.myPageComps = list.components
    },

    getCurrentAct(state,act){
      state.currentAct = act
    },

    setPageConfig(state,payload){
      state.pageConfig[payload.key] = payload.value
    },










  },


  strict: debug,
})

function clone(obj){
  return JSON.parse(JSON.stringify(obj))
}
