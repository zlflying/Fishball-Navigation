<script setup lang="ts">

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
  <el-radio-group v-model="value" size="large">
    <el-radio-button v-for="option in options" :label="option.label" :value="option.key" :disabled="option.disabled" />
  </el-radio-group>
</template>

<style scoped lang="scss">
</style>