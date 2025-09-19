<script setup lang="ts">
import {ArrowDown} from "@element-plus/icons-vue";

const value = ref('1')

const options = [{
  key: '1',
  label: '通用学科',
  disabled: false
}, {
  key: '2',
  label: '计算机科学',
  disabled: false
}];
</script>

<template>
  <el-segmented v-model="value" :options="options" size="large" >
    <template #default="scope">
      <div class="tw-flex tw-flex-col tw-items-center tw-gap-2 tw-p-2">
        <div>{{ scope.item.label }}</div>
      </div>
    </template>
  </el-segmented>
</template>

<style scoped lang="scss">
</style>