<template>
<div id="app">
  <div class="top">
    <img src="./assets/img/header-logo.png" alt="" class="logo">
    <a>活动页面</a>
    <div class="user">
      <a>小鱼</a>
      <a>退出</a>
    </div>

  </div>
  <div class="navbar">
    <ul class="nav nav-tabs">
      <li @click="showModule('pageSet')" :class="{current:mymodule ==='pageSet'}">页面设置</li>
      <li @click="showModule('colorSet')" :class="{current:mymodule ==='colorSet'}">颜色配置</li>
      <li @click="showModule('historyList')" :class="{current:mymodule ==='historyList'}">历史版本</li>
      <!-- <li @click='history'>历史版本</li> -->
      <li class="component">页面模块</li>
      <li @click="showModule('pageModule')" :class="{current:mymodule ==='pageModule'}">页面模板</li>
      <li @click="showModule('header')" :class="{current:mymodule ==='header'}">页头</li>
      <li @click="showModule('footer')" :class="{current:mymodule ==='footer'}">页脚</li>
      <li @click="showModule('paragraph')" :class="{current:mymodule ==='paragraph'}">段落文字</li>
      <li @click="showModule('title')" :class="{current:mymodule ==='title'}">标题</li>

      <li @click="showModule('workAdvice')" :class="{current:mymodule ==='workAdvice'}">作品推荐</li>
      <li @click="showModule('picLink')" :class="{current:mymodule ==='picLink'}">图片链接</li>
      <li @click="showModule('picText')" :class="{current:mymodule ==='picText'}">图文</li>
      <li @click="showModule('productList')" :class="{current:mymodule ==='productList'}">产品列表</li>
      <li>模板</li>
      <li>高级</li>

    </ul>
  </div>
  <div class="main">
    <div class="left ">
      <div class="pageSet" v-show="mymodule === 'pageSet'">
        <page-set></page-set>
      </div>

      <div class="leftPanel" v-show="mymodule === 'colorSet'">颜色配置</div>
      <div class="leftPanel" v-show="mymodule === 'pageModule'">页面模板</div>
      <div class="leftPanel" v-show="mymodule === 'historyList'">历史版本</div>
      <div class="leftPanel" v-show="mymodule === 'header'">
        页头1：
        <div class="header-comp-wrapper" @click="addComp('headerBannerImg1')">
          <img src="./assets/img/banner.jpg" alt="" class="width750">
        </div>

      </div>
      <div class="leftPanel" v-show="mymodule === 'footer'">
        <div class="footer-comp-wrapper" @click="addComp('whiteFooter')">
          页脚1：
          <img src="./assets/img/black-footer.png" alt="" class="width750">
        </div>
        <br>
        <div class="footer-comp-wrapper " @click="addComp('blackFooter')">
          页脚2：
          <img src="./assets/img/white-footer.png" alt="" class="width750">
        </div>

      </div>
      <div class="leftPanel" v-show="mymodule === 'paragraph'">
        <div class="paragraph-comp-wrapper " @click="addComp('paragraph1')">
          段落文字1
          <img src="./assets/img/paragraph1.png" alt="" class="width750">
        </div>
      </div>
      <div class="leftPanel" v-show="mymodule === 'title'">
        <div class="paragraph-comp-wrapper " @click="addComp('picTitle')">
          图片标题
          <img src="./assets/img/pic-title.png" alt="" class="width750">
        </div>
        <div class="paragraph-comp-wrapper " @click="addComp('title1')">
          #42文字标题
          <img src="./assets/img/text-title1.png" class="width750" alt="">
        </div>
      </div>
      <div class="leftPanel" v-show="mymodule === 'workAdvice'">作品推荐</div>
      <div class="leftPanel" v-show="mymodule === 'picLink'">图片链接</div>
      <div class="leftPanel" v-show="mymodule === 'picText'">图文</div>
      <div class="leftPanel" v-show="mymodule === 'productList'">产品列表</div>


    </div>
    <div class="middle ">

      <el-button-group>
        <el-button type="primary" icon="el-icon-refresh" @click='redo'>恢复</el-button>
        <el-button type="primary" icon="el-icon-remove">撤销</el-button>
        <el-button type="primary" icon="el-icon-upload">保存</el-button>
        <el-button type="primary" icon="el-icon-mobile-phone">预览</el-button>
        <!-- <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i>发布线上</el-button> -->
      </el-button-group>


      <div class="mobile-wrapper">
        <div class="mycomponent-wrapper " v-for='(myPageComp,index) in myPageComps' @click='getSelectedIndex(index)'>
          <div :is='myPageComp.name' class=" mycomponent div1" :class="{select:selectedCompIndex === index}">
            {{myPageComp.name}}
          </div>
          <div class="mybtns" v-if='selectedCompIndex === index'>
            <mybtns @remove='deleteThisComp(index)' @moveTop='moveTop(index)' @moveDown='moveDown(index)' @moveToFirst='moveToFirst(index)'></mybtns>
          </div>
        </div>

      </div>





    </div>
    <div class="right ">

      <div v-for='form in forms' class="form-wrapper">
        <div :is='form'></div>
      </div>
    </div>
  </div>
  <router-view/>
