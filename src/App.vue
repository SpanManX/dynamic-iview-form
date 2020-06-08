<template>
  <div id="app">
    <h1>点击事件及提交事件返回值，请查看控制台</h1>
    <dynamicForm :options-prop="optionsProp" :data="_data" :json="formDynamic"></dynamicForm>
  </div>
</template>

<script>
import dynamicForm from './components/form/dynamicForm.vue'
import json from '../public/json/json'

export default {
  name: 'app',
  components: {
    dynamicForm,
  },
  data(){
    return{
      formDynamic: json,
      optionsProp: {
        id: 'id',
        label: 'label'
      },
      test:'00000'
    }
  },
  watch:{
    test(val){
      console.log(val , '  watch')
    }
  },
}
</script>

<style>
</style>
