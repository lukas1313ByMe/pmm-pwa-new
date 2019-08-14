<template>
  <div id="app">
    <l-advertise v-if="isAdvertise"/>
    <app-bar v-if="!loaded" :newspaper="newspaper" :oyen="oyen" :more="more"/>
    <transition v-if="!loaded" name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import appBar from "@/components/appBar.vue";
import lAdvertise from "@/components/advertisment.vue";
export default {
  components: {
    appBar,
    lAdvertise
  },
  data() {
    return {
      logo: "./assets/logonew.png",
      isAdvertise: true,
      newspaper: "./assets/newspaper.svg",
      more: "./assets/more.png",
      transitionName: null
    };
  },
  computed: {
    ...mapState("event", ["tag", "loaded"]),
    oyen() {
      return this.tag.active;
    }
  },
  created() {
    if (this.$store.state.event.loaded === false) {
      setTimeout(() => {
        this.isAdvertise = false;
      }, 1612);
    } else {
      console.log(this.$store.state.event.loaded);
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: #337ab7;
  cursor: pointer;
}

body,
html {
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

br {
  display: none;
}

body {
  background: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
