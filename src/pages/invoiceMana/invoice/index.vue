<template>
  <view class="profile-wrap fv-page flex flex-col px-4" style="">
    <!--    <up-navbar class="" style="" :autoBack="true" bgColor="#06D0BCFF" :fixed="true" :placeholder="true" title="个人信息"
      titleColor="#FFFFFFFF" leftIconColor="#FFFFFFFF">
    </up-navbar> -->
    <view class="profile flex box-border mb-3">
      <up-cell-group class="mb-3">
        <up-cell class="" style="" title="可开票订单" value="" :border="true" :isLink="true">
        </up-cell>
        <up-cell class="" style="" title="发票记录" value="" :border="true" :isLink="true">
        </up-cell>
        <up-cell class="" style="" title="发票抬头" value="" :border="false" :isLink="true">
        </up-cell>
      </up-cell-group>
    </view>

    <view class="explain" @click="showExplainClick">
      <up-icon name="error-circle" size="15"></up-icon>
      <view class="explain-text">
        发票说明
      </view>
    </view>


    <up-popup :safeAreaInsetBottom="true" :safeAreaInsetTop="true" :closeOnClickOverlay="true" :show="showExplain"
      :round="10" mode="bottom" @close="close" @open="open">
      <view class="explain-content">
        <rich-text :nodes="content"></rich-text>
      </view>
    </up-popup>

    <!--    <view class="save-button-wrap">
      <up-button @click="" style="color: #F7F7F7" class="save-button" color="#2583B7" shape="circle" text="保存" />
      <up-button @click="" style="color: #2583B7" class="exit-button mt-20rpx" shape="circle" text="退出登录" />
    </view> -->
  </view>
</template>
<script setup>
  import {
    ref,
    reactive,
    watch,
    computed,
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted,
    onBeforeUpdate,
    onUpdated,
    nextTick,
    defineProps,
    toRaw
  } from 'vue'
  import {
    onLoad,
    onShow
  } from '@dcloudio/uni-app'
  let src = ref('https://uview-plus.jiangruyi.com/uview-plus/album/1.jpg');
  // 页面加载
  onLoad((options) => {
    loadData()
  })

  onShow(() => {})

  // 数据列表
  const listLoading = ref(false)
  const dataList = ref([])
  const dataPage = ref({
    page: 0,
    limit: 10,
    total: 0
  })

  // 加载数据
  const loadData = (refresh = false) => {
    listLoading.value = true
    // 请求接口
    listLoading.value = false
  }


  let showExplain = ref(false);
  const showExplainClick = () => {
    showExplain.value = true;
  }

  const close = () => {
    showExplain.value = false;
  }

  let content = ref();
  let richText = `  <p>1、您可在(个人中心)-(发票管理)中提交开票需求。 </p>
   <p>2、 我们开具经主管税务机关批准的增值税电子普通发票。 根据税务法律法规规定, 如需要纸质发票的, 客户可以自行打印增值税电子普通发票的 PDF 版式文件。 增值税电子普通发票打印后,
  其法律效力、 基本用途、 基本使用规定等与税务机关监制的增值税普通发票相同。</p>
  <p>3、 各种形式的优惠券、 折扣等营销活动冲抵的金额不支持开票。</p>
 <p> 4、 如购买方为企业的, 除发票抬头填写全称外, 还需提供准确的纳税人识别号或统一社会信用代码, 以免影响无法正常报销。</p>
  <p>5、 如您错填发票抬头信息需要进行修改, 请前往开票历史页面申请重开。 您已经申请重开的发票无法再次申请, 如需重开其他发票请联系客服中心处理。</p>
  <p>6、 您应遵照国家税收相关法律法规的要求, 正确填写发票抬头和备注栏信息, 如填写信息不合规, 则地步天机将保留对发票进行冲红的权利, 同时可能应政府有关部门要求提供您的违规情况。</p>
  <p>7、 重开发票、 订单取消或退款等情况下, 原已开具发票将冲红失效。</p>
  <p>8、 电商潮品订单开票需求, 请在对应订单操作。</p>
  <p>9、 如无法自助操作或存在其他问题， 请联系客户中心处理。</p> `;
  const open = () => {
    // 给元素赋值，富文本解析器
    content.value = richText;
  }
</script>


<style lang="scss" scoped>
  .profile-wrap {
    margin-top: 20rpx;
    padding: 0 20rpx;



    .profile {
      background-color: #FFF;
      box-shadow: 0rpx 3rpx 6rpx 1rpx rgba(0, 0, 0, 0.16);
      border-radius: 12rpx 12rpx 12rpx 12rpx;
    }


    .save-button-wrap {
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 20rpx;
      right: 20rpx;
      bottom: 40rpx;

      .save-button {
        height: 62rpx;
        background: $u-primary;
        border-radius: 31rpx;
      }

      .exit-button {
        height: 62rpx;
        border-radius: 31rpx 31rpx 31rpx 31rpx;
        border: 1rpx solid $u-primary;
      }
    }

    // 发票说明
    .explain {
      display: flex;
      align-items: center;
      padding-left: 30rpx;
      height: 82rpx;
      background: #FFFFFF;
      box-shadow: 0rpx 3rpx 6rpx 1rpx rgba(0, 0, 0, 0.16);
      border-radius: 12rpx 12rpx 12rpx 12rpx;

      .explain-text {
        height: 33rpx;
        font-size: 24rpx;
        color: $u-dbtj-label-main-color;
        line-height: 24rpx;
        padding-top: 8rpx;
        margin-left: -76rpx;
      }
    }
  }


  .explain-content {
    min-height: 400rpx;
    background-color: #fff;
    padding: 20rpx;
  }
</style>
<style lang="scss">
  page {


    background-color: #efeff4;
  }
</style>
