<!--select-->
<template>
    <FormItem :key="index"
              :label="itemData.label"
              :label-width="itemData.labelWidth"
              :prop="`items.${index}.value`"
              class="form-item-select"
              :rules="itemData.rules">
        <Select v-model="itemData.value" style="width: 100%" placeholder="" v-bind="$attrs">
            <Option v-for="val in itemData.options" :value="val[prop.id]"
                    :key="val[prop.label]">{{ val.label }}
            </Option>
        </Select>
    </FormItem>
</template>

<script>
    export default {
        name: "select-form-itemData",
        props: {
            itemData: Object,
            index: Number,
            prop:Object
        }
    }
</script>

<style scoped>
    .form-item-select {
        width: 100%;
    }
</style>