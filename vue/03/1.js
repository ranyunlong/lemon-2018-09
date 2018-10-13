var arr = ["张明", "小张", "老王", "王小明", "老李", "李雷雷", "小芳"]

// var result = arr.filter(function(val) {
//     console.log(val)
// })

// 会返回一个新数组
// 返回true 则新数组中包含循环项
var filter =  arr.filter(function(val, index, arr) {
    return true
})

// 也会返回一个新数组
// 根据返回值组合成一个新数组
var map = arr.map(function(val, index, arr) {
    return val + '>>'
})

// 不会返回新数组
var forEach = arr.forEach(function(val, index, arr) {

})


console.log(map)
