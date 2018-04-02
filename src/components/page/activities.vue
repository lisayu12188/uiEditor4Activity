<template>
  <div>
  <el-table
      :data="activities"
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
        prop="time"
        label="日期">
      </el-table-column>

    </el-table>
    </div>
</template>
<script>
import { mapState,mapMutations,mapActions } from 'vuex'


export default {
  data() {
    return {

    }
  },
  computed:{
    ...mapState([
      'activities'
    ])
  },
  created(){
    this.fetchActivities()
  },
  methods:{
    ...mapMutations([
      'getMyPageComps'
    ]),
    ...mapActions([
      'fetchActivities'
    ]),
    handleCurrentChange(currentRow){
      let comps = currentRow.components
      this.getMyPageComps(comps)

    }
  }

}
</script>
<style scoped lang="scss">

</style>
