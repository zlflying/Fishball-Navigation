<script setup lang="ts">
const value = ref('通用学科')

const options = ['通用学科', '计算机科学']
</script>

<template>
  <div class="custom-style">
    <el-segmented size="large" v-model="value" :options="options" class="tw-shadow-2xl"/>
  </div>
</template>

<style scoped lang="scss">
.custom-style .el-segmented {
  --el-segmented-bg-color: #eceff7;
  --el-border-radius-base: 50px;
}
</style>