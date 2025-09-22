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
  <div class="custom-header-menu tw-mb-2 tw-select-none">
    <el-segmented v-model="value" :options="options"
                  :props="{label: 'label', value: 'key' ,disabled: 'disabled'}">
      <template #default="scope">
        <div class="tw-flex tw-items-center tw-gap-1">
          <div>{{ scope.item.label }}</div>
        </div>
      </template>
    </el-segmented>
  </div>
</template>

<style scoped lang="scss">
.custom-header-menu {
  --el-border-radius-base: 10px;

  :deep(.el-segmented) {
    --el-segmented-padding: 5px;
    min-height: 38px;

    .el-segmented__item {
      font-size: 14px;
      font-weight: 500;
      border-radius: 12px;
    }

    .el-segmented__item-selected {
      border-radius: 12px;
    }

  }
}
</style>