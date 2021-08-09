<template>
  <div class="home">
    <NavAside/>
    <NavTop/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavAside from "@/components/NavAside.vue";
import NavTop from "@/components/NavTop.vue";


export default {
  props: {
  },
  name: "Home",
  components: {
    NavAside,
    NavTop
  },
};
</script>
