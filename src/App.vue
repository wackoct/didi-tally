<script setup lang="ts">
import { watch } from "vue";
import { RouterView } from 'vue-router'
import { useStore } from './store'
import { storeToRefs } from 'pinia'

const store = useStore()

const { isFirst } = storeToRefs(store)

watch(isFirst, (state) => {
  localStorage.setItem('isFirst', String(state))
},
{
  immediate: true
})
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
@import "./assets/css/reset.scss";
@import "./assets/css/vars.scss";

#app {
  padding: 0;
  width: 100vw;
  height: 100vh;
}
</style>
