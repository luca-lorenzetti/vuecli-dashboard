<template>
  <div class="nav_top">
    <div class="nav_left">
      <i class="material-icons">menu</i>
    </div>
    <div class="nav_right">
      
      <i class="material-icons">mail_outline</i>

      <img class="profile_image" :src="require('@/assets/'+this.$store.getters.getUrlImage)" alt="image-profile">
      <small class="fullname">{{this.$store.getters.getFirstName}} {{this.$store.getters.getLastName}}</small>
      <i class="material-icons">keyboard_arrow_down</i>
      

    </div>
  </div>
</template>

<script>
export default {
  methods: {
  },
  name: "NavAside",

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav_top{
  width: 100%;
  height: 6vh;
  background-color: #ededed;
  color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-size: 20px;

  .nav_right{
    display: flex;
    align-items: center;

    & > *:not(:last-child){
      margin: 0 5px;
    }

    img{
      width: 30px;
      height: 30px;
    }

    small.fullname{
      font-size: 14px;
      margin-right: 0;
      font-weight: bold;

    }
    small+i{
      font-weight: bold;
    }
  }

}
</style>
