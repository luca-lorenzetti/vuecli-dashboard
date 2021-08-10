<template>
  <div class="nav_aside">
    <div class="container">

      <!-- Title -->
      <div class="title">
        <h2>- Dashbool -</h2>
      </div>
      <!-- /Title -->

      <!-- Profile -->
      <div class="profile_with_image">
        <img class="profile_image" src="../assets/images/profile.png" alt="image-profile">

        <div class="profile_name">
          <p>Welcome</p>
          <p class="fullname">Mario Rossi</p>
        </div>

      </div>
      <!-- /Profile -->

      <!-- General -->
      <div class="general">
        <p>general</p>
      </div>
      <!-- /General -->

      <!-- Home Section -->
      <section id="home">
        <div class="top_home_section">
          <md-icon>thumb_up</md-icon>
        </div>
      </section>
      <!-- /Home Section -->


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
.nav_aside{
  width: 300px;
  height: 100vh;
  background-color: #2a4054;
  color: #fff;

  .container{
    padding: 0 10px;

    .title{
      padding-top: 20px;
      text-align: left;

      h2{
          font-size: 18px;
          font-weight: bold;
        } 
    }

    .profile_with_image{
      display: flex;
      margin-top: 20px;
      align-items: center;

      .profile_image{
        width: 60px;
        border: 3px solid #fff;
        border-radius: 50%;

      }

      .profile_name{
        text-align: left;
        margin-left: 20px;
      }
    }

    .general{
      text-align: left;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 35px;
      padding-bottom: 12px;
      border-bottom: 3px solid #fff;
    }
  }

 .fullname{
   font-weight: bold;
 }
}
</style>
