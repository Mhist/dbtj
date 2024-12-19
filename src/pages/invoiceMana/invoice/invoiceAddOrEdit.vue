<template>
  <view class="add-invoice-header-page">
    <u-form ref="form" :model="formData">
      <u-form-item label="抬头类型" prop="headerType">
        <u-radio-group v-model="formData.headerType">
          <u-radio label="个人/非企业单位" :name="formData.headerType"></u-radio>
          <u-radio label="企业" :name="formData.headerType"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="发票抬头" prop="invoiceHeader" :rules="[{ required: true, message: '请填写抬头名称' }]">
        <u-input v-model="formData.invoiceHeader"></u-input>
      </u-form-item>
      <u-form-item label="纳税人识别号" prop="taxpayerId" :rules="[{ required: true, message: '请填写纳税人识别号' }]">
        <u-input v-model="formData.taxpayerId"></u-input>
      </u-form-item>
      <u-form-item label="邮箱地址" prop="email" :rules="[{ required: true, message: '用户接收电子发票' }]">
        <u-input v-model="formData.email"></u-input>
      </u-form-item>
      <u-form-item label="注册地址" prop="registerAddress">
        <u-input v-model="formData.registerAddress"></u-input>
      </u-form-item>
      <u-form-item label="注册电话" prop="registerPhone">
        <u-input v-model="formData.registerPhone"></u-input>
      </u-form-item>
      <u-form-item label="开户银行" prop="bank">
        <u-input v-model="formData.bank"></u-input>
      </u-form-item>
      <u-form-item label="银行账户" prop="bankAccount">
        <u-input v-model="formData.bankAccount"></u-input>
      </u-form-item>
      <u-form-item label="默认发票抬头" prop="isDefault">
        <u-switch v-model="formData.isDefault"></u-switch>
      </u-form-item>
    </u-form>
    <u-button type="primary" @click="submitForm">保存</u-button>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    onLoad
  } from '@dcloudio/uni-app';

  let isEdit = ref('');
  onLoad((options) => {
    console.log(options.isEdit, "options");
    isEdit.value = options.isEdit;
  })
  const form = ref(null)
  const formData = ref({
    headerType: '企业',
    invoiceHeader: '',
    taxpayerId: '',
    email: '',
    registerAddress: '',
    registerPhone: '',
    bank: '',
    bankAccount: '',
    isDefault: false
  })

  const submitForm = () => {
    form.value.validate((valid) => {
      if (valid) {
        console.log('表单数据', formData.value)
        // 这里可以添加实际的保存逻辑，例如发送数据到后端
      } else {
        console.log('表单验证失败')
      }
    })
  }
</script>

<style scoped lang="scss">

</style>



<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
