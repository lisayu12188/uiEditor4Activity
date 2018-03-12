<template>
  <h2 alt=""
  :style="{
    color:color,
    fontSize:fontSize+'rem',
    textAlign:textAlign,
    lineHeight:lineHeight+'rem',
    paddingTop: paddingTop+'rem',
    paddingBottom: paddingTop+'rem',
    paddingLeft: paddingLeft+'rem',
    paddingRight: paddingRight+'rem',

  }">
  {{text}}
</h2>


</template>


<script>
export default {
  name: 'title1',

  data () {
    return {
      text:'我是h2标题',
      color:'#333',
      fontSize: 0.5600,//42px
      textAlign:'center',
      lineHeight:.8,
      paddingTop:.2667,//20px
      paddingBottom:0,
      paddingLeft:.32,//24px
      paddingRight:.32,


    }
  },

  methods:{



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title{
    font-size: 0.5600rem;
    color: #859db9;
    line-height: 12.8px;
    line-height: 0.8000rem;
    text-align: center;
}

</style>
