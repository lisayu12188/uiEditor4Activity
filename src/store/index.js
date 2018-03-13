import Vue from 'vue'
import Vuex from 'vuex'
import img from './modules/img'
import paragraph from './modules/paragraph'
import components from './components'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // modules: {
  //   img,
  //   paragraph
  //
  // },

  state:{
    mymodule: 'pageSet',
    selectedCompIndex: 0,
    allComponents: components.allComponents,
    allForms: components.allForms,
    myPageComps:[{
      name:'paragraph1',
      data:{
        text:'糖尿病是一种代谢紊乱综合征，除血糖高以外，往往还同时伴有血脂代谢异常等，共同构成了糖尿病慢性并发症的高危因素。',
        color:'#333',
        fontSize:0.4800,//18px
        lineHeight:0.8533,//32px
        padding:{
          top:.2667,//20px
          bottom:0,
          left:.32,//24px
          right:.32
        },
        margin:{
          top:0,
          bottom:0,
          left:0,
          right:0
        }



      }
    }],
    forms:[
      // 'uploadImg'
      'textareaForm', 'fontSet','commonForms'
    ]
  },
  mutations:{
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

    deletestateComp(state,index) {
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
      const selected = {
        name: compName
      };
      const len = state.myPageComps.length;
      if (state.selectedCompIndex < 0 || state.selectedCompIndex === len - 1) { //添加到最后
        state.myPageComps.push(selected);
        state.selectedCompIndex = state.myPageComps.length - 1




      } else { //插入到中间
        state.myPageComps.splice(state.selectedCompIndex, 0, selected);
        updateForms(state,compName)

      }


    },

    updateForms(state, compName){
      updateForms(state,compName)
    },

    changeValue(state,payload){
      state.myPageComps[state.selectedCompIndex].data[payload.key] = payload.value
    },

    changeStyle(state,payload){
      state.myPageComps[state.selectedCompIndex].data[payload.key][payload.subKey] = payload.value
    },



  },


  strict: debug,
})

function updateForms(state,compName) {
  const currentComp = state.allComponents.find(val => val.name === compName)
  state.forms = currentComp && currentComp.forms
}
