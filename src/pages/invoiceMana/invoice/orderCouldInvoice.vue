<template>
  <view class="xxx-content">
    <view class="good-wrap">
      <view v-if="moreThanTwoChecked" class="tooltip">多个订单合并，可能开具多张发票</view>
      <view v-for="(item,index) in orderCouldInvoiceList" :key="item.id" class="single-good">
        <view class="single-select">
          <up-checkbox v-model:checked="item.checked" :custom-style="{}" used-alone shape="circle"
            active-color="#07c160" bg-color="#fff" />
        </view>
        <view class="single-detail">
          <view class="good-name up-line-1">
            开票金额: ¥ {{ item.price }}
          </view>
          <view class="good-name up-line-1">
            订单号: {{ item.orderNumber }}
          </view>
          <view class="good-name up-line-1">
            下单时间: {{ item.time }}
          </view>
        </view>

      </view>


    </view>
    <view class="bottom-tooltip">
      <view class="left">已选<text style="color:#2d4093">2</text>个订单，共计<text
          style="color:#2d4093">￥{{ priceTotal }}</text></view>
      <view class="right">
        开票金额以实际发票为准
      </view>
    </view>
    <view class="collect-wrap">

      <view class="select-all">
        <up-checkbox label="本页全选" v-model:checked="isAllChecked" :custom-style="{}" used-alone shape="circle"
          active-color="#07c160" bg-color="#fff" />
      </view>
      <view class="handle-all">
        <up-button @click="goInvoiceInfo" class="handle-button" color="#2583B7" shape="circle" text="下一步" />
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

  const deleteModalRef = ref();
  const deleteModalTitle = ref('确认要删除商品么?');
  let deleteIndex = ref();
  // 创建响应式数据
  let deleteModalShow = ref(false);

  // 方法
  const showDeleteModal = (item, index) => {
    deleteModalShow.value = true;
    deleteIndex.value = index;

  };

  const deleteModalconfirm = () => {
    orderCouldInvoiceList.value.splice(deleteIndex.value, 1);
    deleteModalShow.value = false;
  };

  const deleteModalCancel = () => {
    deleteModalShow.value = false;
  };

  let PurchaseType = {
    DirectPurchase: 'direct',
    GiftToFriend: 'indirect'
  }
  const buyModeModalRef = ref();
  const buyModeModalTitle = ref('请选择购买形式?');
  let buyMode = ref();
  // 创建响应式数据
  let buyModeModalShow = ref(false);

  // 方法
  const showBuyModeModal = (item, index) => {
    buyModeModalShow.value = true;

  };

  // TODO:写一个函数
  /*
   * @description 写一个函数跳转并且传参
   * @param {number} buyMode
   * @param {string} basketCheckedObj
   *
   */

  const buyModeDirectConfirm = () => {
    buyMode.value = PurchaseType.DirectPurchase;
    console.log(buyMode.value, "buyMode.value");
    buyModeModalShow.value = false;
    let params = {
      buyMode: buyMode.value
    };
    let queryString = queryParams(params);
    console.log(queryString, "queryString");
    uni.navigateTo({
      url: '/pages/orderMana/orderConfirm/index' + queryString,
    })
  };

  const buyModeGiveConfirm = () => {
    buyMode.value = PurchaseType.GiftToFriend;
    console.log(buyMode.value, "buyMode.value");
    buyModeModalShow.value = false;
    let params = {
      buyMode: buyMode.value
    };
    let queryString = queryParams(params);
    console.log(queryString, "queryString");
    uni.navigateTo({
      url: '/pages/orderMana/orderConfirm/index' + queryString,
    })
  };

  const goInvoiceInfo = () => {
    uni.navigateTo({
      url: '/pages/invoiceMana/invoice/invoiceInfo'
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

  const orderCouldInvoiceList = ref([]);
  const priceTotal = ref(600);
  const isAllChecked = ref(false);
  const actionStyle = {
    display: 'flex',
    flex: '40%',
    paddingLeft: ' 26rpx',
  };
  const loadData = () => {
    orderCouldInvoiceList.value = [{
        id: 1,
        price: 100,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 10:24",
        checked: false
      }, {
        id: 1,
        price: 200,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 13:24",
        checked: false
      }, {
        id: 3,
        price: 200,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 16:24",
        checked: false
      }, {
        id: 4,
        price: 100,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 19:24",
        checked: false
      },
      {
        id: 5,
        price: 100,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 10:24",
        checked: false
      }, {
        id: 6,
        price: 200,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 13:24",
        checked: false
      }, {
        id: 7,
        price: 200,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 16:24",
        checked: false
      }, {
        id: 8,
        price: 100,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 19:24",
        checked: false
      }, {
        id: 9,
        price: 100,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 10:24",
        checked: false
      }, {
        id: 10,
        price: 200,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 13:24",
        checked: false
      }, {
        id: 11,
        price: 200,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 16:24",
        checked: false
      }, {
        id: 12,
        price: 100,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 19:24",
        checked: false
      }, {
        id: 13,
        price: 100,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 10:24",
        checked: false
      }, {
        id: 14,
        price: 200,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 13:24",
        checked: false
      }, {
        id: 15,
        price: 200,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 16:24",
        checked: false
      }, {
        id: 16,
        price: 100,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 19:24",
        checked: false
      }, {
        id: 17,
        price: 100,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 10:24",
        checked: false
      }, {
        id: 18,
        price: 200,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 13:24",
        checked: false
      }, {
        id: 19,
        price: 200,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 16:24",
        checked: false
      }, {
        id: 20,
        price: 100,
        orderNumber: '79494949494949494994',
        time: "2024-11-26 19:24",
        checked: false
      }
    ];
  };
  loadData();


  let moreThanTwoChecked = computed(() => {
    let count = 0;
    orderCouldInvoiceList.value.forEach(item => {
      if (item.checked) {
        count++;
      }
    });
    return count > 1;
  });
  console.log(moreThanTwoChecked, "moreThanTwoChecked");
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



      .single-good {
        margin-bottom: 20rpx;
        display: flex;
        align-items: center;
        width: 100%;
        height: 165rpx;
        background: #ffffff;
        border-radius: 12rpx 12rpx 12rpx 12rpx;

        .single-select {
          width: 70rpx;
          display: flex;
          padding-left: 26rpx;
          flex: 10%;
        }

        .single-image {
          flex: 20%;
          background-color: transparent
        }

        .single-detail {
          flex: 100%;
          padding-left: 20rpx;
          line-height: 113rpx;

          .good-name {
            height: 28rpx;
            line-height: 24rpx;
            font-weight: 400;
            font-size: 24rpx;
            color: $u-dbtj-label-main-color;
            padding: 10rpx 0;
          }

          .good-sku {
            height: 22rpx;
            line-height: 22rpx;
            font-weight: 400;
            font-size: 22rpx;
            color: $u-dbtj-label-right-order-color;
            margin-top: 18rpx;
            margin-bottom: 14rpx;
          }

          .good-price {
            height: 32rpx;
            line-height: 32rpx;
            font-weight: 400;
            font-size: 32rpx;
            color: $u-dbtj-label-price-color;
          }
        }

        .single-operation {
          flex: 5%;
          height: 113rpx;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          padding-right: 20rpx;

          .delete {
            width: 46rpx;
            height: 22rpx;
            line-height: 22rpx;
            font-weight: 400;
            font-size: 22rpx;
            color: #999999;
            color: $u-dbtj-label-right-order-color;
          }

          .amount {
            text-align: center;

            .amount-icon-view {
              width: 20px;
              text-align: center;
              background: #f2f2f2;

              .amount-icon {
                text-align: center;
                padding-left: 14rpx;
              }
            }
          }
        }
      }
    }

    .bottom-tooltip {
      width: 100%;
      padding: 0 20rpx;
      position: fixed;
      bottom: 102rpx;
      height: 40rpx;
      background: #E6EBFE;
      border-radius: 12rpx 12rpx 12rpx 12rpx;
      font-size: 18rpx;
      color: #999999;
      line-height: 40rpx;
      display: flex;
      justify-content: space-between;

      .left {}

      .right {
        padding-right: 40rpx;
      }
    }

    .collect-wrap {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 102rpx;
      background: #fff;
      border-radius: 12rpx 12rpx 0rpx 0rpx;
      display: flex;
      align-items: center;




      .select-all {
        display: flex;
        padding-left: 26rpx;
        flex: 40%;

      }

      .price-all {
        flex: 30%;
        padding-left: 20rpx;

        .price-all-label {
          width: 72rpx;
          height: 30rpx;
          line-height: 30rpx;
          font-weight: 400;
          font-size: 28rpx;
          color: $u-dbtj-label-main-color;
        }

        .price-all-value {
          padding-left: 10rpx;
          width: 80rpx;
          height: 32rpx;
          font-weight: 400;
          font-size: 32rpx;
          color: #f80404;
        }
      }

      .handle-all {

        padding-right: 20rpx;
        color: $u-dbtj-label-main-color;
        background-color: transparent;
        color: transparent;

        .handle-button {
          width: 218rpx;
          height: 62rpx;
          background: #d5d5d5;
          border-radius: 31rpx;
        }
      }
    }
  }

  .u-checkbox__label-wrap {
    text {
      color: #f2f2f2;
    }
  }

  .mode-button-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;

    .handle-button {
      height: 62rpx;
      background: #d5d5d5;
      border-radius: 31rpx;
    }
  }
</style>

<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
