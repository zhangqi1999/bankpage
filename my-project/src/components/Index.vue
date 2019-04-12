<template>
  <div class="hello">
    <div class="banner"></div>
    <div class="recommend">
      <div class="recommend-title">
        <span class="rounded-rectangle"></span>
        <h4 class="special">特别推荐</h4>
      </div>
      <van-row class="bank-info">
        <van-col span="12" class="col-left">
          <img src="../assets/banner@2x.png" class="bank-img">
        </van-col>
        <van-col span="12" class="col-right">
          <h5 class="bank-title">{{title}}</h5>
          <p class="bank-detail">{{detail1}}</p>
          <p class="bank-detail">{{detail2}}</p>
          <p class="bank-star">推荐指数：<i class="star-img"></i><i class="star-img"></i><i class="star-img"></i><i class="star-img"></i><i class="star-img"></i></p>
          <button class="bank-btn">免费申请</button>
        </van-col>
      </van-row>
    </div>
    <list-component></list-component>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title:"YOUNG卡（青年版）",
      detail1:"每月首笔取现免手续费",
      detail2:"生日月尊享双倍积分"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 100%;
    height: auto;
    background: #fff;
    color: #444;
  }
  .banner{
    height: 145px;
    background: url(../assets/banner@2x.png) no-repeat center center/100% 100%;
  }
  .recommend{
    position: relative;
    height: 176px;
    border-top: 10px solid #f2f2f2;
    border-bottom:10px solid #f2f2f2;
  }
  .bank-info{
    height: 126px;
    display: flex;
  }
  .col-left{
    margin-left: 15px;
  }
  .col-right{
    margin-left: 15px;
    margin-right: 20px;
  }
  .bank-img{
    width: 100%;
    height: 100px;
    border-radius: 5px;
  }
  .bank-title{
    font-size: 15px;
    margin-bottom: 2px;
  }
  .bank-detail{
    font-size:12px;
    color: #999;
  }
  .bank-star{
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 4px;
  }
  .star-img{
    display: inline-block;
    width: 12px;
    margin-right: 3px;
    background: url(../assets/star.png) no-repeat center center/100% 100%;
  }
  .star-img ,.bank-star,.bank-btn{
    font-size: 12px;
  }
  .bank-btn{
    width:80%;
    height: 24px;
    background: #ff3131;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    line-height: 24px;
  }
</style>
