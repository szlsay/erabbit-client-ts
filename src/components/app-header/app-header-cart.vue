<template>
  <div class="app-header-cart">
    <a class="curr" href="#">
      <i class="iconfont icon-cart"></i><em>{{ num }}</em>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const num = ref(23);
</script>

<style lang="less" scoped>
.app-header-cart {
  width: 50px;
  .curr {
    height: 32px;
    line-height: 32px;
    text-align: center;
    display: block;
    position: relative;
    .icon-cart {
      font-size: 22px;
    }
    em {
      font-style: normal;
      position: absolute;
      right: 0;
      top: 0;
      padding: 1px 6px;
      line-height: 1;
      background: @helpColor;
      color: white;
      font-size: 12px;
      border-radius: 10px;
      font-family: Arial;
    }
  }
}
</style>