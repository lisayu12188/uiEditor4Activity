<template>
  <div>
  <el-table
      :data="activitiesCopy"
       highlight-current-row
       @current-change="handleCurrentChange"

      style="width: 100%">
      <el-table-column
      type="index"
      fixed
      >
      </el-table-column>

      <el-table-column

        prop="name"
        label="活动名称">
      </el-table-column>
      <el-table-column
        prop="timeParsed"
        label="创建时间">
      </el-table-column>

    </el-table>
    </div>
</template>
<script>
import { mapState,mapMutations,mapActions } from 'vuex'
function add0(num){
  if(num < 10){
    return "0"+num
  }
  return num
}
function parseTime(time) {
   let ms = new Date(time)
  let timeParsed =  ms.getFullYear() +'-' + (ms.getMonth()+ 1) +'-' + ms.getDate() +' ' + add0(ms.getHours()) +':' + add0(ms.getMinutes() ) +':' + add0(ms.getSeconds())
  return timeParsed
}
function clone(obj){
  return JSON.parse(JSON.stringify(obj))
}
export default {
  data() {
    return {

    }
  },
  computed:{
    ...mapState([
      'activities',
    ]),
    activitiesCopy(){
        let copy = clone(this.activities)
        copy.reverse();
        copy.map( (val) => {
          return val.timeParsed = parseTime(val.time)
        })
        return copy
    }
  },
  created(){
    this.fetchActivities()
  },
  methods:{
    ...mapMutations([
      'getPageConfigComps',
      'renderMyPageComps',
      'getCurrentAct'

    ]),
    ...mapActions([
      'fetchActivities'
    ]),
    handleCurrentChange(currentRow){
      
      this.$router.push({ path: '', query: { actCode: currentRow.name }})
      const act = {name:currentRow.name,file:currentRow.time}
      this.getCurrentAct(act)
      this.getPageConfigComps(currentRow)



    }
  }

}
</script>
<style scoped lang="scss">

</style>