</div>
</template>

<script>
import pageSet from './components/wholePage/pageSet'
import mybtns from './components/mybtns'
import headerBannerImg1 from './components/header/headerBannerImg1'
import whiteFooter from './components/footer/blackFooter'
import blackFooter from './components/footer/whiteFooter'
import paragraph1 from './components/paragraph/paragraph1'
import picTitle from './components/title/picTitle'
import title1 from './components/title/title1'


// forms
import inputForm from './components/forms/inputForm'
import textareaForm from './components/forms/textarea'
import uploadImg from './components/forms/uploadImg'
import fontSet from './components/forms/fontSet'
import commonForms from './components/forms/commonForms'

const allForms = [
  {
    type: 'inputForm',
    name: 'inputForm',
    title: '输入框',
    options: [{
      lable: '',
      value: ''
    }]
  },
  {
    type: 'textarea',
    name: 'textareaForm',
    title: '文本框',
    options: [{
      lable: '',
      value: ''
    }]
  },
  {
    type: 'commonForms',
    name: 'commonForms',
    title: '文本样式',
    options: [{
      lable: '',
      value: ''
    }]
  },

  {
    type: 'uploadImg',
    name: 'headerBannerImg1',
    title: '上传图片',
    options: [{
      lable: '',
      value: ''
    }]
  },
]
const allComponents = [
  {
    name: 'headerBannerImg1',
    forms: ['uploadImg']

  },


  {
    name: 'whiteFooter',
    forms: ['uploadImg']
  },
  {
    name: 'blackFooter',
    forms: ['uploadImg']
  },
  {
    name: 'paragraph1',
    forms: ['textareaForm', 'fontSet','commonForms']
  },
  {
    name: 'title1',
    forms: ['inputForm', 'fontSet','commonForms']
  },
  {
    name: 'picTitle',
    forms: ['uploadImg','commonForms']
  },


]

export default {
  name: 'App',
  data() {
    return {
      mymodule: 'pageSet',
      selectedCompIndex: 0,
      allComponents: allComponents,
      allForms: allForms,
      myPageComps: [ //选择的组件
        {
          name: 'headerBannerImg1'
        }
      ],

      forms: [
        'uploadImg'
      ]




    }
  },
  computed:{

  },

  components: {
    pageSet,
    mybtns,
    headerBannerImg1,
    blackFooter,
    whiteFooter,
    paragraph1,
    picTitle,
    title1,

    // forms
    inputForm,
    textareaForm,
    uploadImg,
    fontSet,
    commonForms

  },
  watch: {

    selectedCompIndex: {
      handler: function(idx) {
        if (idx >= 0) {
          let name = this.myPageComps && this.myPageComps[idx].name;
          this.updateForms(name)
        } else {
          this.forms = []
        }
      },
      immediate: true
    },



  },
  methods: {
    getSelectedIndex(index) {
      if (this.selectedCompIndex === index) {
        this.selectedCompIndex = -1
      } else {
        this.selectedCompIndex = index
      }

    },

    showModule(moduleName) {
      this.mymodule = moduleName;
      // this.isCurrent = moduleName
    },

    deleteThisComp(index) {
      this.myPageComps.splice(index, 1)
      this.selectedCompIndex = -1
    },
    moveTop(index) {
      if (index > 0) {
        let comp = this.myPageComps.splice(index, 1);
        this.myPageComps.splice(index - 1, 0, comp[0]);
        this.selectedCompIndex--
      }
    },
    moveDown(index) {
      if (index >= 0) {
        let comp = this.myPageComps.splice(index, 1);
        this.myPageComps.splice(index + 1, 0, comp[0]);
        this.selectedCompIndex++
      }

    },
    moveToFirst(index) {
      if (index > 0) {
        let comp = this.myPageComps.splice(index, 1);
        this.myPageComps.splice(0, 0, comp[0]);
        this.selectedCompIndex = 0

      }
    },


    redo() {},

    addComp(compName) {
      const selected = {
        name: compName
      };
      const len = this.myPageComps.length;
      if (this.selectedCompIndex < 0 || this.selectedCompIndex === len - 1) { //添加到最后
        this.myPageComps.push(selected);
        this.selectedCompIndex = this.myPageComps.length - 1




      } else { //插入到中间
        this.myPageComps.splice(this.selectedCompIndex, 0, selected);
        this.updateForms(compName)

      }

    },
    updateForms(compName) {
      const currentComp = this.allComponents.find(val => val.name === compName)
      this.forms = currentComp.forms
    }





  }

}
</script>

