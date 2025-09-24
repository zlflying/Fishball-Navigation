<template>
  <main class="common-layout">
    <el-container>
      <el-header>
        <Header :menu-visible="false"></Header>
      </el-header>
      <el-container class="common-main tw-bg-[#dde4fd] dark:tw-bg-[#1f2d3d]">
        <el-main class="main tw-max-w-7xl tw-mx-auto tw-my-0 tw-shadow-2xl tw-bg-white dark:tw-bg-[#1f2d3d]">
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </main>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.common-layout {
  min-height: 100vh;
  max-height: 100vh;
  // 隐藏滚动条
  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  .common-main, .main {
    min-height: calc(100vh - 60px);
    max-height: calc(100vh - 60px);
  }
}
</style>