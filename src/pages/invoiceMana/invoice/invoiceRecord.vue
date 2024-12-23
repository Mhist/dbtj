<template>
  <view class="xxx-content">
    <view class="good-wrap">
      <view v-for="(item,index) in invoiceRecordList" :key="item.id" class="single-record">
        <view class="single-detail">
          <view class="time-wrap">

            <view class="time">
              <up-icon style="width: 40rpx;" name="clock-fill" size="14"> </up-icon>{{item.date}}
            </view>
            <view class="icon" @click="goInvoiceRecordDetail(item.id)">
              <up-icon style="justify-content: flex-end;" name="arrow-right" size="14"></up-icon>
            </view>

          </view>
          <view class="detail-wrap">
            <view class="detail-content">
              {{item.type}} <text class="label">电子发票</text>
            </view>
            <view class="detail-amount">
              {{item.amount}} <text class="unit">元</text>
            </view>
          </view>
          <view class="operation-wrap">
            <view :class="{ 'applied-status': item.status === '已申请', 'issued-status': item.status === '已开票' }"
              class="status">
              {{item.status}}
            </view>
            <view class="button-wrap">
              <up-button @click="reissueInvoice" style="margin-right: 20rpx;" size="mini" color="#081E7E" :plain="true"
                text="重发发票"></up-button>
              <up-button @click="reapplyInvoice" size="mini" color="#081E7E" :plain="true" text="申请重开发票"></up-button>
            </view>

          </view>
        </view>

      </view>


    </view>
  </view>


</template>

<script setup lang="js">
  import {
    reactive,
    ref,
    computed
  } from 'vue';
  import {
    onLoad,
    onShow
  } from "@dcloudio/uni-app";
  import {
    queryParams
  } from 'uview-plus';
  import {
    log
  } from 'console';




  const reissueInvoice = () => {
    // 处理重发发票逻辑
    console.log("处理重发发票逻辑");
  };

  const reapplyInvoice = () => {
    // 处理申请重开发票逻辑
    console.log("处理申请重开发票逻辑");
  };



  const goInvoiceRecordDetail = (item) => {
    let params = {
      recordId: item.id
    };
    let queryString = queryParams(params);
    uni.navigateTo({
      url: '/pages/invoiceMana/invoice/invoiceRecordDetail' + queryString
    })
  };



  // uni-app 的生命周期钩子
  onLoad((opt) => {
    // 页面加载时执行的代码
    console.log('页面加载了', opt);
  });

  onShow(() => {
    // 页面显示时执行的代码
    console.log('页面显示了');
  });

  const invoiceRecordList = ref([]);
  const priceTotal = ref(600);
  const isAllChecked = ref(false);
  const actionStyle = {
    display: 'flex',
    flex: '40%',
    paddingLeft: ' 26rpx',
  };
  const loadData = () => {
    invoiceRecordList.value = [{
        id: 1,
        date: '2024.08.28 周三 13:50',
        type: '商品明细',
        amount: '300.00',
        status: '已申请'
      },
      {
        id: 2,
        date: '2024.08.28 周三 13:50',
        type: '商品明细',
        amount: '300.00',
        status: '已开票'
      }
    ];
  };
  loadData();
</script>

<style lang="scss" scoped>
  .good-price-label {
    font-size: 16rpx;
    line-height: 16rpx;
    font-weight: 400;
    color: $u-dbtj-label-price-color;
  }

  .xxx-content {
    // padding: 0 16rpx;
    max-height: calc(100vh - 102px);

    .good-wrap {
      padding: 0 16rpx;
      margin-top: 20rpx;
      padding-bottom: 180rpx; // 购物车结算栏 102rpx + margin-bottom 12rpx + 单行商品的一半 153/2 = 75+1.5 = 76.5rpx

      .tooltip {
        height: 60rpx;
        background: #E6EBFE;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        text-align: center;
        font-size: 18rpx;
        color: #081E7E;
        line-height: 60rpx;
        margin-bottom: 20rpx;
      }



      .single-record {
        margin-bottom: 20rpx;
        display: flex;
        align-items: center;
        width: 100%;
        height: 199rpx;
        background: #ffffff;
        border-radius: 12rpx 12rpx 12rpx 12rpx;

        .single-detail {
          width: 100%;

          .time-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 30rpx;
            padding: 30rpx 20rpx 10rpx 20rpx;

            .time {
              display: flex;
              align-items: center;
              height: 28rpx;
              font-size: 28rpx;
              color: $u-dbtj-label-right-order-color;
              line-height: 28rpx;
              text-align: left;

            }

            .icon {
              display: flex;
              align-items: center;
              justify-content: flex-end;
            }
          }

          .detail-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 33rpx;
            padding: 17rpx 20rpx 20rpx 20rpx;

            .detail-content {
              height: 33rpx;
              font-weight: 400;
              font-size: 33rpx;
              color: $u-dbtj-label-sku-color;
              line-height: 33rpx;
              display: flex;
              align-items: center;

              .label {
                border: 1px solid $u-dbtj-label-sku-color;
                font-size: 18rpx;
                line-height: 18rpx;
                padding: 2rpx 5rpx;
                margin-left: 10rpx;
              }
            }

            .detail-amount {
              height: 50rpx;
              font-size: 36rpx;
              color: $u-dbtj-label-main-color;
              line-height: 50rpx;
              text-align: left;
              font-style: normal;
              text-transform: none;

              .unit {
                font-size: 24rpx;
                color: $u-dbtj-label-sku-color;
              }
            }
          }

          .operation-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40rpx;
            padding: 17rpx 20rpx 20rpx 20rpx;
            border-top: 1px solid $u-dbtj-label-right-order-color;
            margin-bottom: 20rpx;


            .status {}

            .button-wrap {
              display: flex;
              justify-content: space-around;
            }
          }
        }
      }

    }


  }


  .applied-status {
    color: #FF6600;
  }

  .issued-status {
    color: #07C160;
  }
</style>

<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
