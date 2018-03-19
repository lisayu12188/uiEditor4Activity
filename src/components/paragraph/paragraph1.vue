<template>
  <p class="p-text"
  :style="{
    color: myData.font.color,
    fontSize: myData.font.fontSize + 'rem',
    lineHeight:myData.font.lineHeight+'rem',
    
    fontWeight:myData.font.weight,
    textDecoration:myData.font.textDecoration,
    fontStyle:myData.font.fontStyle,

    paddingTop: myData.padding.top+'rem',
    paddingBottom: myData.padding.bottom+'rem',
    paddingLeft: myData.padding.left+'rem',
    paddingRight: myData.padding.right+'rem',
    marginTop: myData.margin.top+'rem',
    marginBottom: myData.margin.bottom+'rem',
    marginLeft: myData.margin.left+'rem',
    marginRight: myData.margin.right+'rem',

    textAlign:myData.textAlign,
    backgroundColor: myData.backgroundColor,
    border:myData.border.width+'px '+myData.border.style +' '+myData.border.color


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
