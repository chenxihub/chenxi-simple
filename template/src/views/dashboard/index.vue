<template>
  <div class="dashboard">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Empty from "@/components/Empty/Empty";

  export default {
    name: "dashboard", // 主页
    props: {},
    components: {
      Empty,
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
    },
    mounted() {
    },
  };
</script>
<style lang="scss">
  @import "dashboard";
  #nav {
    padding: 30px;
    text-align: center;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active{
        color: #42b983;
      }
    }
  }
</style>
