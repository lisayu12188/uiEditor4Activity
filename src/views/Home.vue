<template>
<div>
  <div class="top">
    <img src="../assets/img/header-logo.png" alt="" class="logo">

    <a>活动页面</a>

    <el-button round type="success" icon="el-icon-circle-plus-outline"  size='small' @click='createNew'>新建</el-button>


    <div class="user">
      <a>小鱼</a>
      <a>退出</a>
    </div>

  </div>
  <div class="navbar">
    <ul class="nav nav-tabs">
      <li @click="showModule('pageSet')" :class="{current:mymodule ==='pageSet'}">页面设置</li>
      <li @click="showModule('colorSet')" :class="{current:mymodule ==='colorSet'}">颜色配置</li>
      <li @click="showModule('historyList')" :class="{current:mymodule ==='historyList'}">活动列表</li>
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
      <li @click="showModule('space')" :class="{current:mymodule ==='space'}">模块间距</li>


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
      <div class="leftPanel" v-show="mymodule === 'historyList'">
        <activities></activities>
      </div>
      <div class="leftPanel" v-show="mymodule === 'header'">
        页头1：
        <div class="header-comp-wrapper" @click="addComp('headerBannerImg1')">
          <img src="../assets/img/banner.jpg" alt="" class="width750">
        </div>

      </div>
      <div class="leftPanel" v-show="mymodule === 'footer'">
        <div class="footer-comp-wrapper" @click="addComp('whiteFooter')">
          页脚1：
          <img src="../assets/img/black-footer.png" alt="" class="width750">
        </div>
        <br>
        <div class="footer-comp-wrapper " @click="addComp('blackFooter')">
          页脚2：
          <img src="../assets/img/white-footer.png" alt="" class="width750">
        </div>

      </div>
      <div class="leftPanel" v-show="mymodule === 'paragraph'">
        <div class="paragraph-comp-wrapper " @click="addComp('paragraph2')">
          段落文字1 （无边距）
          <img src="../assets/img/para2.png" alt="" class="width750">
        </div>
        <div class="paragraph-comp-wrapper " @click="addComp('paragraph1')">
          段落文字2 （下边距32px）
          <img src="../assets/img/para1.png" alt="" class="width750">
        </div>

      </div>
      <div class="leftPanel" v-show="mymodule === 'title'">
        <div class="paragraph-comp-wrapper " @click="addComp('picTitle')">
          图片标题
          <img src="../assets/img/pic-title.png" alt="" class="width750">
        </div>
        <div class="paragraph-comp-wrapper " @click="addComp('title1')">
          #42文字标题
          <img src="../assets/img/text-title1.png" class="width750" alt="">
        </div>
      </div>
      <div class="leftPanel" v-show="mymodule === 'workAdvice'">作品推荐</div>
      <div class="leftPanel" v-show="mymodule === 'picLink'">图片链接</div>
      <div class="leftPanel" v-show="mymodule === 'picText'">
        702px 图片：
          <img src="../assets/img/banner.jpg" alt="" class="width750" @click="addComp('img702')">
      </div>

      <div class="leftPanel" v-show="mymodule === 'space'">
        模块间距：
          <div @click="addComp('space')" class="width750">
          </div>
      </div>
      <div class="leftPanel" v-show="mymodule === 'productList'">产品列表</div>


    </div>
    <div class="middle ">

      <el-button-group>
        <el-button type="primary" icon="el-icon-refresh" @click='redoComp'>恢复</el-button>
        <el-button type="primary" icon="el-icon-remove" @click='undoComp'>撤销</el-button>
        </el-button-group>

        <el-button-group>
        <el-button type="danger" icon="el-icon-upload" @click='save'>保存</el-button>




        <el-button type="warning" icon="el-icon-sold-out" @click='exportHtml' size='small'>
      导出</el-button>



        <!-- <el-button type="primary" icon="el-icon-mobile-phone" >预览</el-button> -->
        <!-- <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i>发布线上</el-button> -->

      </el-button-group>

      <a :href="previewUrl"><el-button type="success" icon="el-icon-mobile-phone">
    预览</el-button></a>









      <div class="mobile-wrapper">
        <div class="mycomponent-wrapper " v-for='(myPageComp,index) in myPageComps' @click='getSelectedIndex(index)'>
          <div :is='myPageComp.name' class=" mycomponent div1" :class="{select:selectedCompIndex === index}" v-model='myPageComp.data'>
            <!-- {{myPageComp.name}} -->
            <!-- {{myPageComp.data.text}} -->


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
</div>
</template>

