<template>
  <div id="app">
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
