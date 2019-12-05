<template>
<div class="map">
    <van-nav-bar
        title="地图找房"
        left-arrow
        @click-left="onClickLeft"
    />
    <div id="container"></div>
</div>
</template>

<script>
let BMap = window.BMap
export default {

  mounted () {
    this.initMap()
  },
  methods: {
    // 初始化地图
    async initMap () {
      this.map = new BMap.Map('container') // map挂载全局
      //   var point = new BMap.Point(116.404, 39.915)
      //   this.map.centerAndZoom(point, 15)
      //   let city = await getCurrentCity()
      // 创建地址解析器实例
      var myGeo = new BMap.Geocoder()
      //   // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint('北京', (point) => {
        if (point) {
          // console.log(point)
          this.map.centerAndZoom(point, 11)
          // map.addOverlay(new BMap.Marker(point));  当前位置小箭头
          this.map.addControl(new BMap.NavigationControl()) // 缩放
          this.map.addControl(new BMap.ScaleControl()) // 比例尺
        //   this.getCityData(city.value, 'circle')
        }
      },
      '北京')// 好惨呀
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" >
.map{
    width: 100%;
    height: 100%;
    padding-top: 46px;
    .van-nav-bar {
        position:fixed;
        top:0;
        width: 100%;
    }
     #container{
        width: 100%;
        height: 100%;
    }
}

</style>
