<script setup lang="ts">
import {searchNodes} from "~/constants/index";
import {Search} from "@element-plus/icons-vue";

/** 选择节点 */
const selectedNode = ref('bing');
/** 选择节点点击事件 */
const itemClick = (key: string, keyPath: string[]) => {
  selectedNode.value = key;
};
/** 查询内容 */
const query = ref('');
/** 搜索事件 */
const search = () => {
  if (query.value.trim() === ''){
    ElMessage.warning('请输入搜索内容');
    return;
  }

  let item = searchNodes.find(item => item.sourceCode === selectedNode.value);
  let url = item?.baseUrl + encodeURIComponent(query.value);
  // 新页面打开
  window.open(url, '_blank');
};
</script>

<template>
  <div class="search">
    <div
        class="search-input tw-bg-white dark:tw-bg-500 tw-rounded-full tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-2">
      <el-input class="search-input-text" size="large" v-model="query" placeholder="请输入搜索内容"/>
      <el-button type="primary" :icon="Search" round @click="search">搜索</el-button>
    </div>
    <el-menu
        :default-active="selectedNode"
        class="search-menu"
        mode="horizontal"
        @select="itemClick"
    >
      <el-menu-item v-for="item in searchNodes" :key="item.sourceCode" :index="item.sourceCode">
        <template #title>
          <img :src="item.iconPath" alt="" class="tw-w-6 tw-mr-1"/>
          <span class="tw-text-base tw-font-sans tw-font-normal">{{ item.sourceName }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.search {
  position: relative;
  width: 800px;
  margin: 0 auto;

  .search-input {
    position: relative;
    z-index: 2;

    :deep(.search-input-text) {
      .el-input__wrapper {
        box-shadow: none !important;
        border: none !important;
        outline: none !important;
        background: transparent;
      }

      .el-input__inner {
        border: none !important;
        outline: none !important;
        background: transparent;
      }
    }
  }

  :deep(.search-menu) {
    position: relative;
    background: transparent;
    justify-content: space-evenly;
    border-bottom: none;

    .el-menu-item {
      border: none;

      &:hover {
        background: transparent;
      }
    }

    .is-active {
      background: transparent;
      transition: none;

      &::before {
        content: '';
        position: absolute;
        top: -12px; // 三角形高度的一半
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 25px solid #ffffff;
        z-index: 1;
        transition: all 0.9s ease;
      }

    }

  }
}
</style>