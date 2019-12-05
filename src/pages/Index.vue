<template>
<div class="index">
      <!--搜索栏 start -->
     <div class="search">
        <van-search placeholder="请输入小区或地址">
        <div slot="label" class="lable-container">
            <span>北京</span>
            <i class="iconfont icon-arrow" />
            <div class="line"></div>
        </div>
        </van-search>
        <i
        class="iconfont icon-map"
        @click="onMap"
        />
     </div>
      <!--搜索栏 end -->
      <!-- 轮播图 start -->
    <!-- <van-swipe :autoplay="3000" indicator-color="white" class="swiperimg">
        <van-swipe-item v-for="(item, index) in SwiperItem" :key="index" style="height:212px">
            <img :src="'http://localhost:8080'+item.imgSrc" alt="">
        </van-swipe-item>
    </van-swipe> -->
     <swiper
     v-if="SwiperItem.length>0"
     :options="swiperOption"
     ref="mySwiper"
     class="swiperimg"
     >
    <!-- slides -->
    <swiper-slide
    v-for="(item, index) in SwiperItem"
    :key="index"
    style="height:212px"
    >
         <img :src="'http://localhost:8080'+item.imgSrc" alt="">
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>

      <!-- 轮播图 end -->
      <!-- 导航栏 start -->
    <van-grid :border="false" class="navitem" square>
        <van-grid-item
        v-for="(item, index) in NavItem"
        :key="index"
        :text="item.text"
        >
        <van-icon :name="item.icon" size="47.99px" />
        <span>{{item.text}}</span>
        </van-grid-item>

    </van-grid>
    <!-- 导航栏 end -->
    <!-- 租房小组 start -->
    <div class="groups">
        <div class="groups-title">
            <span>租房小组</span>
            <span>更多</span>
        </div>
       <van-grid :column-num="2" gutter="10px" class="group-body">
            <van-grid-item
            v-for="(item, index) in HouseGroup"
            :key="index"
            >
                <div slot="default" class="group-body-item">
                    <div class="desc">
                        <span>{{item.title}}</span>
                        <span>{{item.desc}}</span>
                    </div>
                    <img :src="'http://localhost:8080'+item.imgSrc" alt="">
                </div>
            </van-grid-item>
        </van-grid>
    </div>
    <!-- 租房小组 end -->
    <!-- 最新资讯 start -->
    <div class="news">
        <div class="news-title">
            最新资讯
        </div>
        <ul class='news-list'>
            <li
            class="news-item"
            v-for="(item,index) in News"
            :key="index"
            >
            <img :src="'http://localhost:8080'+item.imgSrc" />
            <div class="list-right">
                <h2>{{item.title}}</h2>
                <p>
                    <span>{{item.from}}</span>
                    <span>{{item.date}}</span>
                </p>
            </div>
          </li>
        </ul>
    </div>
    <!-- 最新资讯 end -->
</div>
</template>

<script>
import { Request } from '../utils/Request'
import nav1 from '../assets/images/nav-1.png'
import nav2 from '../assets/images/nav-2.png'
import nav3 from '../assets/images/nav-3.png'
import nav4 from '../assets/images/nav-4.png'
export default {
  data () {
    return {
      swiperOption: {
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      SwiperItem: [],
      HouseGroup: [],
      News: [],
      NavItem: [{ icon: nav1, text: '整租' },
        { icon: nav2, text: '合租' },
        { icon: nav3, text: '地图找房' },
        { icon: nav4, text: '去出租' }]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper ? this.$refs.mySwiper.swiper : ''
    }

  },
  mounted () {
    if (this.SwiperItem.length > 1) {
      this.swiper.slideTo(1, 1000, false)
    }
  },

  created () {
    this.getSwiper()
    this.getNews()
    this.getHouseGroup()
  },
  methods: {
    onMap () {
      this.$router.push('/map')
    },
    // 获取轮播图
    async getSwiper () {
      let res = await Request('/home/swiper')

      console.log('轮播图', res)
      this.SwiperItem = res.data.body
    },
    // 获取租房小组
    async getHouseGroup () {
      let res = await Request('/home/groups?area=AREA%7C88cff55c-aaa4-e2e0')
      console.log('租房小组', res)
      this.HouseGroup = res.data.body
    },
    // 获取最新资讯
    async getNews () {
      let res = await Request('/home/news?area=AREA%7C88cff55c-aaa4-e2e0')
      console.log('最新资讯', res)
      this.News = res.data.body
    }
  }
}
</script>

<style lang="less" scoped>
    .index{
        box-sizing: border-box;
        position: relative;
        .search{
            position:absolute;
            z-index: 2;
            display: flex;
            align-items: center;
            top: 25px;
            width: 100%;
            padding: 0 10px;
            .van-search{
                width: 310px;
                height: 34px;
                padding: 0;
                margin: 0 10px;
               /deep/.van-search__content{
                 /deep/.van-search__label{
                        .lable-container{
                            display:flex;
                        .line{
                            width:2px;
                            height: 20px;
                            margin-top:7px;
                            background-color: #eee;
                            margin-left:12px;
                        }
                     }
                 }
                 /deep/.van-cell{
                     margin-left:12px;
                     /deep/.van-field__body{
                         /deep/input{
                             font-size: 13px;
                         }
                     }
                 }
               }
            }
            .icon-map{
                font-size: 25px;
                color: #fff;
            }
        }
        .swiperimg{
            img{
                width:100%;
                height: 212px;
            }
        }
        .navitem{
            box-sizing: border-box;
            span{
                font-size: 13px;
            }
        }
        .groups{
            box-sizing: border-box;
            background-color: #f6f5f6;
            overflow: hidden;
            padding-bottom: 10px;
            .groups-title{
                padding: 0 10px;
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                margin: 15px 0 15px 10px;
                span:nth-child(1){
                        font-weight: 900
                }
                span:nth-child(2){
                        color: #787d82;
                }
            }
            .group-body{
                /deep/.van-grid-item__content{
                    padding: 12px 13px;
                }
                .group-body-item{
                    width:100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0px 5px;
                    .desc{
                        span{
                            display: block;
                        }
                        span:nth-child(1){
                            font-size: 13px;
                            font-weight: 900;
                            margin-bottom: 5px;
                        }
                        span:nth-child(2){
                            font-size: 12px;
                            color:#999
                        }
                    }
                    img{
                        width:55px;
                        height: 55px;
                    }
                }
            }
        }
        .news{
            padding:0 15px;
            margin-bottom:49px;
            &-title{
                margin:15px 0;
                font-weight:700;
            }
            .news-item{
                display:flex;
                padding:15px 0;
                border-bottom: 1px solid #ccc;
                img{
                width:120px;
                height:90px;
                }
                .list-right{
                margin-left:5px;
                position:relative;
                h2{
                    font-size:15px;
                    margin:0;
                }
                p{
                    position:absolute;
                    bottom:0;
                    display:flex;
                    justify-content:space-between;
                    width:100%;
                    color:#ccc;
                }
            }
        }
    }
}

</style>
