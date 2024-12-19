<template>
  <view class="order-confirm-content">
    <view class="content-wrap">
      <view class="address-wrap" v-for="(item,index) in companyList" :key="index">
        <view class="address-info">
          <view class="address-name">
            <view class="u-line-1"> {{item.companyName}}
            </view>
            <view v-if="item.isDefault" class="default-label">默认</view>
          </view>
          <view class="people-info">
            <view class="people-info-phone"> {{item.companyTypeName}}</view>
          </view>
        </view>
        <view class="edit-icon" @click="goInvoiceAddOrEdit(true)">
          <up-icon class="flex justify-end pr-20rpx" name="edit-pen" size="15"></up-icon>
        </view>
      </view>
    </view>
  </view>

  <view class="save-button-wrap">
    <up-button @click="goInvoiceAddOrEdit(false)" style="color: #F7F7F7" class="save-button" color="#2583B7"
      shape="circle" text="添加发票抬头" />
  </view>
</template>

<script setup>
  import {
    onLoad
  } from '@dcloudio/uni-app';
  import {
    queryParams
  } from 'uview-plus';
  let buyMode = ref('');
  let isWeixinPay = ref(true);
  let priceTotal = ref(600);
  onLoad((options) => {
    console.log(options.buyMode, "options");
    buyMode.value = options.buyMode;
  })
  const companyList = ref([]);
  const loadData = () => {
    companyList.value = [{
      companyName: "武汉智信联诚科技有限公司",
      companyTypeName: "企业单位",
      companyTypeCode: 'company',
      isDefault: true,
    }, {
      companyName: "武汉地步天机科技有限公司",
      companyTypeName: "企业单位",
      companyTypeCode: 'company',
      isDefault: false,
    }];
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


  const goInvoiceAddOrEdit = (isEdit) => {
    let params = {
      isEdit: isEdit
    };
    let queryString = queryParams(params);
    uni.navigateTo({
      url: '/pages/invoiceMana/invoice/invoiceAddOrEdit' + queryString,
    })
  };
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
      max-height: 100vh;
      padding-bottom: 200px;

      .address-wrap {
        margin: 20rpx 0;
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
            display: flex;
            align-items: center;
            padding-left: 10rpx;
            font-size: 28rpx;
            line-height: 40rpx;
            text-align: left;
            font-style: normal;
            text-transform: none;

            .default-label {
              margin-left: 20rpx;
              width: 60rpx;
              height: 27rpx;
              background: rgba(37, 131, 183, 0.15);
              border-radius: 14rpx 14rpx 14rpx 14rpx;
              font-size: 16rpx;
              color: $u-primary;
              line-height: 27rpx;
              text-align: center;

            }
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
              padding-top: 10rpx;
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








    }



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
