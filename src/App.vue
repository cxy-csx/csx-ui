<template>
  <div id="app">
    <el-container>
      <!-- 顶部区域 -->
      <el-header>
        维C数据聚合平台
        </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
                <el-submenu index="1">
                  <template slot="title">
                    <span>浏览器插件</span>
                  </template>
                  <el-menu-item index="/pluginList">热门插件</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!-- 主体内容区域 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>


/* element-ui样式 */

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* 自定义样式 */
.el-header {
  display: flex;
  justify-content: flex-start;
  background-color: #4e9efd;
  color: #fff;
  font-size: 18px;
}

.el-container,
.el-container > .el-aside {
  height: 100%;
}

.el-col {
  width: 100%;
}
</style>
