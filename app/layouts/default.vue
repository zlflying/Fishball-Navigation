<template>
  <main class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main class="main tw-bg-[#f5f7fc] dark:tw-bg-[#1f2d3d]">
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
    <el-backtop :right="100" :bottom="100" />
  </main>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.common-layout {
  min-height: 100vh;
  // 隐藏滚动条
  overflow: hidden;
}
</style>