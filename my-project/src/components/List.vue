<template>
    <div class="list">
        <div class="list-box">
            <div class="recommend-title">
                <span class="rounded-rectangle"></span>
                <h4 class="special">为你精选</h4>
            </div>
            <van-row class="category">
                <van-col span="6">
                    <span class="first-title active">全部银行</span>
                    <i class="trigon-img active"></i>
                </van-col>
                <van-col span="6">
                    <span class="first-title">用途</span>
                    <i class="trigon-img"></i>
                </van-col>
                <van-col span="6">
                    <span class="first-title">等级</span>
                    <i class="trigon-img"></i>
                </van-col>
                <van-col span="6">
                    <span class="first-title">更多</span>
                    <i class="trigon-img"></i>
                </van-col>
            </van-row>
            <van-row class="container">
                        <van-col :span="24" class="content">
                           <van-row>
                               <van-col :span="6" class="grad">全部银行</van-col>
                               <van-col :span="6" class="grad">招商银行</van-col>
                               <van-col :span="6" class="grad">广发银行</van-col>
                               <van-col :span="6" class="grad">光大银行</van-col>
                           </van-row>
                           <van-row>
                               <van-col :span="6" class="grad">华夏银行</van-col>
                               <van-col :span="6" class="grad">建设银行</van-col>
                               <van-col :span="6" class="grad">农业银行</van-col>
                               <van-col :span="6" class="grad">浦发银行</van-col>
                           </van-row>
                           <van-row>
                               <van-col :span="6" class="grad">兴业银行</van-col>
                               <van-col :span="6" class="grad">中信银行</van-col>
                               <van-col :span="6" class="grad">工商银行</van-col>
                               <van-col :span="6" class="grad">交通银行</van-col>
                           </van-row>
                           <van-row>
                               <van-col :span="6" class="grad">平安银行</van-col>
                               <van-col :span="6" class="grad">广州银行</van-col>
                               <van-col :span="6" class="grad">上海银行</van-col>
                               <van-col :span="6" class="grad">花旗银行</van-col>
                           </van-row>
                           <van-row>
                               <van-col :span="6" class="grad">九江银行</van-col>
                               <van-col :span="6" class="grad"></van-col>
                               <van-col :span="6" class="grad"></van-col>
                               <van-col :span="6" class="grad"></van-col>
                           </van-row>
                        </van-col>
                    </van-row>
        </div>
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <li v-for="(item,index) in list" :key="index" class="list-circulate">
            <van-row class="bank-info">
                <van-col span="11">
                    <img :src='item.src' class="bank-img" />
                    <p class="reward">申请成功奖励20红豆</p>
                </van-col>
                <van-col span="13" class="col-right">
                <h5 class="bank-title">{{item.title}}</h5>
                <p class="bank-detail">{{item.detail1}}</p>
                <p class="bank-detail">{{item.detail2}}</p>
                <p class="bank-count">{{item.count}}</p>
                <button class="bank-btn" @click="handleClick">免费申请</button>
                </van-col>
            </van-row>
        </li>
        </van-list>
    </div>
</template>
<script>
export default {
    name:'list',
    data(){
        return{
            list: [
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"}, 
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},                
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"},
                {src:require("../assets/banner@2x.png"),title:"YOUNG卡（青年版）",detail1:"每月首笔取现免手续费",detail2:"生日月尊享双倍积分",count:"33万人申请"}, 
            ],
            finished: false,
            loading: false
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
        handleClick(){
            alert("1")
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
    .list{
        color:#444;
    }
    .list-box{
        width: 100%;
        height: 76px;
        border-bottom: .6px solid #dedede;
    }
    .category{
        text-align: center;
        font-size: 13px;
    }
    .trigon-img{
        display: inline-block;
        width: 0;
		height: 0;
		border-width: 6px;
    	border-style: solid;
		border-color: #b8b0b0  transparent transparent;
        box-sizing: border-box;
        margin-bottom: -2px;
        vertical-align: bottom;
    }
    .list-circulate{
        position: relative;
        height: 125px;
        margin-top: 18px;
        border-bottom: .6px solid #dedede;
        margin-left: 15px;
        margin-right: 15px;
    }
    .bank-info{
        display: flex;
    }
    .col-right{
        margin-left: 15px;
    }
    .bank-img{
        width: 100%;
        height: 100px;
        border-radius: 5px;
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
        margin-bottom: 5px;
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
    @media only screen and (min-device-width: 320px) and (max-device-height: 568px){ 
        .bank-btn{right: 0px;}
        .first-title{margin-left: 10px;}
    }
    .active{
        color: #3F75FF;
	    border-color: #3F75FF  transparent transparent;    
    }
    .on{
        background: #3161FF;
    }
    .container{
        width: 100%;
        height: 181px;
        z-index: 9999;
        /* display: none; */
    }
    .content{
        font-size: 12px;
        text-align: center;
    }
    .grad{
        background: #f2f2f2;
        border-radius: 4px;
    }
</style>
