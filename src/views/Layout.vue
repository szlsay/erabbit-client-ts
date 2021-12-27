<template>
  <div>App: {{ $store.state.user.profile.account }}</div>
  <button @click="$store.commit('user/setUser', { account: 'st' })">
    button
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
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