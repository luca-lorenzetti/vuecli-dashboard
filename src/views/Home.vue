<template>
  <div class="home">
    <NavAside/>
    <NavTop/>
    <MainChart/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavAside from "@/components/NavAside.vue";
import NavTop from "@/components/NavTop.vue";
import MainCHart from "@/components/MainChart.vue";


export default {
  props: {
  },
  name: "Home",
  components: {
    NavAside,
    NavTop,
    MainChart
  },
};
</script>
