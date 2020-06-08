<template>
    <div style="width: 100%" class="dynamicForm">
        <Form v-on="$listeners" v-bind="$attrs" ref="formDynamic" :model="formDynamic" :label-width="75"
              style="width: 50%" >
            <Row>
                <div v-for="(item, index) in formDynamic.items" :key="index">
                    <!--标题-->
                    <Col span="24" v-if="item.title">
                        <h2 style="width: 100%">{{item.title}}</h2>
                    </Col>
                    <!--内容-->
                    <Col :span="!item.colSpan ? 24 : item.colSpan">
                        <single-form-item v-bind="$attrs" v-if="item.element === 'input' && !item.data" :item-data="item"
                                          :index="index"></single-form-item>

                        <multiple-form-item v-bind="$attrs" v-else-if="item.data && item.element === 'input'" :item-data="item"
                                            :index="index"></multiple-form-item>

                        <select-form-item v-bind="$attrs" v-else-if="item.element === 'select'" :prop="optionsProp" :item-data="item"
                                          :index="index"></select-form-item>

                        <radio-form-item v-else-if="item.element === 'radio'" :index="index" :item-data="item"></radio-form-item>
                    </Col>
                </div>
            </Row>
        </Form>
        <div style="width: 100%">
            <Button type="primary" @click="handleSubmit">提 交</Button>
            <Button @click="handleReset" style="margin-left: 8px">重 置</Button>
        </div>
    </div>
</template>

<script>
    import singleFormItem from './single-form-item'
    import multipleFormItem from './multiple-form-item'
    import selectFormItem from './select-form-item'
    import radioFormItem from './radio-form-item'

    export default {
        name: "dynamicForm",
        components: {
            singleFormItem,
            multipleFormItem,
            selectFormItem,
            radioFormItem
        },
        props:{
            // select回显的键名
            optionsProp:{
              type:Object,
              default:()=>{
                  return {
                      id: 'id',
                      label: 'label'
                  }
              }
            },
            formRef:String,
            json:Array
        },
        data() {
            return {
                index: 1,
                formDynamic: {
                    items: {}
                },
            }
        },
        created(){
            this.formDynamic.items = this.json
        },
        methods: {
            handleSubmit() {
                this.$refs.formDynamic.validate((valid) => {
                    if (valid) {
                        let arr = [];
                        this.formDynamic.items.map(item => {
                            if (item.data && item.element === 'input') {
                                item.data.map(val => {
                                    arr.push(val.value)
                                })
                            } else {
                                arr.push(item.value)
                            }
                        });
                        console.log(arr)
                    } else {

                    }
                })
            },
            handleReset() {
                this.$refs.formDynamic.resetFields();
            },
        }
    }
</script>

<style lang="scss" scoped>
    .dynamicForm {
        /deep/.dynamic-p{
            line-height: 2.5;
            flex-shrink: 0;
        }
        .ivu-form {
            position: relative;
            /deep/ .form-items-label {
                .ivu-form-item-content {
                    margin-left: 10px !important;
                }
            }
        }
    }
</style>