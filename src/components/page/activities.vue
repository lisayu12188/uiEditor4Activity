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
        prop="date"
        label="日期">
      </el-table-column>

    </el-table>
    </div>
</template>
<script>





export default {
  data() {
    return {
      activities:[{
          date: '2016-05-02',
          name: '王小虎'
        },
        {
        date: '2016-05-02',
        name: '王小虎'
        }
      ]}
    },
  methods:{
    handleCurrentChange(currentRow){
      console.log(currentRow)
      let name = currentRow.name
    }
  }

}
</script>
<style scoped lang="scss">

</style>
