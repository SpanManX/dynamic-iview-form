<template>
    <FormItem
            :label-width="itemData.labelWidth"
            ref="radioFormItem"
            :key="index"
            :label="itemData.label"
            :prop="`items.${index}.value`"
            :rules="itemData.rules">
        <RadioGroup v-model="itemData.value">
            <Radio v-for="(val,num) in itemData.data" :key="num" :label="val.label">
                <Icon :type="val.icon" v-show="val.icon"></Icon>
                <span>{{val.content}}</span>
            </Radio>
        </RadioGroup>
    </FormItem>
</template>

<script>
    export default {
        name: "radio-form-item",
        props: {
            itemData: Object,
            index: Number,
        },
    }
</script>

<style scoped>

</style>