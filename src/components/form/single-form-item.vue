<!--单FormItem-->
<template>
    <div style="display: flex;">
        <FormItem
                :style="`flex-grow:${itemData.flexGrow}`"
                :label-width="itemData.labelWidth"
                ref="singleFormItem"
                :key="index"
                :label="itemData.label"
                :prop="`items.${index}.value`"
                :rules="itemData.rules">
            <div style="display: flex;">
                <Button @click="butClick(itemData.leftBut.func,itemData.value)"
                        v-bind="$attrs"
                        style="margin-right: 10px" type="primary" v-if="itemData.leftBut">
                    {{itemData.leftBut.title}}
                </Button>
                <Input v-bind="$attrs" v-if="!itemData.textarea" type="text" v-model="itemData.value"></Input>
                <Input v-else type="textarea" :autosize="itemData.textarea.autosize"
                       :maxlength="itemData.textarea.maxlength" :show-word-limit="itemData.textarea.showWordLimit"
                       v-model="itemData.value"></Input>
                <Button @click="butClick(itemData.rightBut.func,itemData.value)"
                        v-bind="$attrs"
                        style="margin-left: 10px" :type="itemData.rightBut.type" v-if="itemData.rightBut">
                    {{itemData.rightBut.title}}
                </Button>
                <span style="width: 100px;margin-left: 10px"
                      v-else-if="itemData.labelText">{{itemData.labelText}}</span>
            </div>
        </FormItem>
        <p v-if="itemData.text" :style="itemData.textStyle" class="dynamic-p">{{itemData.text}}</p>
    </div>
</template>

<script>
    export default {
        name: "form-item",
        props: {
            itemData: Object,
            index: Number,
        },
        data() {
            return {}
        },
        methods:{
            butClick(func,value){
                return func ? func.call(this.$attrs,value,this.$refs.singleFormItem) : null
            }
        }
    }
</script>

<style scoped>
</style>