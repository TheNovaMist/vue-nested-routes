<template>
  <div class="main-aside">
    <span>Main</span>

    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.main-aside {
  background-color: tomato;
  height: 100%;
}

.router-view {
  background-color: aquamarine;
}
</style>
