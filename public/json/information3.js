export default [
    {
        title: '信息三',
        label: '单选框2',
        // text: '信息一(详细描述)',
        // textStyle: 'color:#666666',
        element: 'radio',
        value: 'b123',
        colSpan:'12',
        data:[
            {
                label:'a123',
                content:'radio2-1',
                icon:'logo-apple',
            },{
                label: 'b123',
                content:'radio2-2',
                icon:'logo-android',
            },
        ],
        rules: {required: true, message: 'message test', trigger: 'change'}
    },
    {
        flexGrow:1,
        label: 'Input8',
        element: 'input',
        colSpan:'12',
        value: '',
        rightBut: {
            title:'right8',
            type:'primary'
        },
    },
    {
        flexGrow:1,
        label: 'Input8',
        element: 'input',
        value: '',
        textarea:{
            autosize:{minRows: 2,maxRows: 5}, // 指定最小行数和最大行数
            // maxlength:"100",               // 最大输入长度
            // showWordLimit:true             // 是否显示输入字数统计
        },

    },
]