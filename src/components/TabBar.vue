<template>
  <div class="tabber">
    <van-tabbar v-model="active">
        <van-tabbar-item
          icon="wap-home-o"
          to="/"
          >
          首页
        </van-tabbar-item>
        <van-tabbar-item
          icon="browsing-history-o"
          to="/houselist"
          >
          找房
        </van-tabbar-item>
        <van-tabbar-item
          icon="orders-o"
          to='new'
          >
          资讯
        </van-tabbar-item>
        <van-tabbar-item
          icon="user-o"
          to='profile'
          >
          我的
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'index-tabber',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