<script>
//添加活动内容组件
import activities from '../components/page/activities'
import pageSet from '../components/wholePage/pageSet'
import mybtns from '../components/mybtns'
import headerBannerImg1 from '../components/header/headerBannerImg1'
import whiteFooter from '../components/footer/blackFooter'
import blackFooter from '../components/footer/whiteFooter'
import paragraph1 from '../components/paragraph/paragraph1'
import paragraph2 from '../components/paragraph/paragraph2'
import picTitle from '../components/title/picTitle'
import title1 from '../components/title/title1'
import img702 from '../components/image/img702'
import space from '../components/trims/space'





// forms
import inputForm from '../components/forms/inputForm'
import textareaForm from '../components/forms/textarea'
import uploadImg from '../components/forms/uploadImg'
import backgroundColor from '../components/forms/backgroundColor'
import height from '../components/forms/height'

import * as Utils from '../utils'
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
import components from '../store/components'


function parseQuery(qs) {
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
export default {
  data() {
    return {



    }
  },

  computed:{
    ...mapState([
    'mymodule',
    'selectedCompIndex',
    // 'allComponents',
    'myPageComps',
    'currentAct',
    'pageConfig'

  ]),

  forms(){
     let name = this.myPageComps[this.selectedCompIndex] && this.myPageComps[this.selectedCompIndex]['name']
     return components.components_forms[name]
  },
  previewUrl(){
    const id = Utils.parseTime(this.$route.query.id)
    return 'http://dev.91jkys.com:8089/html?id=' + id
  }

},

  components: {
    pageSet,
    mybtns,
    headerBannerImg1,
    blackFooter,
    whiteFooter,
    paragraph1,
    paragraph2,
    picTitle,
    title1,

    activities,
    img702,
    space,


    // forms
    inputForm,
    textareaForm,
    uploadImg,
    backgroundColor,
    height
    // fontSet,
    // commonForms

  },
  created(){
      this.getCurrentAct()
  },


  methods: {
    ...mapMutations([
      'getSelectedIndex',
      'deleteThisComp',
      'showModule',
      'moveTop',
      'moveDown',
      'moveToFirst',
      'addComp',
      'getPageConfigComps',
      'createNewAct'
    ]),
    ...mapActions([
      'saveActivity',
      'fetchHtml',
      'getCurrentAct'
    ]),

    undoComp() {
				// this.undo();

        let myPageComps = { ... this.myPageComps }
        myPageComps.unshift()

        // this.deleteThisComp()


        console.log('undo')

				// this.$refs.canvas.draw();
			},
		redoComp() {
			// this.redo();
      console.log('redo')
			// this.$refs.canvas.draw();
		},

    save(){
      let name,id;
      let myPageComps = [...this.myPageComps]

      myPageComps.forEach( (val) => {
        delete val.forms
      })


      // if(!!this.currentAct){
      //   file = this.currentAct.file
      // }
      id = this.$route.query.id

      name = this.pageConfig.actCode
      if(!name){

        this.$message({
          message: '页面设置：活动code不能为空',
          type: 'warning',
          center:true,
        })

        this.showModule('pageSet')

        return
      }


      let params = {
        id:id,
        data:{name:name,components: myPageComps,pageConfig:this.pageConfig}
      }

      this.saveActivity(params).then(data => {
        if(data.data.code === 2000){
          this.$message({
            message: '保存成功',
            type: 'success',
            center:true
          })
          this.$router.push('?id='+data.data.time)
        }
      })
    },

    exportHtml(){
       this.fetchHtml().then( data => {
         if ('download' in document.createElement('a')) {
          Utils.fileDownload(data.data, 'index.html');
         } else {
          alert('浏览器不支持');
         }
       })

    },

    createNew(){
      this.$router.push({path:'home'});
      this.createNewAct()


    },

  }

}
</script>

<style scoped>

.top {
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 10px;
  z-index: 2;
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
  height: 100vh;
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
  width: 95%;
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
  min-height: 30px;
  margin: 0 auto 20px;
  background-color: #fff;
}

.width750:hover {
  transform: scale(1.05);
}


.form-wrapper {
  width: 80%;
  margin: 0 auto 20px;
}
</style>
