<template>
  <div class="hello">
    <div class="banner"></div>
    <div class="recommend">
      <div class="recommend-title">
        <span class="rounded-rectangle"></span>
        <h4 class="special">特别推荐</h4>
      </div>
      <van-row class="bank-info" v-for="(item,index) in Tlist" :key="index">
        <van-col span="12" class="col-left">
          <img :src='imgUrl+item.cardFrontPhoto' class="bank-img">
        </van-col>
        <van-col span="12" class="col-right">
          <h5 class="bank-title">{{item.cardName}}</h5>
          <p class="bank-detail">{{item.describe}}</p>
          <p class="bank-star">推荐指数：<van-rate v-model="item.ourRatings" /></p>
          <button class="bank-btn1" @click="jump(item.link)">免费申请</button>
        </van-col>
      </van-row>
    </div>
    <div class="list-box">
            <div class="recommend-title">
                <span class="rounded-rectangle"></span>
                <h4 class="special">为你精选</h4>
            </div>
            <van-row class="category">
                <van-col span="6">
                    <span class="first-title whole">全部银行</span>
                    <img src="/test/creditCard/static/trigon.png" class="trigon-img" id="img1" />
                </van-col>
                <van-col span="6">
                    <span class="first-title purpose">用途</span>
                    <img src="/test/creditCard/static/trigon.png" class="trigon-img" id="img2" />
                </van-col>
                <van-col span="6">
                    <span class="first-title grade">等级</span>
                    <img src="/test/creditCard/static/trigon.png" class="trigon-img" id="img3" />
                </van-col>
                <van-col span="6">
                    <span class="first-title added">更多</span>
                    <img src="/test/creditCard/static/trigon.png" class="trigon-img" id="img4" />
                </van-col>
            </van-row>
            <div class="container1">
                <ul class="menu-item">
                    <li  v-for="(item,index) in bankList" :key="index" class="menu-list">
                        <a href="javascript:;">{{item.name}}</a>
                    </li>
                </ul>      
            </div>
            <div class="container2">
                <ul class="menu-item">
                    <li  v-for="(item,index) in ytList" :key="index" class="menu-list">
                        <a href="javascript:;">{{item.name}}</a>
                    </li>
                </ul>      
            </div>
            <div class="container3">
                <ul class="menu-item">
                    <li  v-for="(item,index) in gradList" :key="index" class="menu-list">
                        <a href="javascript:;">{{item.name}}</a>
                    </li>
                </ul>      
            </div>
            <div class="container4">
                <div class="item4">
                    <h5 class="item4-title">特权（多选）</h5>
                    <ul class="menu-item">
                        <li  v-for="(item,index) in tqList" :key="index" class="menu-list checkbox">
                            <a href="javascript:;">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="item4">
                    <h5 class="item4-title">年费</h5>
                    <ul class="menu-item">
                        <li  v-for="(item,index) in nfList" :key="index" class="menu-list radio">
                            <a href="javascript:;">{{item.name}}</a>
                        </li>
                    </ul>           
                </div> 
                <div class="item4">
                    <h5 class="item4-title">卡组织（多选）</h5>
                    <ul class="menu-item">
                        <li  v-for="(item,index) in kzzList" :key="index" class="menu-list checkbox">
                            <a href="javascript:;">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="item4">
                    <h5 class="item4-title">币种</h5>
                    <ul class="menu-item">
                        <li  v-for="(item,index) in bzList" :key="index" class="menu-list radio">
                            <a href="javascript:;">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <ul class="btn-list">
                    <li class="resetting" @click="resetting">重置</li>
                    <li class="sure btn-active" @click="confirm">确定</li>  
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
            <van-row class="bank-info">
                <van-col span="12">
                    <img :src='imgUrl+item.cardFrontPhoto' class="bank-img" />
                    <!-- <p class="reward">申请成功奖励20红豆</p> -->
                </van-col>
                <van-col span="12" class="col-right">
                <h5 class="bank-title">{{item.cardName}}</h5>
                <p class="bank-detail">{{item.describe}}</p>
                <p class="bank-count"></p>
                <button class="bank-btn" @click="jump(item.link)">免费申请</button>
                </van-col>
            </van-row>
        </li>
        </van-list>
  </div>
</template>

