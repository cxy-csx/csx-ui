  <template>
  <el-card class="box-card">
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="插件" width="320" align="center"></el-table-column>
        <el-table-column prop="name" label="描述" width="320" align="center"></el-table-column>
        <el-table-column prop="name" label="版本" width="320" align="center"></el-table-column>
        <el-table-column prop="name" label="下载" width="320" align="center"></el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style scoped>
.box-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>