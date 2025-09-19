<script setup lang="ts">
import consola from "consola";
import {captchaImage, login} from "~/composables/api";
import {useUserStore} from "~/stores/user";

const img = ref('');
const datas = ref('');

const storeText = ref('');

const store = useUserStore();

const setText = () => {
  useUserStore().name = storeText.value;
}

const getText = () => {
  storeText.value = useUserStore().name;
}

const test = () => {
  captchaImage().then(res => {
    img.value = 'data:image/png;base64,' + res.img;
  }).catch(err => {
    ElMessage.error(err.message)
  })
}

const test1 = () => {
  login({
    "password": "Gljsc_123456!!!",
    "loginName": "19965098729"
  }).then(res => {
    datas.value = JSON.stringify(res);

    consola.log(JSON.stringify(res));
  }).catch(err => {
    consola.log(err)
    ElMessage.error(err.message)
  })

}

const catConfig = () => {
  consola.info(useAppConfig());
  consola.info(useRuntimeConfig().public);
  navigateTo("/hi/77)")
}


await test()


</script>

<template>
  <div>
    <div class="page-index">

      <el-button type="primary" @click="test">按钮</el-button>
      <el-button type="primary" @click="test1">按钮1</el-button>
      <img :src="img" alt="" srcset="">
      <div></div>
      <el-input
          v-model="datas"

          type="textarea"
          placeholder="Please input"
      />
    </div>

    <el-button type="primary" @click="catConfig">按钮</el-button>

    <AnimView/>


    <ClientOnly>
      <div v-if="!store.name">
        <NuxtIcon name="line-md:loading-loop"/>
      </div>
    <div class="tw-text-cyan-700 tw-text-5xl">{{ store.name }}</div>
    </ClientOnly>

    <el-input
        v-model="storeText"
        type="textarea"
        placeholder="Please input"
    />

    <el-button type="primary" @click="setText">设置storeText</el-button>
    <el-button type="primary" @click="getText">获取storeText</el-button>

  </div>
</template>

<style lang="scss" scoped>

</style>
