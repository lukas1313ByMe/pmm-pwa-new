<template>
  <div class="overlay-bar xl-shadow">
    <img
      :src="logo"
      alt="logo"
      class="logo-my"
    >
    <br>
    <span>
      MADE BY
      <a class="linkme target-me shadow-a" :href="link" target="_blank">LUKAS</a>
    </span>
    <span style="line-height: 3.3">
      -Based in
      <span class data-badge="i" target="_blank">{{brand}}</span>-
    </span>
    Interested?
    <a :href="email">check my LinkedIn profile</a>
    <slot name="link-me"></slot>
  </div>
</template>

<script>
export default {
  props: {
    logo: { type: String, default: "https://i.ibb.co/VLzYg30/logonew.png" }
  },
  data() {
    return {
      email: "https://www.linkedin.com/in/lukas-kreutzer/",
      brand: "Germany",
      link: "https://master-doomxii.web.app"
    };
  }
};
</script>

<style scoped>
.overlay-bar {
  bottom: 0;
  margin: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background: #f8fbfd;
  align-items: center;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.xl-shadow {
  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15),
    0 4px 6px 0 rgba(112, 157, 199, 0.15);
}
.linkme {
  color: #fff;
  padding: 6px;
  font-size: 1rem;
  background: #6772e5;
}
.target-me {
  margin-left: 3px;
  font-weight: 600;
}

.logo-my {
  margin-bottom: 13px;
  height: 130px;
}

.shadow-a {
  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15),
    0 4px 6px 0 rgba(112, 157, 199, 0.15);
}

.badge1 {
  position: relative;
}
.badge1[data-badge]:after {
  content: attr(data-badge);
  position: absolute;
  top: -6px;
  right: -23px;
  font-size: 0.7em;
  background: #ccc;
  color: white;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15),
    0 4px 6px 0 rgba(112, 157, 199, 0.15);
}
</style>

