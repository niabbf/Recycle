<template>
  <div class="full-screen">
    <myheader left-icon=":iconfont icon-menu" title="Recycle" leave></myheader>

    <div v-if="shift === 'see'">
      <myorder></myorder>
    </div>
    <div v-else-if="shift === 'start'">
      <mystart></mystart>
    </div>

    <div class="nav">
      <mu-bottom-nav :value.sync="shift" color="primary">
        <mu-bottom-nav-item value="see" title="查看" icon=":iconfont icon-order"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="start" title="发起" icon=":iconfont icon-add"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      shift: 'see'
    }
  }
};
</script>

<style>
.full-screen {
  height: 100%;
  width: 100%;
  position: 100%;
  top: 0;
  bottom: 0;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
}
.nav {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.margin-top-20 {
  margin-top: 20px;
}
</style>
