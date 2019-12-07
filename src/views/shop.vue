<template>
  <div>
    <div class="app-box" data-id="100000001">
      <div class="app-card">
        <div class="app-card-top">
          <img src="../assets/images/icon-rsync.png" />
        </div>
        <div class="app-card-con">
          <h3 class="app-name">微信小程序</h3>
          <p class="app-info">
            宝塔小程序提供服务器监控及安全扫码登录面板
            <a
              href="https://www.bt.cn/bbs/thread-12427-1-1.html"
              target="_blank"
              class="btlink"
            >&gt;&gt;教程</a>
          </p>
          <p class="app-dev">Linux面板插件</p>
          <div class="app-use">
            <div class="app-price">
              ￥
              <span>
                4.8
                <p class="indextime">/月</p>
              </span>
            </div>
            <div class="app-install"></div>
          </div>
        </div>
      </div>
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
.app-list{
	width: 100%;
	float:left;
}
.app-box{
	position: relative;
	width: 285px;
	background:#fff;
	box-shadow: #e0e0e0 0 0 20px;
	float: left;
	margin-right: 20px;
	margin-bottom: 20px;
	overflow: hidden;
	cursor: pointer;
}
.app-box:nth-of-type(4n){
	margin-right: 0;
}
.app-box:hover{
	box-shadow: #999 0 0 20px;
}
.app-card-top{
	height: 130px;
    width: 285px;
    background-color: #f3f7ff;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.app-card-con{
	padding:20px;
}
.app-card-con .app-name{
	font-size:17px;
	font-weight: normal;
	margin-bottom: 10px;
}
.app-card-con .app-info{
	color: #999;
	margin-bottom: 10px;
	height: 36px;
	overflow: hidden;
}
.app-card-con .app-dev{
	color: #20a53a;
	margin-bottom: 15px;
}
.app-card-con .app-use{
	height:26px;
	line-height:26px;
}
.app-card-con .app-use > div{
	width: 50%;
	float: left;
}
.app-price{
	color: #FF0000;
}
.app-price span{
	font-size:22px;
}
.app-install{
	text-align:right;
	color: #999;
}
.app-card-con .app-install .bt-mark{
	background-color: #ff9f2f;
	padding:2px 4px;
	color: #fff;
	font-size: 14px;
	border-radius: 3px;
}
.indextime{
	display: inline-block;
	margin-left: 5px;
	color: #999;
	font-size: 13px;
}
</style>
