<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li><a href="#">美食</a></li>
    <li><a href="#">餐厨</a></li>
    <li><a href="#">艺术</a></li>
    <li><a href="#">电器</a></li>
    <li><a href="#">居家</a></li>
    <li><a href="#">洗护</a></li>
    <li><a href="#">孕婴</a></li>
    <li><a href="#">服装</a></li>
    <li><a href="#">杂货</a></li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "app-header-nav",
});
</script>
<script setup lang='ts'>
</script>

<style lang="less" scoped>
.app-header-nav {
  display: flex;
  width: 820px;
  justify-content: space-around;
  padding-left: 40px;
  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    a {
      display: inline-block;
      font-size: 16px;
      line-height: 32px;
      height: 32px;
    }
    &:hover {
      a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
  }
}
</style>