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
                <Button @click="itemData.leftBut.func ? itemData.leftBut.func.call($attrs,$refs.singleFormItem) : null "
                        v-bind="$attrs"
                        style="margin-right: 10px" type="primary" v-if="itemData.leftBut">
                    {{itemData.leftBut.title}}
                </Button>
                <Input v-bind="$attrs" v-if="!itemData.textarea" type="text" v-model="itemData.value"></Input>
                <Input v-else type="textarea" :autosize="itemData.textarea.autosize"
                       :maxlength="itemData.textarea.maxlength" :show-word-limit="itemData.textarea.showWordLimit"
                       v-model="itemData.value"></Input>
                <Button @click="itemData.rightBut.func ? itemData.rightBut.func.call($attrs,$refs.singleFormItem) : null "
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
        mounted() {
            // setTimeout(()=>{
            // this.$refs.singleFormItem.formData = this._data
            // },1000)
        },
    }
</script>

<style scoped>
</style>