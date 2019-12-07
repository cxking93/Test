<template>
  <div class="herox">
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="全部" style="min-width:100px;">
          <el-option label="全部" value="1"></el-option>
          <el-option label="Linux" value="2"></el-option>
          <el-option label="Windows" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="submit">搜索</el-button>
      </el-input>
    </div>
    <div class="hotsou">
      <span @click="sou">Nginx防火墙</span>
      <span @click="sou">网站监控表</span>
      <span @click="sou">任务管理器</span>
    </div>
    <banner/>
    <screen/>
  </div>
</template>
<script>

export default {
  data() {
    return {
      input1: "",
      select: "1"
    };
  },
  components: {
    banner:require('./banner.vue').default,
    screen:require('./screen.vue').default,
  },
  methods: {
    sou(e) {
      this.input1 = e.target.innerText;
      this.submit();
    },
    submit() {
      console.log(this.select, this.input1);
    }
  },
  created() {}
};
</script>
<style lang='less' scoped>
.herox {
  width: 100%;
  background: #eee;
  background-size: 100% 100%;
  background-position: center;
  flex-direction: column;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  span {
    color: #666;
    margin: 20px;
    cursor: pointer;
    display: inline-block;
    font-size: 13px;
  }
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>