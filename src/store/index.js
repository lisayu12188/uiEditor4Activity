import Vue from 'vue'
import Vuex from 'vuex'
import img from './modules/img'
import paragraph from './modules/paragraph'

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
    allComponents: allComponents,
    allForms: allForms,
    myPageComps:[]
  },
  mutations:{
    getSelectedIndex(index) {
      if (state.selectedCompIndex === index) {
        state.selectedCompIndex = -1
      } else {
        state.selectedCompIndex = index
      }

    },

    showModule(moduleName) {
      state.mymodule = moduleName;
      // state.isCurrent = moduleName
    },

    deleteThisComp(index) {
      state.myPageComps.splice(index, 1)
      state.selectedCompIndex = -1
    },
    moveTop(index) {
      if (index > 0) {
        let comp = state.myPageComps.splice(index, 1);
        state.myPageComps.splice(index - 1, 0, comp[0]);
        state.selectedCompIndex--
      }
    },
    moveDown(index) {
      if (index >= 0) {
        let comp = state.myPageComps.splice(index, 1);
        state.myPageComps.splice(index + 1, 0, comp[0]);
        state.selectedCompIndex++
      }

    },
    moveToFirst(index) {
      if (index > 0) {
        let comp = state.myPageComps.splice(index, 1);
        state.myPageComps.splice(0, 0, comp[0]);
        state.selectedCompIndex = 0

      }
    },

    addComp(state,{compName}) {
      const selected = {
        name: compName
      };
      const len = state.myPageComps.length;
      if (state.selectedCompIndex < 0 || state.selectedCompIndex === len - 1) { //添加到最后
        state.myPageComps.push(selected);
        state.selectedCompIndex = state.myPageComps.length - 1




      } else { //插入到中间
        state.myPageComps.splice(state.selectedCompIndex, 0, selected);
        state.updateForms(compName)

      }

    },
  },
  strict: debug,
})
