<template>
  <p class="p-text"
  :style="{
    color: color,
    fontSize: fontSize + 'rem',
    lineHeight:lineHeight+'rem',
    paddingTop: paddingTop+'rem',
    paddingBottom: paddingTop+'rem',
    paddingLeft: paddingLeft+'rem',
    paddingRight: paddingRight+'rem',


  }">
    {{text}}
  </p>
</template>


<script>
import imgSrc from '../../assets/img/banner.jpg'
export default {
  name: 'paragraph1',

  data () {
    return {
      // text:'糖尿病是一种代谢紊乱综合征，除血糖高以外，往往还同时伴有血脂代谢异常等，共同构成了糖尿病慢性并发症的高危因素。',
      color:'#333',
      fontSize:0.4800,//18px
      lineHeight:0.8533,//32px
      paddingTop:.2667,//20px
      paddingBottom:0,
      paddingLeft:.32,//24px
      paddingRight:.32,
    }
  },
  computed:{
    text(){
        let len = this.$store.state.paragraph.value.length
        return this.$store.state.paragraph.value[len-1]

    }

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
