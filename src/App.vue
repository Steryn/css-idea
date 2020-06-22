<template>
  <div id="app">
    <el-container>
      <el-aside>
        <ul class="listBox">
          <li v-for="(item) in list" :key="item.link" @click="goRouter(item.link)">{{item.name}}</li>
        </ul>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { lists } from "./list";
export default {
  name: "App",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.list = lists;
  },
  methods: {
    goRouter(e) {
      console.log(this.$route.name);
      if (e == this.$route.name) return;
      this.$router.push("/" + e);
    }
  }
};
</script>

<style>
html,
body,
ul {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app .el-aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;
  overflow-y: auto;
}
#app .el-main {
  padding: 0 0 0 200px;
  width: calc(100vw - 200px);
}
.listBox {
}
li {
  list-style: none;
  line-height: 1.6;
  font-size: 20px;
}
</style>
