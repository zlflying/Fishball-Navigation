<script setup lang="ts">
import type {NuxtError} from '#app'
import {useLoading} from "~/composables/common/loading";

defineProps({
  error: Object as () => NuxtError
})
const handleError = () => {
  let loading = useLoading();
  clearError({redirect: '/'}).then(() => {
    loading.close();
  });
}
</script>

<template>
  <div class="tw-font-sans tw-font-medium tw-tracking-normal">
    <ClientOnly>
      <div class="content">
        <h1>{{ error?.statusCode }}</h1>
        <p>{{ error?.message }}</p>
      </div>
      <div class="back">
        <el-button type="primary" size="large" @click="handleError">返回首页</el-button>
      </div>
    </ClientOnly>
  </div>
</template>
<style lang="scss" scoped>
.content {
  width: 80%;
  margin: 80px auto;
  padding: 50px;
  background: #f5f5f5;
  border-radius: 10px;

  h1 {
    font-size: 30px;
  }

  p {
    font-size: 16px;
  }
}

.back {
  text-align: center;
}
</style>
