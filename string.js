/*
*
*   编写一个截取字符串的函数，输入为一个字符串和字节数，输出为按字节截取的字符串。但是要保证汉字不被截半个，如"我ABC"4，应该截为"我AB"，输入"我ABC汉DEF"6，应该输出为"我ABC"而不是"我ABC+汉的半个"。
*    这题卡在下面的两次判断
* */

let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let inputs = [];
readline.on('line', function (line) {
    line = line.trim();
    inputs=line.split(' ');

    let n = 0;
    let tn = Number(inputs[1]);
    let str = ''
    for (let i = 0; i < inputs[0].length; i++) {
        let cur = inputs[0][i]
        if (n < tn) {
            str += cur;
        } else {
            console.log(str);
            return;
        }

        if (/[\u4e00-\u9fa5]/.test(cur)) {
            n += 2;
        } else {
            n += 1;
        }

        if (n >= tn) {
            console.log(str);
            return;
        }
    }
    inputs=[];

})