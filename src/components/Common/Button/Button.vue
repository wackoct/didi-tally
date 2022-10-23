<script setup lang="ts">

</script>


<template>
  <button class="btn">
    <slot>默认内容</slot>
  </button>
</template>


<style lang="scss">
.btn {
  width: 100%;
  height: auto;
  border: none;
  border-radius: 8px;
  background: #5C33BE;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
</style>
