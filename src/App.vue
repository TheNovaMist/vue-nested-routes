<script setup>
import NavBar from "./components/NavBar.vue";
import MainAside from "./components/MainAside.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="main-layout">
    <el-container>
      <el-header> <NavBar /> </el-header>

      <el-container>
        <el-aside width="200px"><MainAside /></el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.main-layout {
  background-color: burlywood;
  height: 100%;
}
</style>