<script>
import $ from 'jquery'
import { Toast } from 'vant'
import {getData} from '../request/api.js'
export default {
  name: 'index',
  data () {
    return {
            imgUrl:"http://file.woownbit.com/",
            title:"YOUNG卡（青年版）",
            detail1:"每月首笔取现免手续费",
            detail2:"生日月尊享双倍积分",
            list: [],
            Tlist:[],
            finished: false,
            loading: false,
            bankList:[
                { name:"全部银行"},
                { name:"浦发银行"},
                { name:"广发银行"},
                { name:"花旗银行"},
                { name:"光大银行"},
                { name:"瑞士银行"},
                { name:"中国银行"},
                { name:"工商银行"},
                { name:"交通银行"},
                { name:"招商银行"},
                { name:"平安银行"},
                { name:"华夏银行"},
                { name:"兴业银行"},
                { name:"上海银行"},
                { name:"中信银行"},
                { name:"农业银行"},
                { name:"建设银行"},
                { name:"九江银行"}
            ],
            gradList:[
                {name:"全部等级"},
                {name:"普卡"},
                {name:"金卡"},
                {name:"白金卡"}

            ] ,
            ytList:[
              {name:"全部用途"},
              {name:"大额取现"},
              {name:"超市购物"},
              {name:"商旅人士"},
              {name:"主题卡"},
              {name:"航空联名"},
              {name:"境外刷卡"},
              {name:"女性专属"},
              {name:"联名卡"},
              {name:"网购剁手"},
              {name:"标准卡"},
              {name:"车主必备"},
              {name:"有颜任性"},
              {name:"出行优惠"},
              {name:"旅游达人"},
              {name:"吃货必备"},
              {name:"积分超值换"},
              {name:"追星一族"},
              {name:"网游一族"},
              {name:"吸猫撸狗"},
              {name:"追剧观影"},
              {name:"秒批"},
              {name:"易下"},
              {name:"高额"}
            ],
            tqList:[
              {name:"新户有礼"},
              {name:"购物返现"},
              {name:"赠送保险"}
            ],
            nfList:[
              {name:"永久免年费"},
              {name:"交易累计免年费"},
              {name:"不免年费"}
            ],
            kzzList:[
              {name:"银联"},
              {name:"VISA"},
              {name:"运通"},
              {name:"JCB"},
              {name:"万事达"},
            ],
            bzList:[
              {name:"人民币"},
              {name:"美元"},
              {name:"双币种"}
            ]               
    }
  },
  methods: {
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
        //获取银行卡列表信息
        getInfo(){
          function getQueryString(name){
            var url = window.location.search;
            var reg = new RegExp('(^|&)'+ name +'=([^&]*)(&|$)','i');
            var r = url.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]); return null;
          }
            let token=getQueryString('token')
            let userGuid=getQueryString('userGuid')
          //银行卡类型
          getData('sys/getList','',{
            "token": token,
            "userGuid": userGuid,
            "parentid":"creditCardsType"
          }).then(res=>{
            this.bankList=res.data.data.list
          }).catch(err=>{
            console.log(err)
          })
          //用途
          getData('sys/getList','',{
            "token": token,
            "userGuid": userGuid,
            "parentid":"xykyt"
          }).then(res=>{
            // console.log(res)
            this.ytList=res.data.data.list
          }).catch(err=>{
            console.log(err)
          })
          //等级
          getData('sys/getList','',{
            "token": token,
            "userGuid": userGuid,
            "parentid":"grade"
          }).then(res=>{
            this.gradList=res.data.data.list
          }).catch(err=>{
            console.log(err)
          })
          //特权
          getData('sys/getList','',{
            "token": token,
            "userGuid": userGuid,
            "parentid":"privilege"
          }).then(res=>{
            this.tqList=res.data.data.list
          }).catch(err=>{
            console.log(err)
          })
          //年费
          getData('sys/getList','',{
            "token": token,
            "userGuid": userGuid,
            "parentid":"annualFee"
          }).then(res=>{
            this.nfList=res.data.data.list
          }).catch(err=>{
            console.log(err)
          })
          //卡组织
          getData('sys/getList','',{
            "token": token,
            "userGuid": userGuid,
            "parentid":"cardAssoc"
          }).then(res=>{
            this.kzzList=res.data.data.list
          }).catch(err=>{
            console.log(err)
          })
          //币种
          getData('sys/getList','',{
            "token": token,
            "userGuid": userGuid,
            "parentid":"currency"
          }).then(res=>{
            this.bzList=res.data.data.list
          }).catch(err=>{
            console.log(err)
          })
           //获取所有信息列表(特别推荐)
          getData('credit/getList','',{
            "token": token,
            "userGuid": userGuid,
            "currentPage":1,
            "pageSize":10,
            "city":"城市"
          }).then(res=>{
            // console.log(res)
            this.Tlist=res.data.data.list;
            if(res.data.data.list==""||res.data.data.list.length==0){
              $(".recommend").css("display","none")
            }else{
              $(".recommend").css("display","block")
            }
          }).catch(err=>{
            console.log(err)
          })
          //获取所有信息列表
          getData('credit/getList','',{
            "token": token,
            "userGuid": userGuid,
            "currentPage":1,
            "pageSize":10
          }).then(res=>{
            // console.log(res)
            this.list=res.data.data.list;
          }).catch(err=>{
            console.log(err)
          })
        },
        handleClick(){      
          $(".whole,#img1,.purpose,#img2,.grade,#img3,.added,#img4").click(function(){
              $("#modal-overlay").css("display","block")
              $("body").css({
                    "height":"100%",
                    "width":"100%",
                    "position":"fixed",
                    "top":"0",
                    "left":"0"
                  })
          })
            //全部银行
            $(".whole,#img1").click(function (){
                $(".whole,#img1").addClass('active')
                if($(".purpose,#img2,.grade,#img3,.added,#img4").hasClass('active')){
                  $(".purpose,#img2,.grade,#img3,.added,#img4").removeClass('active')
                }
                $(".container1").show("100",function(){
                  $("#img1").attr("src",'/test/creditCard/static/trigon_active.png')
                  $("#img2").attr("src",'/test/creditCard/static/trigon.png')
                  $("#img3").attr("src",'/test/creditCard/static/trigon.png')
                  $("#img4").attr("src",'/test/creditCard/static/trigon.png')
                  $(".container2").hide()
                  $(".container3").hide()
                  $(".container4").hide()
                })
                $(".menu-item .menu-list:first-child").addClass('on').siblings().removeClass('on')
              })
            $(".container1 .menu-list").click(function(){
                $(this).addClass('on').siblings().removeClass('on')
                let txt=$(this).text();
                $('.whole').text(txt)
                $(".whole,.whole>.trigon-img").removeClass('active')
                $('.container1').hide("100",function(){
                $("#modal-overlay").css("display","none")
                  $("body").css({
                    "height":"auto",
                    "width":"100%",
                    "position":"relative",
                    "top":"0",
                    "left":"0"
                  })
                  $("#img1").attr("src",'/test/creditCard/static/trigon.png')
                });
            })
            
            //用途
            $(".purpose,#img2").click(function(){
                $(".purpose,#img2").addClass('active')
                if($(".whole,#img1,.grade,#img3,.added,#img4").hasClass('active')){
                  $(".whole,#img1,.grade,#img3,.added,#img4").removeClass('active')
                }
                $(".container2").show("100",function(){
                  $("#img2").attr("src",'/test/creditCard/static/trigon_active.png')
                  $("#img1").attr("src",'/test/creditCard/static/trigon.png')
                  $("#img3").attr("src",'/test/creditCard/static/trigon.png')
                  $("#img4").attr("src",'/test/creditCard/static/trigon.png')
                  $(".container1").hide()
                  $(".container3").hide()
                  $(".container4").hide()
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
                  $("body").css({
                      "height":"auto",
                      "width":"100%",
                      "position":"relative",
                      "top":"0",
                      "left":"0"
                  })
                  $("#img2").attr("src",'/test/creditCard/static/trigon.png')
                });
            })
             //等级
            $(".grade,#img3").click(function(){
                $(".grade,#img3").addClass('active')
                if($(".whole,#img1,.purpose,#img2,.added,#img4").hasClass('active')){
                  $(".whole,#img1,.purpose,#img2,.added,#img4").removeClass('active')
                }
                $(".container3").show("100",function(){
                  
                  $("#img3").attr("src",'/test/creditCard/static/trigon_active.png')
                  $("#img1").attr("src",'/test/creditCard/static/trigon.png')
                  $("#img2").attr("src",'/test/creditCard/static/trigon.png')
                  $("#img4").attr("src",'/test/creditCard/static/trigon.png')
                  $(".container1").hide()
                  $(".container2").hide()
                  $(".container4").hide()
                })
                $(".menu-item .menu-list:first-child").addClass('on').siblings().removeClass('on')
            })
            $(".container3 .menu-list").click(function(){
                $(this).addClass('on').siblings().removeClass('on')
                let txt=$(this).text();
                $('.grade').text(txt)
                $(".grade,.grade>.trigon-img").removeClass('active')
                $('.container3').hide("100",function(){
                  $("#modal-overlay").css("display","none")
                  $(".recommend-title").css("display","flex")
                  $(".banner").css("display","block")
                  $(".list-circulate:eq(0)").css("margin-top","18px")
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
                  $("#img3").attr("src",'/test/creditCard/static/trigon.png')
                });
            })
             //更多
              $(".added,#img4").click(function(){
                $(".added,#img4").addClass('active')
                if($(".whole,#img1,.purpose,#img2,.grade,#img3").hasClass('active')){
                  $(".whole,#img1,.purpose,#img2,.grade,#img3").removeClass('active')
                }
                $(".container4").show("100",function(){
                  $("#modal-overlay").css("display","block")
                  $("body").css({
                    "height":"100%",
                    "width":"100%",
                    "position":"fixed",
                    "top":"0",
                    "left":"0"
                  })
                  $("#img4").attr("src",'/test/creditCard/static/trigon_active.png')
                  $("#img1").attr("src",'/test/creditCard/static/trigon.png')
                  $("#img2").attr("src",'/test/creditCard/static/trigon.png')
                  $("#img3").attr("src",'/test/creditCard/static/trigon.png')
                  $(".container1").hide()
                  $(".container2").hide()
                  $(".container3").hide()
                })
                $(".menu-item .menu-list:first-child").addClass('on').siblings().removeClass('on')
            })
            $(".checkbox").click(function(){
              if($(this).hasClass('on')){
                $(this).removeClass('on')
              }else{
                $(this).addClass('on');
              }
            })
            $(".radio").click(function(){
                $(this).addClass('on').siblings().removeClass('on')
            })
            $(".resetting,.sure").click(function(){
              $(this).addClass("btn-active").siblings().removeClass("btn-active")
            })
        },
        jump(e){
            window.location.href=e;
        },
        resetting(){
                $(".menu-item .menu-list:first-child").addClass('on').siblings().removeClass('on')
        },
        confirm(){
          $(".added,.added>.trigon-img").removeClass('active')
          $(".container4").hide("100",function(){
              $("#img4").attr("src",'/test/creditCard/static/trigon.png')
              $("#modal-overlay").css("display","none")
              
              $("body").css({
                    "height":"auto",
                    "width":"100%",
                    "position":"relative",
                    "top":"0",
                    "left":"0"
                  })
          })
        }
    },
    mounted(){
      this.getInfo()
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
    background: url(/test/creditCard/static/banner@2x.png) no-repeat center center/100% 100%;
  }
  .recommend{
    position: relative;
    height: auto;
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
    height: 105px;
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
  .van-rate{
    display: inline;
  }
  .van-icon, .van-icon::before{
    font-size:15px;
  }
  .van-rate__item {
    padding: 0;
  }
  .bank-star,.bank-btn{
    font-size: 12px;
  }
  .bank-btn1{
    width:80%;
    height: 24px;
    background: #ff3131;
    font-size: 12px;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    line-height: 24px;
  }
  .list-box{
        position: relative;
        width: 100%;
        height: 76px;
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
    .list-circulate{
        position: relative;
        height: auto;
        margin-top: 18px;
        border-bottom: .6px solid #dedede;
        margin-left: 15px;
        margin-right: 15px;
        z-index: 2;
    }
    .bank-info{
        display: flex;
    }
    .col-right{
        margin-left: 15px;
    }
    .reward{
        text-align: center;
        font-size: 10px;
        color:#ff3131;
    }
    .bank-title{
        font-size: 14px;
        margin-bottom: 5px;
    }
    .bank-detail{
        color: #999;
        /* margin-bottom: 5px; */
    }
    .bank-count{
        color: #3161FF;
    }
    .bank-count,.bank-detail{
        font-size:11px;
    }
    .bank-btn{
        position: absolute;
        right: 15px;
        bottom: 25px;
        width: 80px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        background: #ff3131;
        color: #fff;
        border-radius: 4px;
        text-align: center;
    }
    .active{
      color: #3F75FF;
	    /* border-color: #3F75FF;     */
    }   
    .container1,.container2,.container3,.container4{
        position: fixed;
        top:0;
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
        width: 30%;
        /* padding-bottom: 14px; */
        margin: 1.6%;
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
    .resetting,.sure{
        width: 45%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #3161FF;
        border:1px solid rgba(63,117,255,1);
        border-radius:2px;
    }
    .btn-active{
        color: #fff;
        background: #3161FF;
    }
    #modal-overlay {
        display: none;
        position: absolute;   /* 使用绝对定位或固定定位  */
        left: 0;
        top: 0;
        width:100%;
        height: 100%;
        z-index: 990;
        background-color: #333;
        opacity: 0.5;   /* 背景半透明 */
    }
        /* 禁止网页滚动 */
        .ovfHiden{overflow-y: hidden;height: 100%;}
    @media only screen and (min-device-width: 320px) and (max-device-height: 568px){ 
        .bank-title{font-size: 13px;}
        .bank-btn1{width: 100%;}
        .bank-btn{right: 0px;}
        .first-title{margin-left: 10px;}
        .checkbox,.radio{ margin: 4px;}
        .menu-list a{font-size:11px;}
    }
</style>
