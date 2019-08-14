<template>
  <div>
    <div style="text-align: left !important;" class="production">
      <h2 v-if="tag.name === 'Home'" text-align: left !important;>
        {{speech}}
        <small>
          {{name}}
          <a :href="oyen" target="_blank">{{oyen}}</a>
          {{date}}
        </small>
      </h2>
      <div style="text-align: left !important;" v-else>
        <div class="img-card">
          <img :src="sData.img_icon" alt>
        </div>
        <span style="margin-top: 20px" v-html="sData.description"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      name: "Jörg Oyen,",
      oyen: "oyen.de",
      speech: "«Produktkommunikation spielt mit Erwartungen»",
      date: "02.2019",
      isActive: false
    };
  },
  methods: {
    openCard() {
      this.isActive = !this.isActive;
    }
  },
  computed: {
    ...mapState("event", ["tag", "sData"])
  }
};
</script>

<style scoped>
.production h2 {
  font-size: 1.3rem;
}
.production small {
  font-size: 0.68rem;
}
.img-card img {
  text-align: left !important;
  margin: 4px 0 10px 0;
  width: 60px;
  height: 60px;
  object-fit: cover;
  transition: 600ms;
}
.img-left {
  float: left !important;
  margin-right: 8px;
  width: 50px;
  height: 50px;
}

@media screen and (min-width: 1000px) {
  .production {
    text-align: left !important;
    width: 40%;
    margin: 1% 30%;
  }
}
</style>


