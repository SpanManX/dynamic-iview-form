export default [
    {
        title: '信息二',
        label: 'select1',
        element: 'select',
        value: '',
        colSpan: 8,
        options: [
            {
                id: 1,
                label: 'select1-1'
            },
            {
                id: 2,
                label: 'select1-2'
            },
        ],
        rules: {required: true, type: 'number', message: 'select message test', trigger: 'change'}
    },
    {
        label: 'select2',
        element: 'select',
        value: '',
        colSpan: 8,
        options: [
            {
                id: 1,
                label: 'select2-1'
            },
            {
                id: 2,
                label: 'select2-2'
            },
        ],
        rules: {required: true, type: 'number', message: 'select message test', trigger: 'change'}
    },
    {
        label: 'select3',
        element: 'select',
        value: '',
        colSpan: 8,
        options: [
            {
                id: 1,
                label: 'select3-1'
            },
            {
                id: 2,
                label: 'select3-2'
            },
        ],
        rules: {required: true, type: 'number', message: 'select message test', trigger: 'change'}
    },
    {
        label: 'select4',
        element: 'select',
        value: '',
        colSpan: 12,
        options: [
            {
                id: 1,
                label: 'select4-1'
            },
            {
                id: 2,
                label: 'select4-2'
            },
        ],
        rules: {required: true, type: 'number', message: 'select message test', trigger: 'change'}
    },
    {
        label: 'select5',
        element: 'select',
        value: '',
        colSpan: 12,
        options: [
            {
                id: 1,
                label: 'select5-1'
            },
            {
                id: 2,
                label: 'select5-2'
            },
        ],
        rules: {required: true, type: 'number', message: 'select message test', trigger: 'change'}
    },
    {
        label: 'select6',
        element: 'select',
        // labelWidth: 130,
        colSpan: 12,
        value: '',
        options: [
            {
                id: 1,
                label: 'select6-1'
            },
            {
                id: 2,
                label: 'select6-2'
            },
        ],
        rules: {required: true, type: 'number', message: 'select message test', trigger: 'change'}
    },
    {
        label: 'select7',
        element: 'select',
        // labelWidth: 130,
        colSpan: 12,
        value: '',
        options: [
            {
                id: 1,
                label: 'select7-1'
            },
            {
                id: 2,
                label: 'select7-2'
            },
        ],
        rules: {required: true, type: 'number', message: 'select message test', trigger: 'change'}
    },
    {
        label: 'input5',
        element: 'input',
        value: '',
        // labelWidth: 130,
        labelText: '米',
        rules: {required: true, message: 'message test', trigger: 'blur'}
    },
    {
        label: 'input6',
        element: 'input',
        value: '',
        // labelWidth: 130,
        labelText: '平方米',
        text: '平方米1111text',
        textStyle: 'color:#666666;width:93px',
        rules: {required: true, message: 'message test', trigger: 'blur'}
    },
    {
        label: 'input7',
        element: 'input',
        // labelWidth: 130,
        value: '',
        labelText: '价格',
        text: '￥￥￥￥￥',
        textStyle: 'color:#666666',
        rules: {required: true, message: 'message test', trigger: 'blur'}
    },
]