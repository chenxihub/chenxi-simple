<template>
  <div class="empty">
    <div class="empty-container">
      <img src="../../assets/tips/empty.png" alt="">
    </div>
    <div class="empty-tips-text">
      <h1>{{title}}</h1>
      <p class="empty-tips">{{content}}</p>
      <el-button type="primary" size="small" @click="handleClickLink">
        <span v-if="showSlot" ref="slot"><slot></slot></span>
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Empty",
    props: {
      title: {
        default: "Oops!",
      },
      content: {
        default: "Dear,No Data",
      },
    },
    data() {
      return {
        showSlot: true,
      };
    },
    methods: {
      handleClickLink(event) {
        this.$emit("click", event);
      },
    },
    mounted() {
      this.showSlot = this.$slots.default !== undefined;
    },
  };
</script>
<style lang="scss" >
  @import "Empty";
</style>
