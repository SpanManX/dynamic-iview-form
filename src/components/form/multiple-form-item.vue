<!--多FormItem并列-->
<template>
    <div style="display: flex;">
        <FormItem
                :style="`flex-grow:${itemData.flexGrow}`"
                :label-width="itemData.labelWidth"
                v-for="(val,num) in itemData.data"
                :key="num"
                :ref="`multipleFormItem${num}`"
                :class="num !== 0 ? 'form-items-label' : ''"
                :label="num === 0 ? itemData.label : ''"
                :prop="`items.${index}.data.${num}.value`"
                :rules="val.rules">
            <div style="display: flex;">
                <Button @click="itemData.leftBut.func ? itemData.leftBut.func.call($attrs,$refs[`multipleFormItem${num}`]) : null "
                        style="margin-right: 10px" type="primary"
                        v-bind="$attrs"
                        v-if="itemData.leftBut && num === 0">
                    {{itemData.leftBut.title}}
                </Button>
                <Input v-bind="$attrs" type="text" v-model="val.value"></Input>
                <Button @click="itemData.rightBut.func ? itemData.rightBut.func.call($attrs,$refs[`multipleFormItem${num}`][0]) : null "
                        v-bind="$attrs"
                        style="margin-left: 10px" :type="itemData.rightBut.type"
                        v-if="itemData.rightBut && num === (itemData.data.length - 1)">
                    {{itemData.rightBut.title}}
                </Button>
                <span style="width: 100px;margin-left: 10px"
                      v-else-if="itemData.labelText && num === (itemData.data.length - 1)">{{itemData.labelText}}</span>
            </div>
        </FormItem>
        <p v-if="itemData.text && num === (itemData.data.length - 1)" :style="itemData.textStyle" class="dynamic-p">{{itemData.text}}</p>
    </div>
</template>

<script>
    export default {
        name: "multiple-form-item",
        props: {
            itemData: Object,
            index: Number
        }
    }
</script>

<style scoped>

</style>