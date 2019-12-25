<template>
  <div id="app">
    <headers></headers>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>
<style>
#app{
  min-width: 1200px;
}
</style>

