// module.exports = {
//     a: 100
// }
// exports.run = function() {
//     console.log(1)
// }

// 在node里 exports 导出会被 module.exports 覆盖


// es6
// export default 可以不用写函数名称 类名称 变量名称都可以省略
// 在es6里和nodejs 机制不同 单独淡出和默认导出是分开的


// 默认导出
// 对应node语法 module.exports
export default function() {
    return 100
}

// 对应node语法 exports.a = 100
export const a = 100

// 对应node语法 exports.b = function(){}
export function b() {

}