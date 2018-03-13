<template>
  <p class="p-text"
  :style="{
    color: myData.color,
    fontSize: myData.fontSize + 'rem',
    lineHeight:myData.lineHeight+'rem',
    paddingTop: myData.padding.top+'rem',
    paddingBottom: myData.padding.bottom+'rem',
    paddingLeft: myData.padding.left+'rem',
    paddingRight: myData.padding.right+'rem',
    marginTop: myData.margin.top+'rem',
    marginBottom: myData.margin.bottom+'rem',
    marginLeft: myData.margin.left+'rem',
    marginRight: myData.margin.right+'rem',


  }">
    {{myData.text}}
  </p>
</template>


<script>
import imgSrc from '../../assets/img/banner.jpg'
import { mapState } from 'vuex'
export default {
  name: 'paragraph1',

  data () {
    return {
      // text:'糖尿病是一种代谢紊乱综合征，除血糖高以外，往往还同时伴有血脂代谢异常等，共同构成了糖尿病慢性并发症的高危因素。',
      // color:'#333',
      // fontSize:0.4800,//18px
      // lineHeight:0.8533,//32px
      // paddingTop:.2667,//20px
      // paddingBottom:0,
      // paddingLeft:.32,//24px
      // paddingRight:.32,
    }
  },
  computed:{
    ...mapState({
      selectedCompIndex:'selectedCompIndex',
      myPageComps:'myPageComps',
    }),
    myData(){
      return this.myPageComps[this.selectedCompIndex]['data'];
    },



  },




  methods:{



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-text{
  width: 10rem;
/* font-size: 0.4800rem;
color: #333333;
line-height: 0.8533rem; */
padding: 0 0.3200rem;
}


</style>
