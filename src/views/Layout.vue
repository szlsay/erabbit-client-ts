<template>
  <AppTopNav>顶部通栏</AppTopNav>
  <AppHeader>头部</AppHeader>
  <main>
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import AppTopNav from "@/components/app-topnav.vue";
import AppHeader from "@/components/app-header.vue";
export default defineComponent({
  name: "xtx-layout",
  components: {
    AppTopNav,
    AppHeader,
  },
  setup(props) {
    const store = useStore();
    const handle = () => {
      console.log("---");
      store.commit("user/setUser", { account: "st" });
    };
    return { handle };
  },
});
</script>

<style scoped>
</style>