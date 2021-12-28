<template>
  <AppTopNav>顶部通栏</AppTopNav>
  <header>头部</header>
  <main>
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import AppTopNav from "@/components/app-topnav.vue";

export default defineComponent({
  name: "xtx-layout",
  components: {
    AppTopNav,
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