<style>
a {
  display: inline-block;
  text-decoration: none!important;
}

html {
  font-size: 37.5px;
  overflow: hidden;
  height: 100%;
}

body {
  font-size: 18px;
  background-color: #eceef3;
}

html,
body,
#app {
  height: 100vh;
  width: 100vw;
}

img {
  vertical-align: middle;
}

* {
  box-sizing: border-box;
}

.top {
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 10px;
  z-index: 9999;
  box-shadow: 0 0 6px rgba(0, 0, 0, .2);
}

.top a {
  line-height: 50px;
}

.top .user {
  float: right;
  font-size: 14px;
}

.top .user a {
  margin-right: 30px;
}

.logo {
  width: 142px;
  margin-right: 50px;
  vertical-align: top;
}

.navbar {
  background-color: #2a3542;
  width: 10%;
  height: 100%;
  float: left;
  padding-top: 50px;
}


.nav-tabs {
  padding-top: 20px;
  list-style: none;
  color: #aeb2b7;
  font-size: 16px;
  line-height: 40px;
}

.nav-tabs>li {
  padding-left: 30px;
  height: 40px;
}

.nav-tabs>li:hover,
.nav-tabs>li.current {
  background-color: #414c62;
  cursor: pointer;
  color: #E1E8EF;
  line-height: 40px;
}

.nav-tabs>li.current::before {
  content: '';
  position: absolute;
  left: 0;
  display: block;
  background-color: #4e96f8;
  width: 5px;
  height: 40px;
}

.nav-tabs .component {
  font-weight: bold;
  color: #4991fd;
  padding-left: 10px;
  background-color: #2a3542!important;
}

.main {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding-top: 60px;
  height: 100vh;
  overflow: auto;
}

.left,
.right {
  width: 30%;
  padding-top: 50px;
}

.middle {
  width: 40%;
  background: #fff;
}

.left,
.right,
.middle {
  height: 100%;
  overflow: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #eee;
  border: 1px solid #e6e6e6;
}


/*iphone6*/

.mobile-wrapper {
  width: 377px;
  height: 667px;
  border: 1px solid #ddd;
  overflow: auto;
  margin: 20px auto 0;
  background-color: #fff;
}

.mycomponent {
  width: 100%;
}

.mycomponent:hover,
.select {
  opacity: .5;
}

.select {
  border: 3px solid #409EFF;
}

.mycomponent-wrapper {
  position: relative;
  width: 100%;
}



/* banner-img */

.leftPanel {
  width: 100%;
  margin: 0 auto;
}

.pageSet {
  width: 90%;
}

.header-comp-wrapper {
  width: 100%;
}

.banner-img {
  width: 100%;
}


.share-input-wrapper {
  margin-left: 20px;
}

.share-input {
  margin-bottom: 20px;
}

.sub-title {
  display: block;
  margin: 30px 0 10px;
}

.width750 {
  display: block;
  width: 80%;
  margin: 0 auto 20px;
}

.width750:hover {
  transform: scale(1.05);
}


.form-wrapper {
  width: 80%;
  margin: 0 auto 20px;
}
</style>
