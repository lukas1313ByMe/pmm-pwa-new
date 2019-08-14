<template>
  <div>
    <l-advertise>
      <template v-slot:link-me>
        <router-link class="back-link" to="/">weiter zur publishing-metro-map.com/pwa</router-link>
      </template>
    </l-advertise>
  </div>
</template>

<script>
import lAdvertise from "@/components/advertisment.vue";
export default {
  components: {
    lAdvertise
  }
};
</script>

<style>
.back-link {
  color: #337ab7;
  bottom: 10%;
  position: absolute;
  width: 80%;
}
</style>
