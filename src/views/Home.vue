<template>
  <div class="home">
    <van-collapse v-model="activeNames">
      <van-collapse-item
        title="标题1"
        name="1"
      >内容</van-collapse-item>
      <van-collapse-item
        title="标题2"
        name="2"
      >内容</van-collapse-item>
      <van-collapse-item
        title="标题3"
        name="3"
      >内容</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  // eslint-disable-next-line
  data () {
    return {
      activeNames: ['1', '2', '3'],
    };
  },
};
</script>
