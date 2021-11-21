//对数组的元素去重
var arr0 = [1, 2, 3, 3, 4, 'a', 'a', 'b', 'c'];
console.log(arr0);
function reduce(arr0) {
    var res = [];
    for (var i = 0; i < arr0.length; i++) {
        if ((res.indexOf(arr0[i])) == -1) {//判断新建的res数组里面是否有与arr数组相同的元素
            res.push(arr0[i]);//将arr[i]添加到res中
        }
    }
    return res;
}

console.log(reduce(arr0));  //[1, 2, 3, 4, "a", "b", "c"]
//对传入数组进行升序排序就是使用冒泡排序
var arr1 = [1, 5, 4, 8, 2, 6, 3, 9, 7];
console.log(arr1);
function mySort(arr1) {
    var temp = 0;
    for (var i = 0; i < arr1.length - 1; i++) {//控制循环次数
        for (var j = 0; j < arr1.length - 1; j++) {//进行数组遍历
            if (arr1[j] > arr1[j + 1]) {//判断是否前面的数组值比后面的大
                temp = arr1[j + 1];
                arr1[j + 1] = arr1[j];
                arr1[j] = temp;
            }
        }
    }
    return arr1;
}

console.log(mySort(arr1)); //[1,2,3,4,5,6,7,8,9]
//合并两个数组并进行排序
var arr2 = [1, 3, 5, 7, 9];
var arr3 = [2, 4, 6, 8, 10];

function merge(arr1, arr2) {
    var arr4 = [];
    arr4 = arr2.concat(arr3);//将arr2和arr3合并成一个数组
    console.log(arr4);
    /*var temp = 0;
    for (var i = 0; i < arr4.length - 1; i++) {//控制循环次数
        for (var j = 0; j < arr4.length - 1; j++) {//进行数组遍历
            if (arr4[j] > arr4[j + 1]) {//判断是否前面的数组值比后面的大
                temp = arr4[j + 1];
                arr4[j + 1] = arr4[j];
                arr4[j] = temp;
            }
        }
    }*/
    mySort(arr4);
    return arr4;
}

console.log(merge(arr1, arr2));//[1,2,3,4,5,6,7,8,9,10]


