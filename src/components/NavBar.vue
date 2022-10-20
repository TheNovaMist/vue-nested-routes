<template>
  <div class="nav-box">
    <div>HelloWorld</div>

    <RouterLink to="/">
      <el-button type="primary">Home</el-button>
    </RouterLink>

    <RouterLink to="/about">
      <el-button type="primary">About</el-button>
    </RouterLink>
  </div>
</template>

<style scoped>
.nav-box {
  background-color: violet;
  height: 100%;
}
</style>
