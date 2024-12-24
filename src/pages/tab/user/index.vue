<template>
  <view class="xxx-content">
    <view class="content-wrap">
      <view class="img-wrap">
        <up-image :show-loading="true" :src="src" width="100%" height="189rpx"></up-image>
      </view>
      <view class="shape"></view>
      <view class="info-wrap" @click="goPersonalProfile">
        <up-avatar class="avatar" :src="avatarSrc" shape="circle" size="86"></up-avatar>
        <text class="name u-line-1">{{name}}</text>
        <view class="arrow">
          <up-icon name="arrow-right" size="20"></up-icon>
        </view>
      </view>
    </view>

    <view class="grid-wrap">
      <view class="grid-content">
        <up-cell size="large" title="我的订单" value="所有订单" isLink></up-cell>
        <!-- 宫格布局 -->
        <view class="grid-box">
          <up-grid :border="false" col="4">
            <up-grid-item v-for="(listItem,listIndex) in list" :key="listIndex" @click="click">
              <up-image :show-loading="true" :src="listItem.src" width="48rpx" height="48rpx"></up-image>
              <text class="grid-text">{{listItem.title}}</text>
            </up-grid-item>
          </up-grid>
          <up-toast ref="uToastRef" />
        </view>
      </view>
    </view>
    <view class="pay-out-wrap">
      <view class="pay-wrap">
        <up-cell-group>
          <up-cell title="地址管理" @click="goAddressMana">
            <template #icon>
              <up-image style="padding-right: 20rpx;" :show-loading="true" :src="addressIcon" width="100%"
                height="50rpx"></up-image>
            </template>

            <template #right-icon>
              <view class="flex justify-end">
                <up-icon class="flex justify-end" name="arrow-right" size="15"></up-icon>
              </view>
            </template>
          </up-cell>
          <up-cell title="发票管理" @click="goInvoiceMana">
            <template #icon>
              <up-image style="padding-right: 20rpx;" :show-loading="true" :src="invoiceIcon" width="100%"
                height="50rpx"></up-image>
            </template>
            <template #right-icon>
              <view class="flex justify-end">
                <up-icon class="flex justify-end" name="arrow-right" size="15"></up-icon>
              </view>
            </template>
          </up-cell>
          <up-cell title="提货券管理" @click="goTicketMana">
            <template #icon>
              <up-image style="padding-right: 20rpx;" :show-loading="true" :src="ticketIcon" width="100%"
                height="50rpx"></up-image>
            </template>
            <template #right-icon>
              <view>
                <up-icon class="flex justify-end" name="arrow-right" size="15"></up-icon>
              </view>
            </template>
          </up-cell>

          <up-cell title="商品详情" @click="goGoodDetail">
            <template #icon>
              <up-image style="padding-right: 20rpx;" :show-loading="true" :src="ticketIcon" width="100%"
                height="50rpx"></up-image>
            </template>
            <template #right-icon>
              <view>
                <up-icon class="flex justify-end" name="arrow-right" size="15"></up-icon>
              </view>
            </template>
          </up-cell>
        </up-cell-group>
      </view>
    </view>
  </view>
</template>

