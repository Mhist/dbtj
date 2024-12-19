<template>
  <view class="order-confirm-content">
    <view class="content-wrap">
      <view class="address-wrap">
        <view v-if="buyMode === 'direct'" class="address-info">
          <view class="address-name u-line-2">
            湖北省武汉市洪山区关东街道XXXXXXXXXXXXXXXXXXXXXXX
          </view>
          <view class="people-info">
            <view class="people-info-name">王先生</view>
            <view class="people-info-phone">18812345678</view>
          </view>
        </view>
        <view v-else class="address-info">
          <view class="address-name u-line-2">
            收货地址由好友填写
          </view>
          <view class="people-info">
            <view class="people-info-name"></view>
            <view class="people-info-phone">将生成的提货码以链接的形式分享给微信好友，由好友填写收货地址</view>
          </view>
        </view>

      </view>
      <view class="good-wrap">
        <view v-for="(item,index) in baseketList" :key="item.id" class="single-good">
          <view class="single-image">
            <up-image bg-color="#fff" class="image" :show-loading="true" :src="item.imgSrc" width="113rpx"
              height="113rpx" />
          </view>
          <view class="single-detail">
            <view class="good-name up-line-1">
              {{ item.name }}
            </view>
            <view class="good-sku up-line-1">
              {{ item.sku }}
            </view>
            <view class="good-tag">
              <text class="good-tag-label">{{ "七天无理由退货" }}</text>
            </view>
          </view>
          <view class="single-operation">

            <view class="good-price up-line-1">
              <text class="good-price-label">
                ¥
              </text> {{ item.price }}
            </view>
            <view class="amount">
              <up-number-box :disabled="true" v-model="item.amount" integer button-size="5" color="#ffffff"
                bg-color="#f2f2f2" icon-style="color: #fff" :min="1" :max="100">
                <template #minus>
                  <view class="minus amount-icon-view">
                    <up-icon class="amount-icon" name="minus" size="5" />
                  </view>
                </template>
                <template #input>
                  <text style="
                    width: 20px;
                    text-align: center;
                    color: #333;
                    font-size: 19rpx;
                  " class="input">
                    {{ item.amount }}
                  </text>
                </template>
                <template #plus>
                  <view class="plus amount-icon-view">
                    <up-icon class="amount-icon" name="plus" size="5" />
                  </view>
                </template>
              </up-number-box>
            </view>
          </view>
        </view>
        <up-cell-group :border="false">
          <up-cell style="padding:0" :border="false" size="small" title="配送服务" value="快递 包邮"></up-cell>
          <up-cell style="padding:0" :border="false" size="small" title="订单备注" value="周末送货上门" isLink></up-cell>
        </up-cell-group>
      </view>
      <view class="pay-wrap">
        <view class="pay-wrap-label">支付方式</view>
        <up-cell-group>
          <up-cell title="微信支付">
            <template #icon>
              <up-icon size="24" name="weixin-fill" color="#07c160"></up-icon>
            </template>
            <!-- <up-badge count="99" :absolute="false" slot="right-icon"></up-badge> -->
            <template #right-icon>
              <up-checkbox :disabled="true" label="" v-model:checked="isWeixinPay" :custom-style="{}" used-alone
                shape="circle" active-color="#07c160" bg-color="#fff" @change="weixinPayChange" />
            </template>
          </up-cell>
        </up-cell-group>
      </view>
    </view>

    <view class="collect-wrap">
      <view class="select-all">
        <!--        <up-checkbox label="全选" v-model:checked="isAllChecked" :custom-style="{}" used-alone shape="circle"
          active-color="#07c160" bg-color="#fff" /> -->
      </view>
      <view class="price-all">
        <text class="price-all-label">
          合计:
        </text>
        <text class="good-price-label">
          ¥
        </text>
        <text class="price-all-value">
          {{ priceTotal }}
        </text>
      </view>
      <view class="handle-all">
        <up-button @click="payEvent" style="color: #fff" class="handle-button" color="#ff6600" shape="circle"
          text="去支付" />
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    onLoad
  } from '@dcloudio/uni-app';
  let buyMode = ref('');
  let isWeixinPay = ref(true);
  let priceTotal = ref(600);
  onLoad((options) => {
    console.log(options.buyMode, "options");
    buyMode.value = options.buyMode;
  })
  const baseketList = ref([]);
  const loadData = () => {
    baseketList.value = [{
        id: 1,
        checked: false,
        name: '可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐',
        price: 100,
        sku: '500ml+礼盒装',
        amount: 1,
        imgSrc: 'https://cdn.uviewui.com/uview/album/1.jpg',
      }, {
        id: 2,
        checked: false,
        name: '雪碧',
        price: 105,
        sku: '1L',
        amount: 1,
        imgSrc: 'https://cdn.uviewui.com/uview/album/2.jpg',
      },
      {
        id: 1,
        checked: false,
        name: '可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐可乐',
        price: 100,
        sku: '500ml+礼盒装',
        amount: 1,
        imgSrc: 'https://cdn.uviewui.com/uview/album/1.jpg',
      }
    ];
  };
  loadData();

  const weixinPayChange = (value) => {
    isWeixinPay.value = true;
  }
  // 支付事件
  const payEvent = () => {
    //调用后端接口获取必须的参数值：
    // let payData = await getPayDataFromServer();  // 预留接口
    let payData = {
      timeStamp: Date.now().toString(), // 13位时间戳
      nonceStr: Math.random().toString(36).substr(2, 15),
      package: "统一下单接口返回的prepay_id参数值，格式为prepay_id=xxxx",
      signType: "MD5或HMAC - SHA256",
      paySign: "（签名，根据前面的参数和商户密钥按照一定规则生成）"
    };
    // 假设已经从服务器获取了支付参数payData（包含timeStamp、nonceStr、package、signType、paySign等）
    uni.requestPayment({
      provider: 'wxpay', // 支付服务提供商
      timeStamp: payData.timeStamp, // 时间戳
      nonceStr: payData.nonceStr, // 随机字符串
      package: payData.package,
      signType: payData.signType,
      paySign: payData.paySign,
      success: function(res) {
        console.log('支付成功', res);
        // 在这里可以进行支付成功后的业务逻辑，如更新订单状态等
      },
      fail: function(err) {
        console.log('支付失败', err);
        // 可以根据失败原因进行相应的提示或业务处理
      }
    });
  }
