<template>
  <div>
    this is page 2
    <button v-on:click="goBack">go back</button>
  </div>
</template>

<script>
import { router } from "./main";
export default {
  name: "PageTwo",
  methods: {
    goBack: function() {
      router.push("/");
    }
  }
};
</script>

<style scoped>
</style>