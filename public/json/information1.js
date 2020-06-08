export default [
    {
        title: '信息一',
        text: '信息一(详细描述)',
        textStyle: 'color:#666666;margin-left:10px',
        label: 'Input1',
        element: 'input',
        value: '',
        rightBut: {
            title: 'right1',
            type: 'primary',
            func(val, e) {
                console.log(this, e, '   Input1');
                this.data.test = val
            }
        },
        rules: {required: true, message: 'message test', trigger: 'blur'}
    },
    {
        label: 'Input2',
        element: 'input',
        value: '',
        rightBut: {
            title: 'right2',
            type: 'primary',
            func(val, e) {
                console.log(this, e, '   Input2');
                this.data.test = val
            }
        },
    },
    {
        label: 'Input3',
        element: 'input',
        rightBut: {
            title: 'right',
            type: 'primary',
            func(val, e) {
                console.log(this, e, '   Input3 right');
                this.data.test = [val[0].value,val[1].value]
            }
        },
        leftBut: {
            title: 'left',
            type: 'primary',
            func(val, e) {
                console.log(this, e, '   Input3 left');
                this.data.test = [val[0].value,val[1].value]
            }
        },
        data: [
            {
                value: '',
                rules: {required: true, message: '111', trigger: 'blur'},
            }, {
                value: '',
                rules: {required: true, message: '2222', trigger: 'blur'}
            },
        ],

    },
    {
        label: '单选框1',
        // text: '信息一(详细描述)',
        // textStyle: 'color:#666666',
        element: 'radio',
        value: 1,
        data: [
            {
                label: 1,
                content: 'radio1-1',
                icon: 'logo-angular',
            }, {
                label: 2,
                content: 'radio1-2',
                icon: 'ios-at',
            },
        ],
        rules: {required: true, message: 'message test', trigger: 'change', type: 'number'}
    },
    {
        label: 'Input4',
        element: 'input',
        value: '',
        rightBut: {
            title: 'right4',
            type: 'primary',
            func(val, e) {
                console.log(this, e, '   Input4 right');
                this.data.test = val
            }
        },
        leftBut: {
            title: 'left1',
            type: 'primary',
            func(val, e) {
                console.log(this, e, '   Input4 left');
                this.data.test = val
            }
        },
        rules: {required: true, message: 'message test', trigger: 'blur'}
    },

]