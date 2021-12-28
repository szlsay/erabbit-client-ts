<template>
  <div class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="profile.token">
          <li>
            <RouterLink to="/member"
              ><i class="iconfont icon-user"></i
              >{{ profile.account }}</RouterLink
            >
          </li>
          <li><a @click="logout()" href="javascript:;">退出登录</a></li>
        </template>
        <template v-else>
          <li><RouterLink to="/login">请先登录</RouterLink></li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li>
          <a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "app-topnav",
});
</script>

<script setup lang="ts">
import { computed, defineComponent, ref } from "vue";
import { userStore } from "@/store/index";
const store = userStore();
const profile = computed(() => {
  return store.state.user.profile;
});
const logout = () => {
  store.commit("user/setUser", {});
};
</script>

<style scoped lang="less">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        display: inline-block;
        padding: 0 15px;
        line-height: 1;
        color: #cdcdcd;
        &:hover {
          color: @xtxColor;
        }
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>