</script>

<style lang="scss" scoped>
  .good-price {
    height: 32rpx;
    line-height: 32rpx;
    font-weight: 400;
    font-size: 32rpx;
    color: $u-dbtj-label-price-color;
  }

  .good-price-label {
    font-size: 16rpx;
    line-height: 16rpx;
    font-weight: 400;
    color: $u-dbtj-label-price-color;
  }

  .order-confirm-content {
    // padding: 0 16rpx;
    max-height: calc(100vh - 102px);

    .content-wrap {
      padding: 0 16rpx;
      margin-top: 20rpx;
      max-height: 100vh;
      padding-bottom: 200px;

      .address-wrap {
        width: 718rpx;
        height: 129rpx;
        background: #FFFFFF;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;


        .address-info {
          padding-left: 10rpx;
          flex: 71.33%;
          color: $u-dbtj-label-main-color;
          font-weight: 400;
          text-align: left;
          font-style: normal;
          text-transform: none;

          .address-name {
            padding-left: 10rpx;
            font-size: 28rpx;
            line-height: 40rpx;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          .people-info {
            padding-left: 10rpx;
            display: flex;
            align-items: center;

            .people-info-name {

              height: 30rpx;
              font-size: 22rpx;
              line-height: 30rpx;

            }

            .people-info-phone {
              height: 30rpx;
              font-size: 22rpx;
              color: $u-dbtj-label-right-order-color;
              line-height: 33rpx;

            }
          }
        }

        .address-icon {
          flex: 28.67%;
          display: flex;
          justify-content: flex-end;
          padding-right: 20rpx;
        }

      }



      .good-wrap {
        padding: 0 16rpx;
        margin-top: 20rpx;
        background: #fff;

        .single-good {


          margin-bottom: 20rpx;
          display: flex;
          align-items: center;
          width: 100%;
          height: 153rpx;
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
            background-color: transparent;
            padding-left: 10rpx;
          }

          .single-detail {
            flex: 65%;
            padding-left: 20rpx;
            line-height: 113rpx;

            .good-name {
              height: 28rpx;
              line-height: 28rpx;
              font-weight: 400;
              font-size: 28rpx;
              color: $u-dbtj-label-main-color;
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

            .good-tag {

              height: 22rpx;
              line-height: 22rpx;

              .good-tag-label {
                padding-left: 10rpx;
                padding-right: 10rpx;
                height: 22rpx;
                line-height: 22rpx;
                font-weight: 400;
                font-size: 16rpx;
                color: $u-dbtj-label-price-color;
                border: 1rpx solid $u-dbtj-label-price-color;
              }
            }
          }

          .single-operation {
            flex: 5%;
            height: 113rpx;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;

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



      .pay-wrap {
        margin-top: 20rpx;
        padding: 20rpx;
        min-height: 149rpx;
        background: #FFFFFF;
        border-radius: 12rpx 12rpx 12rpx 12rpx;

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
        }

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
        flex: 30%;
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


  ::v-deep .u-cell-group .u-cell__body {
    font-weight: 400;
    font-size: 24rpx;
    height: 33rpx;
    color: $u-dbtj-label-main-color;
    line-height: 33rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;
    padding: 35rpx 0 !important;
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
