// //两个数找出比较小的那个
// let minOf2 = (numbers) => {
//     if (numbers[0] < numbers[1]) {
//         return numbers[0]
//     } else {
//         return numbers[1]
//     }
// }
// //优化代码
// let minOf22 = numbers =>
//     numbers[0] < numbers[1] ? numbers[0] : numbers[1]//使用问号冒号表达式
//
// //究极优化
// let minOf222 = ([a, b]) => a < b ? a : b//析构赋值
// //调用这个函数
// minOf222([1, 2])//输出1，小白调用法
// minOf222.call(null, [1, 2])//输出1，这是高手调用
//
// //JS内部有现成的API Math.min
// Math.min(1, 2)
// Math.min.call(null, 1, 2)
// Math.min.apply(null, [1, 2])
//
// //如果是三个数中找到比较小的那个
// let minOf3 = ([a, b, c]) => {
//     return minOf222([a, minOf222([b, c])])
// }
// //任意长度数组求最小值，都可以通过minOf2来解决
//
// let min = (numbers) => {
//     if (numbers.length > 2) {
//         return min([numbers[0], min(numbers.slice(1))])//把第一项单独和后面几项的最小值去做min()
//     } else {
//         return Math.min.apply(null, numbers)
//     }
// }
//
// //将正整数数组，由小到大排序 sort排序
// //长度为2的数组排序
// let sort2 = ([a, b]) => a < b ? [a, b] : [b, a]
// //长度为3的数组排序
// let minIndex = (numbers) =>
//     numbers.indexOf(min(numbers))
//
// let sort3 = (numbers) => {
//     let index = minIndex(numbers)
//     let min = numbers[index]
//     numbers.splice(index, 1)//从index出删除一个
//     return [min].concat(sort2(numbers))
// }
//
// //任意长度的数组
// let sort = (numbers) => {
//     if (numbers.length > 2) {
//         let index = minIndex(numbers)
//         let min = numbers[index]
//         numbers.splice(index, 1)
//         return [min].concat(sort(numbers))
//     } else {
//         return numbers[0] < numbers[1] ? numbers : numbers.reverse
//     }
// }
//

let min = (numbers) => {
    if (numbers.length > 2) {
        return min([numbers[0], min(numbers.slice(1))])
    } else {
        return Math.min.apply(null, numbers)
    }
}//求出最小值
let minIndex = (numbers) => numbers.indexOf(min(numbers))//拿到最小值的下标
let sort = (numbers) => {
    if (numbers.length > 2) {
        let index = minIndex(numbers)
        let min = numbers[index]
        numbers.splice(index, 1)
        return [min].concat(sort(numbers))
    } else {
        return numbers[0] < numbers[1] ? numbers : numbers.reverse()
    }
}//sort排序算法

let arr = [1, 5, 2, 3, 4, 2, 3, 1, 3, 4]
//数组去重 indexOf方法
//思路：新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。
function unique(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {    // 首次遍历数组
        if (array.indexOf(arr[i]) === -1) {   // 判断索引有没有等于
            array.push(arr[i])
        }
    }
    return array
}
console.log(unique(arr));


//set方法
function unique (arr) {
    return Array.from(new Set(arr))
}
console.log(unique(arr))


//利用数组的filter()+indexOf()
function unique(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
}
const result = unique(arr)
console.log(result)

//使用map
function unique(arr) {
    const map = new Map()
    const newArr = []

    arr.forEach(item => {
        if (!map.has(item)) { // has()用于判断map是否包为item的属性值
            map.set(item, true) // 使用set()将item设置到map中，并设置其属性值为true
            newArr.push(item)
        }
    })

    return newArr
}

console.log(unique(arr))





