/*var num = prompt('请输入一个数值');
for (var i = 0; i < 100; i++) {
    var num1 = num - 0;
    if (typeof (num1) == typeof (5)) {
        num1 = num1 * num1;
        alert('你输入的数字平方后为：' + num1);
        break;
    }

    else {
        num = prompt('你未输入正确的数字，请重新输入：');
        continue;
    }

}*/
/*var arr = [1, [2, 3], 4, [5, [6, [7, 8]]], [9, 10]];

function fun1(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(fun1(arr[i]));
        }
        else {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(fun1(arr)); //[1,2,3,4,5,6,7,8,9,10];*/

var arr = [{ name: 'xiaoming', age: 18 }, { name: 'zhangsan', age: 34 },
{ name: 'lisi', age: 29 }, { name: 'wangwu', age: 24 }];

function sortby(key, way = true) {//way为true表示默认按照升序排列
    return function (a, b) {
        var value1 = a[key];
        var value2 = b[key];
        return value1 - value2;
    }
}

console.log(arr.sort(sortby('age'))) //[{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29},{name: "zhangsan", age: 34}]
console.log(arr.sort(sortby('name'))) //[{name: "zhangsan", age: 34},{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29}]

//因为浏览器console.log输出引用的原因，测试的时候可以将另一句不用的console语句注释起来，避免对测试结果产生影响