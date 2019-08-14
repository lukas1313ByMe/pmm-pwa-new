<template>
  <div>
    <h-content v-if="isActive" :item="newData"></h-content>
    <div v-else class="production">
      <div>
        <div v-html="currentData.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import hContent from "@/components/contentHome";

export default {
  components: {
    hContent
  },
  data() {
    return {
      station: "https://publishing-metro-map.com/con.php#joy_158880",
      vdp: "https://publishing-metro-map.com/vdp#joy_157569",
      codeware: "https://publishing-metro-map.com/dbp#joy_157650",
      dbp: "https://publishing-metro-map.com/dbp#joy_158920",
      epa: "https://publishing-metro-map.com/epa#joy_158046",
      edu: "https://publishing-metro-map.com/edu#joy_158999",
      con: "https://publishing-metro-map.com/con#joy_158999",
      oyen: "https://www.oyen.de/img/logo_saso.png",
      data: null,
      newData: []
    };
  },
  computed: {
    ...mapState("event", ["tag", "sData", "currentData"]),
    isActive() {
      if (this.tag.active !== this.oyen) {
        return true;
      }
    }
  },
  mounted() {
    this.run();
  },
  methods: {
    run() {
      axios
        .get("https://share.ninoxdb.de/ncdpa8vxntv0k3duplfomgtxd6lv194iizww")
        .then(doc => {
          this.data = doc.data;
        })
        .then(() => {
          this.newData = this.data.slice(16);
        })
        .then(() => {
          if (this.tag.name === "Home") {
            // get home data at index 16
            this.$store.commit("event/SET_CURRENTDATA", this.data[16]);
          } else {
            const dataLeft = this.data.slice(0, 16);
            this.$store.commit("event/SET_DATA", dataLeft);
          }
        });
    }
  }
};
</script>


<style scoped>
.production {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-bottom: 100px;
}
.production h4 {
  font-weight: 400;
  font-size: 1.04rem;
}
.production h3 {
  font-weight: 600;
  font-size: 1.2rem;
}

.listing {
  display: flex;
  flex-direction: row;
}

.listing > ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
  padding: 10px;
  margin: 0;
  width: 100%;
  color: #202124 !important;
}
.listing > ul > li {
  display: flex;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  color: #202124 !important;
}
.listing .text {
  width: 60%;
  font-weight: 400;
}
.b-text {
  padding-top: 20px;
}

body {
  background: #081b33;
}

@media screen and (min-width: 1000px) {
  .production {
    width: 40%;
    margin: 1% 30%;
    overflow-x: hidden;
  }
}
</style>

