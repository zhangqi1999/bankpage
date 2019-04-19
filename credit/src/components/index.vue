<template>
  <div class="hello">
       <div class="banner"></div>
       <div class="recommend">
        <div class="recommend-title">
          <span class="rounded-rectangle"></span>
          <h4 class="special">特别推荐</h4>
        </div>
        <div class="bank-info">
          <div class="col-top">
            <div class="col-left">
              <img src="/static/banner@2x.png" class="bank-img">
              <div>
                <h5 class="bank-title">洋钱罐借款</h5>
                <span class="bank-detail">小额分期贷&nbsp;高通过率！秒放款</span>
              </div>
            </div>
              <p class="bank-count">164238人申请</p>
          </div>
          <div class="col-right">
            <div class="bank-money">
              <p class="bank-price">5000-1万</p>
              <p>额度范围（元）</p>
            </div>
            <div class="bank-time">
              <p class="vertical-line"></p>
              <div>
                <p>放款时长：30分钟</p>
                <p>利率：0.8%/每月</p>
                <p>贷款期限：6-12月</p>
              </div>
            </div>
            <button class="bank-btn">免费申请</button>
          </div>
        </div>
    </div>
        <div class="list-box">
            <div class="recommend-title">
                <span class="rounded-rectangle"></span>
                <h4 class="special">为你精选</h4>
            </div>
            <van-row class="category">
                <van-col span="8">
                    <span class="first-title whole">金额范围</span>
                    <img src="/static/trigon.png" class="trigon-img" id="img1" />
                </van-col>
                <van-col span="8">
                    <span class="first-title purpose">贷款期限</span>
                    <img src="/static/trigon.png" class="trigon-img" id="img2" />
                </van-col>
                <van-col span="8">
                    <span class="first-title grade">排序</span>
                    <img src="/static/trigon.png" class="trigon-img" id="img3" />
                </van-col>
            </van-row>
            <div class="container1">
                <ul class="menu-item">
                    <li  v-for="(item,index) in qxlist" :key="index" class="menu-list">
                        <a href="javascript:;">{{item.title}}</a>
                    </li>
                </ul>      
            </div>
            <div class="container2">
                <ul class="menu-item">
                    <li  v-for="(item,index) in moneylist" :key="index" class="menu-list">
                        <a href="javascript:;">{{item.price}}</a>
                    </li>
                </ul>      
            </div>
            <div class="container3">
                <ul class="menu-item">
                    <li  v-for="(item,index) in desc" :key="index" class="menu-list">
                        <a href="javascript:;">{{item.title}}</a>
                    </li>
                </ul>      
            </div>
          </div>
          <div id="modal-overlay"></div>
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <li v-for="(item,index) in list" :key="index" class="list-circulate">
        <div class="bank-info">
          <div class="col-top row-top">
            <div class="col-left">
              <img src="/static/banner@2x.png" class="bank-img">
              <div>
                <h5 class="bank-title">{{item.title}}</h5>
                <span class="bank-detail">{{item.detail1}}</span>
              </div>
            </div>
              <p class="bank-count">{{item.count}}</p>
          </div>
          <div class="col-right">
            <div class="bank-money">
              <p class="bank-price">{{item.price}}</p>
              <p>{{item.money}}</p>
            </div>
            <div class="bank-time">
              <p class="vertical-line"></p>
              <div>
                <p>{{item.sc}}</p>
                <p>{{item.lilv}}</p>
                <p>{{item.qx}}</p>
              </div>
            </div>
            <button class="bank-btn" @click="btnclick">免费申请</button>
          </div>
        </div>
        </li>
        </van-list>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
    list:[
      {src:require("../../static/banner@2x.png"),title:"洋钱罐借款",detail1:"小额分期贷、高通过率！秒放款",count:"164238人申请",price:"5000-1万",money:"额度范围（元）",sc:"放款时长：30分钟",lilv:"利率：0.8%/每月",qx:"贷款期限：6-12月"},
      {src:require("../../static/banner@2x.png"),title:"洋钱罐借款",detail1:"小额分期贷、高通过率！秒放款",count:"164238人申请",price:"5000-1万",money:"额度范围（元）",sc:"放款时长：30分钟",lilv:"利率：0.8%/每月",qx:"贷款期限：6-12月"},
      {src:require("../../static/banner@2x.png"),title:"洋钱罐借款",detail1:"小额分期贷、高通过率！秒放款",count:"164238人申请",price:"5000-1万",money:"额度范围（元）",sc:"放款时长：30分钟",lilv:"利率：0.8%/每月",qx:"贷款期限：6-12月"},
      {src:require("../../static/banner@2x.png"),title:"洋钱罐借款",detail1:"小额分期贷、高通过率！秒放款",count:"164238人申请",price:"5000-1万",money:"额度范围（元）",sc:"放款时长：30分钟",lilv:"利率：0.8%/每月",qx:"贷款期限：6-12月"},
      {src:require("../../static/banner@2x.png"),title:"洋钱罐借款",detail1:"小额分期贷、高通过率！秒放款",count:"164238人申请",price:"5000-1万",money:"额度范围（元）",sc:"放款时长：30分钟",lilv:"利率：0.8%/每月",qx:"贷款期限：6-12月"},
      {src:require("../../static/banner@2x.png"),title:"洋钱罐借款",detail1:"小额分期贷、高通过率！秒放款",count:"164238人申请",price:"5000-1万",money:"额度范围（元）",sc:"放款时长：30分钟",lilv:"利率：0.8%/每月",qx:"贷款期限：6-12月"},
      {src:require("../../static/banner@2x.png"),title:"洋钱罐借款",detail1:"小额分期贷、高通过率！秒放款",count:"164238人申请",price:"5000-1万",money:"额度范围（元）",sc:"放款时长：30分钟",lilv:"利率：0.8%/每月",qx:"贷款期限：6-12月"}    
    ],
    qxlist:[
      {title:'不限期限'},
      {title:'1月以内'},
      {title:'1月-6月'},
      {title:'6月-12月'},
      {title:'一年以上'}
    ],
    moneylist:[
      {price:"不限金额"},
      {price:"2000以内"},
      {price:"2000-5000"},
      {price:"5000-10000"},
      {price:"10000以上"},
    ],
    desc:[
      {title:"热门排行"},
      {title:"额度高"},
      {title:"利息低"},
      {title:"放款快"},
      {title:"期限长"}
    ],
      finished: false,
      loading: false,
    }
  },
  methods:{
    onLoad() {
        // 异步更新数据
        setTimeout(() => {
            // 加载状态结束
            this.loading = false;
            // 数据全部加载完成
            if (this.list.length >= this.list.length) {
            this.finished = true;
            }
        }, 1500);
      },
      btnclick(){
        alert("hello")
      },
      handleClick(){      
                  $(".whole,#img1,.purpose,#img2,.grade,#img3").click(function(){
                      $(".banner,.recommend,.recommend-title").css("display","none")
                      $(".list-box").css("height","40px")
                      $(".category").css("padding-top","10px")
                      $(".category").css("padding-bottom","15px")
              })
              //金额范围
            $(".whole,#img1").click(function (){
                $(".whole,#img1").addClass('active')
                if($(".purpose,#img2,.grade,#img3").hasClass('active')){
                  $(".purpose,#img2,.grade,#img3").removeClass('active')
                }
                $(".container1").show("100",function(){
                  $("#modal-overlay").css("display","block")
                  $("body").css({
                    "height":"100%",
                    "width":"100%",
                    "position":"fixed",
                    "top":"0",
                    "left":"0"
                  })
                  $("#img1").attr("src",'/static/trigon_active.png')
                  $("#img2").attr("src",'/static/trigon.png')
                  $("#img3").attr("src",'/static/trigon.png')
                  $(".container2").hide()
                  $(".container3").hide()
                })
                $(".menu-item .menu-list:first-child").addClass('on').siblings().removeClass('on')
              })
            $(".container1 .menu-list").click(function(){
                $(this).addClass('on').siblings().removeClass('on')
                let txt=$(this).text();
                $('.whole').text(txt)
                $(".whole,#img1").removeClass('active')
                $('.container1').hide("100",function(){
                  $("#modal-overlay").css("display","none")
                  $(".banner,.recommend").css("display","block")
                  $(".recommend-title").css("display","flex")
                  $(".list-box").css("height","76px")
                  $(".category").css("padding-top","0")
                  $(".category").css("padding-bottom","0")
                  $("body").css({
                    "height":"auto",
                    "width":"100%",
                    "position":"relative",
                    "top":"0",
                    "left":"0"
                  })
                  $("#img1").attr("src",'/static/trigon.png')
                });
            })
             //贷款期限
            $(".purpose,#img2").click(function(){
                $(".purpose,#img2").addClass('active')
                if($(".whole,#img1,.grade,#img3").hasClass('active')){
                  $(".whole,#img1,.grade,#img3").removeClass('active')
                }
                $(".container2").show("100",function(){
                  $("#modal-overlay").css("display","block")
                  $("body").css({
                    "height":"100%",
                    "width":"100%",
                    "position":"fixed",
                    "top":"0",
                    "left":"0"
                  })
                  $("#img2").attr("src",'/static/trigon_active.png')
                  $("#img1").attr("src",'/static/trigon.png')
                  $("#img3").attr("src",'/static/trigon.png')
                  $(".container1").hide()
                  $(".container3").hide()
                })
                $(".menu-item .menu-list:first-child").addClass('on').siblings().removeClass('on')
            })
            $(".container2 .menu-list").click(function(){
                $(this).addClass('on').siblings().removeClass('on')
                let txt=$(this).text();
                $('.purpose').text(txt)
                $(".purpose,.purpose>.trigon-img").removeClass('active')
                $('.container2').hide("100",function(){
                  $("#modal-overlay").css("display","none")
                  $("#modal-overlay").css("display","none")
                  $(".banner,.recommend").css("display","block")
                  $(".recommend-title").css("display","flex")
                  $(".list-box").css("height","76px")
                  $(".category").css("padding-top","0")
                  $(".category").css("padding-bottom","0")
                  $("body").css({
                    "height":"auto",
                    "width":"100%",
                    "position":"relative",
                    "top":"0",
                    "left":"0"
                  })
                  $("#img2").attr("src",'/static/trigon.png')
                });
            })
             //排序
            $(".grade,#img3").click(function(){
                $(".grade,#img3").addClass('active')
                if($(".whole,#img1,.purpose,#img2").hasClass('active')){
                  $(".whole,#img1,.purpose,#img2").removeClass('active')
                }
                $(".container3").show("100",function(){
                  $("#modal-overlay").css("display","block")
                  $("body").css({
                    "height":"100%",
                    "width":"100%",
                    "position":"fixed",
                    "top":"0",
                    "left":"0"
                  })
                  $("#img3").attr("src",'/static/trigon_active.png')
                  $("#img1").attr("src",'/static/trigon.png')
                  $("#img2").attr("src",'/static/trigon.png')
                  $(".container1").hide()
                  $(".container2").hide()
                })
                $(".menu-item .menu-list:first-child").addClass('on').siblings().removeClass('on')
            })
            $(".container3 .menu-list").click(function(){
                $(this).addClass('on').siblings().removeClass('on')
                let txt=$(this).text();
                $('.grade').text(txt)
                $(".grade,#img3").removeClass('active')
                $('.container3').hide("100",function(){
                  $("#modal-overlay").css("display","none")
                  $("#modal-overlay").css("display","none")
                  $(".banner,.recommend").css("display","block")
                  $(".recommend-title").css("display","flex")
                  $(".list-box").css("height","76px")
                  $(".category").css("padding-top","0")
                  $(".category").css("padding-bottom","0")
                  $("body").css({
                    "height":"auto",
                    "width":"100%",
                    "position":"relative",
                    "top":"0",
                    "left":"0"
                  })
                  $("#img3").attr("src",'/static/trigon.png')
                });
            })
      }
  },
  mounted(){
    this.handleClick()
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
    background: url(/static/banner@2x.png) no-repeat center center/100% 100%;
  }
  .recommend{
    position: relative;
    height: 160px;
    border-top: 10px solid #f2f2f2;
    border-bottom:10px solid #f2f2f2;
  }
  .recommend-title{
    padding: 15px 0px 15px 15px;
    display: flex;
    justify-content: left;
  }
  .rounded-rectangle{
    display: inline-block;
    width: 4px;
    height: 16px;
    background: #ff4444;
    border-radius: 3px;
    margin-top: 3px;
  }
  .special{
    font-size: 15px;
    margin-left: 10px;
  }
  .bank-info{
    height: 130px;
  }
  .col-top{
    display: flex;
    justify-content: space-between;
  }
  .row-top{
    padding-top: 20px;
  }
  .col-left{
    display: flex;
    margin-left: 15px;
  }
  .bank-title{
    font-size: 15px;
    margin-bottom: 2px;
  }
  .bank-detail{
    font-size:12px;
    color: #999;
  }
  .col-right{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 15px;
    margin-right: 20px;
  }
  .bank-img{
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-right: 10px;
  }
  .bank-count{
    color: #3161FF;
    font-size: 14px;
    line-height: 50px;
    padding-right: 15px;
  }
  .bank-money{
    color: #444;
    font-size: 12px;
  }
  .bank-price{
    color:#91CC03;
  }
  .bank-time{
    display: flex;
    font-size: 11px;
    color: #666;
  }
  .vertical-line{
    width: .6px;
    height: 42px;
    margin-top: 5px;
    margin-right: 20px;
    background: #dedede;
  }
  .bank-btn{
    width:60px;
    height: 30px;
    line-height: 30px;
    color:#fff;
    border-radius: 4px;
    background: #ff3131;
    margin-top: 10px;
    font-size: 12px;
  }
  .list-box{
    position: relative;
    width: 100%;
    height: 76px;
    border-bottom: .6px solid #dedede;
  }
  .list-circulate{
    position: relative;
    border-bottom: .6px solid #dedede;
  }
  .category{
    box-sizing: border-box;
    text-align: center;
    font-size: 13px;
  }
    .trigon-img{
    width: 14px;
    height: 7px;
  }
    .active{
      color: #3F75FF;
    /* border-color: #3F75FF;     */
  }   
  .container1,.container2,.container3{
    position: absolute;
    width: 100%;
    height: auto;
    z-index: 998;
    /* margin-top: 20px; */
    display: none;
    background: #fff;
  }
  .menu-item{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  .menu-list{
    width: 22%;
    /* padding-bottom: 14px; */
    margin: 1.5%;
    box-sizing: border-box;
  }
  .menu-list a{
    display: inline-block;
    width: 100%;
    background: #f2f2f2;
    color: #999;
    box-sizing: border-box;
    padding: 5px;
    font-size: 12px;
    border-radius: 2px;
  }
  .on a{
    color: #fff;
    background: #3161FF;
  }
  .item4-title{
    font-size: 15px;
    color:#333;
    font-weight: normal;
    margin-bottom: 15px;
    margin-left: 10px;
  }
  .btn-list{
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }
  .item4{
    margin:0 15px 0 15px;
    padding: 15px 0 15px 0;
    border-bottom: .8px solid #ddd;
  }
  .btn-active{
    color: #fff;
    background: #3161FF;
  }
  #modal-overlay {
    display: none;
    position: absolute;   /* 使用绝对定位或固定定位  */
    left: 0;
    top: 45px;
    width:100%;
    height: 100%;
    z-index: 990;
    background-color: #333;
    opacity: 0.5;   /* 背景半透明 */
  }
  @media only screen and (min-device-width: 320px) and (max-device-height: 568px){ 
  .bank-count{font-size: 12px;}
  .bank-detail{font-size: 10px;}
  .menu-list a {font-size: 11px;}
  }
</style>
