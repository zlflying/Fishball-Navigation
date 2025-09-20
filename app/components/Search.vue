<script setup lang="ts">
import type {SearchNode} from "~/constants/searchNodes";
import {searchNodes} from "~/constants/index";
import {Search} from "@element-plus/icons-vue";

/** 选择节点 */
const selectedNode = ref('bing');
/** 选择节点点击事件 */
const itemClick = (item: SearchNode) => {
  selectedNode.value = item.sourceCode;
};
/** 查询内容 */
const query = ref('');
/** 搜索事件 */
const search = () => {
  let item = searchNodes.find(item => item.sourceCode === selectedNode.value);
  let url = item?.baseUrl + encodeURIComponent(query.value);
  // 新页面打开
  window.open(url, '_blank');
};
</script>

<template>
  <div class="search">
    <div
        class="search-input tw-bg-gray-300 dark:tw-bg-500 tw-rounded-full tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-2">
      <el-input class="search-input-text" size="large" v-model="query" placeholder="请输入搜索内容"/>
      <el-button type="primary" :icon="Search" round @click="search">搜索</el-button>
    </div>
    <div class="search-node tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-gap-20">
      <div class="search-item tw-cursor-pointer tw-p-2 tw-text-lg tw-flex tw-gap-1" v-for="item in searchNodes" :key="item.sourceCode"
           @click="itemClick(item)"
           :class="{'item-active': selectedNode === item.sourceCode}">
        <img :src="item.iconPath" alt="" class="tw-w-6"/>
        <span class="tw-text-base tw-font-sans tw-font-normal">{{ item.sourceName }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search {
  position: relative;
  width: fit-content;
  margin: 0 auto;

  .search-input {
    position: relative;
    z-index: 11;

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

  .search-node {
    position: relative;

    .search-item {
      position: relative;
    }

    .item-active {
      position: relative;

      // 在顶部正中间添加倒三角
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
        transition: all 0.3s ease;
      }
    }
  }
}
</style>