<script setup lang="js">
  import {
    reactive,
    ref,
  } from 'vue';
  import {
    onLoad,
    onShow
  } from "@dcloudio/uni-app";
  import {
    queryParams
  } from 'uview-plus';
  import {
    useClipboard,
    usePermission
  } from '@/hooks';

  import addressIcon from '@/static/images/tabbar/addressIcon.png';
  import invoiceIcon from '@/static/images/tabbar/invoiceIcon.png';
  import ticketIcon from '@/static/images/tabbar/ticketIcon.png';

  import paymentPendingIcon from '@/static/images/tabbar/payment_pending.png';
  import shipmentPendingIcon from '@/static/images/tabbar/shipment_pending.png';
  import receiptPendingIcon from '@/static/images/tabbar/receipt_pending.png';
  import completedIcon from '@/static/images/tabbar/completed.png';

  const {
    setClipboardData,
    getClipboardData
  } = useClipboard();

  // 复制
  const toCopy = async () => {
    await setClipboardData({
      data: '1234567890'
    });
    const data = await getClipboardData();
    console.log('[ data ] >', data);
  };



  let src = ref('https://cdn.uviewui.com/uview/album/1.jpg');
  let avatarSrc = ref('https://cdn.uviewui.com/uview/album/1.jpg');
  let name = ref("cyclone-js-go");

  // uni-app 的生命周期钩子
  onLoad((opt) => {
    // 页面加载时执行的代码
    console.log('页面加载了', opt);
  });

  onShow(() => {
    // 页面显示时执行的代码
    console.log('页面显示了');
  });

  // 创建响应式数据
  const list = ref([{
      src: paymentPendingIcon,
      title: '待付款',
      orderType: 'paymentPending'
    },
    {
      src: shipmentPendingIcon,
      title: '待发货',
      orderType: 'shipmentPending'
    },
    {
      src: receiptPendingIcon,
      title: '待收货',
      orderType: 'receiptPending'
    },
    {
      src: completedIcon,
      title: '已完成',
      orderType: 'completed'
    }
  ]);

  // 创建对子组件的引用
  const uToastRef = ref(null);

  // 定义方法
  const click = (index) => {
    if (uToastRef.value) {
      let orderType = list.value[index].orderType;
      uToastRef.value.success(`点击了第${orderType}`); // 注意：这里加1是因为通常我们是从第1个开始计数的
      // 跳转至"我的订单页面"，并且传递参数  订单类型
      let params = {
        orderType: orderType
      };
      let queryString = queryParams(params);
      uni.navigateTo({
        url: '/pages/orderMana/order/index' + queryString,
      })
    }
  };

  const goAddressMana = () => {
    uni.navigateTo({
      url: '/pages/addressMana/address/index',
    })
  };

  const goInvoiceMana = () => {
    uni.navigateTo({
      url: '/pages/invoiceMana/invoice/index',
    })
  }

  const goTicketMana = () => {
    uni.navigateTo({
      url: '/pages/ticketMana/ticket/index',
    })
  }

  const goPersonalProfile = () => {
    uni.navigateTo({
      url: '/pages/profileMana/profile/index',
    })
  };


  const goGoodDetail = () => {
    uni.navigateTo({
      url: '/pages/detailMana/detail/index',
    })
  };

  // 登录鉴权，微信小程序端点击tabbar的底层逻辑不触发uni.switchTab，需要在页面onShow生命周期中校验权限
  onShow(async () => {
    const hasPermission = await usePermission();
    console.log(hasPermission ? '已登录' : '未登录，拦截跳转');
  });
</script>

<style lang="scss" scoped>
  .xxx-content {
    // padding: 0 16rpx;
    max-height: calc(100vh - 102px);


    .content-wrap {

      /*图片文件*/
      .img-wrap {
        width: 100%;
        height: 189rpx;

      }

      /*形状*/

      .shape {
        width: 100%;
        height: 31rpx;
        background: $u-dbtj-bg-color;
        border-radius: 34rpx 34rpx 0 0;
        position: relative;
        top: -20rpx;

      }

      .info-wrap {
        display: flex;
        align-items: center;
        padding-left: 20rpx;
        position: relative;
        top: -80rpx;

        .avatar {
          width: 170px;
          height: 170px;
        }

        .name {
          padding-left: 29rpx;
          height: 50rpx;
          font-size: 36rpx;
          color: $u-dbtj-label-main-color;
          line-height: 50rpx;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }

        .arrow {
          padding-left: 29rpx;
          font-size: 15px;
          line-height: 15px;
          font-weight: normal;
          top: 2px;
          left: 20rpx;
          color: #999999;
        }
      }



    }

    .grid-wrap {
      background-color: $u-dbtj-bg-color;
      position: relative;
      top: -47rpx;
      padding: 0 20rpx;

      .grid-content {
        height: 266rpx;
        background: #ffffff;
        padding: 0 20rpx;
        border-radius: 12rpx 12rpx 12rpx 12rpx;

        .grid-box {
          padding: 40rpx 0;
        }
      }

    }

    .pay-out-wrap {
      padding: 0 20rpx;


      .pay-wrap {
        padding: 5rpx;
        min-height: 149rpx;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        background-color: #ffffff;


        .pay-wrap-label {
          padding-top: 14rpx;
          padding-bottom: 14rpx;
          width: 112rpx;
          height: 40rpx;
          font-size: 28rpx;
          color: $u-dbtj-label-main-color;
          line-height: 40rpx;
          text-align: left;
          font-style: normal;
          text-transform: none;
          background-color: #ffffff;
        }

      }
    }

  }



  ::v-deep .u-cell-group .u-cell__body {
    font-weight: 400;
    font-size: 24rpx;
    height: 33rpx;
    color: $u-dbtj-label-main-color;
    line-height: 33rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;
    padding: 35rpx 35rpx !important;
    background-color: #ffffff;

  }

  ::v-deep .u-cell-group .u-cell__left-icon-wrap {
    width: 60rpx;
  }
</style>

<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
