<template>
  <div class="filter-wrap">
    <div class="filter-list">
      <ul class="level-item">
        <span class="label">平台</span>
        <li>
          <a class="chosen" name="all">全部</a>
        </li>
        <li>
          <a data-os="2">Linux面板</a>
        </li>
        <li>
          <a data-os="1">Windows面板</a>
        </li>
      </ul>
      <ul class="level-item">
        <span class="label">功能</span>
        <li>
          <a class="chosen" name="all">全部</a>
        </li>
        <li>
          <a>环境</a>
        </li>
        <li>
          <a>安全</a>
        </li>
        <li>
          <a>网站</a>
        </li>
        <li>
          <a>网站</a>
        </li>
      </ul>
      <ul class="level-item">
        <span class="label">排序</span>
        <li>
          <a>应用名称</a>
        </li>
        <li>
          <a>发布时间</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {}
};
</script>
<style lang="less" scoped>
.search-filter {
  width: 100%;
  float: left;
}
.filter-wrap {
  width: 1200px;
  margin: 10px auto;
}
.filter-list {
  background: #fff;
  box-shadow: #efebeb 0 0 20px;
}
.level-item {
  position: relative;
  overflow: hidden;
  padding: 0 60px 0 124px;
  font-size: 0;
  border-top: #eee 1px solid;
  a {
    cursor: pointer;
  }
  &:first-child {
    border-top: 0 none;
  }
  .label {
    position: absolute;
    height: 40px;
    line-height: 40px;
    padding: 14px 0;
    font-size: 16px;
    top: 0;
    left: 30px;
    color: #b0b0b0;
  }
  li {
    display: inline-block;
    *zoom: 1;
    *display: inline;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
    color: #424242;
    font-size: 16px;
    padding: 14px 0;
    height: 40px;
    line-height: 40px;
    margin-right: 70px;
  }
}
</style>
