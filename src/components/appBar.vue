<template>
  <div class="app-bar xl-shadow">
    <router-link :to="checkTag">
      <img
        style="-webkit-filter: grayscale(100%);
  filter: grayscale(100%);"
        v-if="navbar === 'home'"
        src="../assets/logonew.png"
      >
      <img v-else :src="navbar">
    </router-link>
    <router-link to="/home/home">
      <img :src="oyen" alt="oyen.de">
      <!-- <span style="padding: 4px 20px" v-else class="mx-text red--text">{{tag.name}}</span> -->
    </router-link>
    <router-link to="/text">
      <img src="../assets/more.png">
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["newspaper", "oyen", "more"],
  computed: {
    ...mapState("event", ["tag", "navbar"]),
    checkTag() {
      if (this.tag.name === "Home") {
        return "/advertisment";
      } else {
        return "/tag/" + this.tag.name;
      }
    }
  }
};
</script>

<style>
.app-bar {
  bottom: 0;
  margin: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background: #fff;
  align-items: center;
  height: 60px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.app-bar img {
  height: 44px;
  width: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-repeat: no-repeat;
  background-position: cover;
}

.xl-shadow {
  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15),
    0 4px 6px 0 rgba(112, 157, 199, 0.15);
  /* box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); */
}

.mx-text {
  height: 30px !important;
  width: 100px;
  text-transform: capitalize;
  padding: 3px 8px;
}

@media screen and (min-width: 1000px) {
  .app-bar {
    width: 41%;
    margin: 0 30%;
  }
}
</style>

