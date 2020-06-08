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
  mounted(){
    let arr = [1,2];
    Array.prototype.aTest = function(){
      return '132131531'
    };
    console.log(arr.aTest())
  },
}
</script>

<style>
#app {

}
</style>
