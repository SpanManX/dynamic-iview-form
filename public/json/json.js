/**
 * @param {String}        title              标题
 * @param {String}        text               详细描述
 * @param {String}        labelText          表单右边的文字
 * @param {String}        label              标签文本
 * @param {String}        element            使用那种标签元素（input,select,radio）
 * @param                 value              双向绑定
 * @param {Object}        rules              iview表单验证规则
 * @param {Number,String} colSpan            栅格的占位格数0-24
 * @param {Array}         options            select选择框数据
 * @param {String,Number} labelWidth         表单域标签的的宽度
 * @param {String,Number} flexGrow           占据所有剩余的宽度
 **/

/**
 * 启用多个表单元素水平排列
 **/
// data: [
//          {
//              value: '',   双向绑定
//              rules: {},   iview表单验证规则
//           },
//       ],

/**
 * leftBut/rightBut启用button按钮。只有input带按钮
 **/
// leftBut or rightBut: {
//             title:'right1',          button文字内容
//             type:'primary',          iview按钮样式
//             func:function(e){}       点击事件（this为_data，e为$refs）
//         },

/**
 * input启用textarea文本域
 **/
// textarea:{
//             autosize:{minRows: 2,maxRows: 5},   指定最小行数和最大行数
//             maxlength:100,                      指定最小行数和最大行数
//             showWordLimit:true                  是否显示输入字数统计
//         },

import information1 from './information1'
import information2 from './information2'
import information3 from './information3'
export default [
    ...information1,
    ...information2,
    ...information3
]