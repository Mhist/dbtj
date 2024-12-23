<template>
  <view class="wrap">
    <view class="top-text">共一张发票，含一个订单</view>
    <u-form class="form-wrap" ref="form" :model="formData">

      <u-form-item labelWidth="120" label="发票类型">
        <view class="top-item-wrap">
          <u-input disabled v-model="formData.invoiceType"></u-input>
          <view class="view-wrap" @click="viewFile">
            查看 <up-icon style="width:20rpx" name="arrow-right" size="14"></up-icon>
          </view>
        </view>
      </u-form-item>
      <u-form-item labelWidth="120" label="开票状态">
        <u-input disabled v-model="formData.status"></u-input>
      </u-form-item>

      <u-form-item labelWidth="120" label="发票金额">
        <u-input disabled v-model="formData.invoicePrice"></u-input>
      </u-form-item>

      <u-form-item labelWidth="120" label="抬头类型">
        <u-input disabled v-model="formData.headerType"></u-input>
      </u-form-item>

      <u-form-item v-if="isCompanyInvoice" labelWidth="120" label="购方名称">
        <u-input disabled v-model="formData.companyName"></u-input>
      </u-form-item>

      <u-form-item v-if="isCompanyInvoice" labelWidth="120" label="购方税号">
        <u-input disabled v-model="formData.companyTaxNo"></u-input>
      </u-form-item>

      <u-form-item labelWidth="120" label="申请时间">
        <u-input disabled v-model="formData.time"></u-input>
      </u-form-item>

      <u-form-item labelWidth="120" label="申请时间">
        <u-input disabled v-model="formData.email"></u-input>
      </u-form-item>

    </u-form>
  </view>

</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    onLoad
  } from '@dcloudio/uni-app';
  let showTaxPayer = ref(true);
  let isEdit = ref('');
  onLoad((options) => {
    console.log(options.isEdit, "options");
    isEdit.value = options.isEdit;
  })

  // 基本案列数据
  const radiolist = reactive([{
      name: '个人/非企业单位',
    },
    {
      name: '企业单位',
    }
  ]);

  // 使用computed计算属性
  const isCompanyInvoice = computed(() => {
    return formData.value.headerType === '企业单位';
  });



  const form = ref(null)
  const formData = ref({
    invoiceType: '电子发票',
    status: "已开票", // 已申请
    invoicePrice: "600.00",
    headerType: "企业单位", // 企业单位
    companyName: "武汉智信联诚科技有限公司",
    companyTaxNo: "123wsd45678yh789556",
    time: "2024-08-28 13:50",
    email: '18812345678@163.com',

  });

  formData.value.headerType = "企业单位";
  showTaxPayer.value = true;
  const submitForm = () => {
    form.value.validate((valid) => {
      if (valid) {
        console.log('表单数据', formData.value)
        // 这里可以添加实际的保存逻辑，例如发送数据到后端
      } else {
        console.log('表单验证失败')
      }
    })
  };




  const deleteForm = () => {
    console.log("delete");
  };




  onMounted(() => {

  });


  const viewFile = () => {

    console.log("执行了");
    uni.downloadFile({
      url: 'https://xiaoxue-images.oss-cn-shenzhen.aliyuncs.com/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4Java%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83%EF%BC%88%E5%B5%A9%E5%B1%B1%E7%89%88%EF%BC%89.pdf',
      success: function(res) {
        console.log(res, "***");
        var filePath = res.tempFilePath;
        uni.openDocument({
          filePath: filePath,
          showMenu: true,
          success: function(res) {
            console.log('打开文档成功');
          }
        });
      }
    });

  };
</script>

<style scoped lang="scss">
  .wrap {
    margin-top: 20rpx;
    padding: 0 20rpx;


    .top-text {
      height: 28rpx;
      font-size: 20rpx;
      color: $u-dbtj-label-sku-color;
      line-height: 0rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .form-wrap {
      background-color: #FFF;
      box-shadow: 0rpx 3rpx 6rpx 1rpx rgba(0, 0, 0, 0.16);
      border-radius: 12rpx 12rpx 12rpx 12rpx;
      // max-height: calc(100vh - 180rpx - 180rpx);
      overflow-y: scroll;

      .top-item-wrap {
        display: flex;
        align-items: center;

        .view-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 30rpx;
          font-size: 22rpx;
          color: #081E7E;
          line-height: 30rpx;
        }
      }
    }
  }

  .explain-content {
    position: fixed;
    left: 20rpx;
    right: 20rpx;
    bottom: 150rpx;
    height: 180rpx;
    background-color: #efeff4;
    font-size: 18rpx;
    color: #999999;
    line-height: 30rpx;
    text-align: left;
  }

  .save-button-wrap {
    display: flex;
    position: fixed;
    left: 20rpx;
    right: 20rpx;
    bottom: 40rpx;



    .delete-button {
      height: 62rpx;
      background: #ffffff;
      border-radius: 31rpx;
      border: 1rpx solid #F80404;
    }

    .save-button {
      margin-left: 20rpx;
      height: 62rpx;
      border-radius: 31rpx 31rpx 31rpx 31rpx;
      border: 1rpx solid $u-primary;
    }
  }


  ::v-deep .u-form-item__body__left__content {
    padding-left: 20rpx;
    height: 33rpx;
    font-size: 24rpx;
    color: #666666;
    line-height: 33rpx;
    text-align: left;
  }

  ::v-deep .u-form-item__body__right {
    flex: 1;
    padding-right: 20rpx;
  }




  ::v-deep .u-border,
  .up-border {
    border-width: 0.5px !important;
    border-color: none !important;
    border-style: solid;
  }
</style>



<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
