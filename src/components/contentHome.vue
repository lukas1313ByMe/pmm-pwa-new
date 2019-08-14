<template>
  <div>
    <!-- {{allTags}} -->
    <div v-if="isLoading && hData.length === 0">
      <div class="loader-wrapper">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div v-else v-for="(i) in hData" :key="i.ele.id" class="card wrapper card-shadow">
      <div class="inner--wrapper">
        <h3 class="headline">{{i.ele.name}}</h3>
        <!-- <span class="tag">{{ i.pwa_tag }}</span> -->
      </div>
      <span v-html="i.ele.description"></span>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      allTags: [],
      givenData: [],
      newestTag: "",
      isLoading: true
    };
  },
  computed: {
    ...mapState("event", ["tag", "hData", "data"])
  },
  created() {
    //  this.scroll();
    this.getData();
    if (this.hData.length === 0) {
      console.log(this.hData.length);
      setTimeout(() => {
        this.splitTags();
      }, 1200);
    } else {
      console.log("full");
    }
  },
  // watch: {
  //   newestTag() {
  //     this.splitTags()
  //   }
  // },
  methods: {
    splitTags() {
      var tagList = [];
      var tagCounter = 1;

      this.newestTag = this.tag.name;
      // get all tags from all elements
      // rewrite current array to new array with new tagList
      this.item.forEach(ele => {
        const newTags = ele.pwa_tag.split(" ");
        // delete last item of array
        newTags.pop();
        const data = {
          ele,
          pwa_tags: newTags
        };
        tagList.push(data);
      });
      tagList.forEach(tag => {
        if (tag.pwa_tags.includes(this.tag.name)) {
          tagCounter++;
          // this.givenData.push(tag);
          this.$store.commit("event/SET_HDATA", tag);
        }
      });
      this.isLoading = false;
    },
    getData() {
      this.data.forEach(doc => {
        if (doc.pwa_tag === this.tag.name + " ") {
          this.$store.commit("event/SET_NAVBAR", doc.img_icon);
          this.$store.commit("event/SET_SDATA", doc);
        }
      });
    },
    scroll(person) {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.splitTags();
        }
      };
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.card {
  background: #fff;
  color: #081b33;
  margin: 12px 0;
  padding: 8px;
  text-align: left;
  border-radius: 4px;
}
.card .headline {
  font-size: 1.2em;
  line-height: 1.3;
  margin: 0;
  padding: 0;
  padding-bottom: 4px;
}
.shadow-xl {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.inner--wrapper {
  display: flex;
  flex-direction: wrap;
  justify-content: space-between;
}

.chip {
  display: flex;
  flex-direction: wrap;
  flex-wrap: wrap;
}
.item-chip {
  background: #081b33;
  color: #fff;
  padding: 4px;
  margin: 3px 4px;
}

/* spinning loader */
.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #000;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.card-shadow {
  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15),
    0 4px 6px 0 rgba(112, 157, 199, 0.15);
}

@media screen and (min-width: 1000px) {
  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    margin: 1% 30%;
  }
  .card {
    width: 40%;
  }
}
</style>
