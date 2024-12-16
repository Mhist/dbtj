<template>
  <view class="xxx-content">
    <view class="good-wrap">
      <view v-for="(item) in baseketList" :key="item.id" class="single-good">
        <view class="single-select">
          <up-checkbox v-model:checked="item.checked" :custom-style="{}" used-alone shape="circle"
            active-color="#07c160" bg-color="#fff" />
        </view>
        <view class="single-image">
          <up-image class="image" :show-loading="true" :src="item.imgSrc" width="113rpx" height="113rpx" />
        </view>
        <view class="single-detail">
          <view class="good-name up-line-1">
            {{ item.name }}
          </view>
          <view class="good-sku up-line-1">
            {{ item.sku }}
          </view>
          <view class="good-price up-line-1">
            <text class="good-price-label">
              ¥
            </text> {{ item.price }}
          </view>
        </view>
        <view class="single-operation">
          <view class="delete">
            移除
          </view>
          <view class="amount">
            <up-number-box v-model="item.amount" integer button-size="5" color="#ffffff" bg-color="#f2f2f2"
              icon-style="color: #fff" :min="1" :max="100">
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
    </view>

    <view class="collect-wrap">
      <view class="select-all">
        <up-checkbox v-model:checked="item.checked" :custom-style="{}" used-alone shape="circle" active-color="#07c160"
          bg-color="#fff" />
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
        <up-button style="color: #333" class="handle-button" color="#d5d5d5" shape="circle" text="去结算" />
      </view>
    </view>
  </view>
</template>

<script setup lang="js">
  import {
    reactive,
    ref,
  } from 'vue';

  const baseketList = ref([]);
  const priceTotal = ref(600);
  const isAllChecked = ref(false);
  const actionStyle = {
    display: 'flex',
    flex: '40%',
    paddingLeft: ' 26rpx',
  };
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
    }, {
      id: 3,
      checked: false,
      name: '矿泉水',
      price: 95,
      sku: '330ml',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/3.jpg',
    }, {
      id: 4,
      checked: false,
      name: '绿茶',
      price: 110,
      sku: '500ml+礼盒装',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/4.jpg',
    }, {
      id: 5,
      checked: false,
      name: '红茶',
      price: 115,
      sku: '1.5L',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/5.jpg',
    }, {
      id: 6,
      checked: false,
      name: '咖啡',
      price: 120,
      sku: '2L',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/6.jpg',
    }, {
      id: 7,
      checked: false,
      name: '果汁',
      price: 125,
      sku: '250ml',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/7.jpg',
    }, {
      id: 8,
      checked: false,
      name: '牛奶',
      price: 130,
      sku: '18.9L',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/8.jpg',
    }, {
      id: 9,
      checked: false,
      name: '酸奶',
      price: 135,
      sku: '箱装6瓶',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/9.jpg',
    }, {
      id: 10,
      checked: false,
      name: '豆浆',
      price: 140,
      sku: '箱装12瓶',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/10.jpg',
    }, {
      id: 11,
      checked: false,
      name: '可乐',
      price: 145,
      sku: '500ml+礼盒装',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/1.jpg',
    }, {
      id: 12,
      checked: false,
      name: '雪碧',
      price: 150,
      sku: '1L',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/2.jpg',
    }, {
      id: 13,
      checked: false,
      name: '矿泉水',
      price: 155,
      sku: '330ml',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/3.jpg',
    }, {
      id: 14,
      checked: false,
      name: '绿茶',
      price: 160,
      sku: '500ml+礼盒装',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/4.jpg',
    }, {
      id: 15,
      checked: false,
      name: '红茶',
      price: 165,
      sku: '1.5L',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/5.jpg',
    }, {
      id: 16,
      checked: false,
      name: '咖啡',
      price: 170,
      sku: '2L',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/6.jpg',
    }, {
      id: 17,
      checked: false,
      name: '果汁',
      price: 175,
      sku: '250ml',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/7.jpg',
    }, {
      id: 18,
      checked: false,
      name: '牛奶',
      price: 180,
      sku: '18.9L',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/8.jpg',
    }, {
      id: 19,
      checked: false,
      name: '酸奶',
      price: 185,
      sku: '箱装6瓶',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/9.jpg',
    }, {
      id: 20,
      checked: false,
      name: '豆浆',
      price: 190,
      sku: '箱装12瓶',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/10.jpg',
    }, {
      id: 21,
      checked: false,
      name: '可乐',
      price: 195,
      sku: '500ml+礼盒装',
      amount: 1,
      imgSrc: 'https://cdn.uviewui.com/uview/album/1.jpg',
    }];
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

      .single-good {
        margin-bottom: 20rpx;
        padding-top: 20px;
        padding-bottom: 20rpx;
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

  .u-checkbox__label-wrap {
    text {
      color: #f2f2f2;
    }
  }
</style>

<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
