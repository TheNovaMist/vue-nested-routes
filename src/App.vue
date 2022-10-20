<script setup>
import NavBar from "./components/NavBar.vue";
import MainAside from "./components/MainAside.vue";
import MainContent from "./components/MainContent.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <el-container class="main-layout">
    <el-header class=".main-header"> <NavBar /> </el-header>

    <el-container>
      <el-aside width="200px"><MainAside /></el-aside>
      <el-main><MainContent /></el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.main-layout {
  background-color: burlywood;
  height: 100%;
}

.main-header {
  display: flex;
}
</style>
