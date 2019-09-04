function sortNum(a,b){
    return a-b;
}

function getTotal(name){
    let letterMap=new Map();
    let numArr=[];
    let sum=0;
    let cur=26;
    for(let i in name){
        let curL=name[i];
        if(letterMap.has(curL)){
            letterMap.set(curL,letterMap.get(curL)+1);
        }else{
            letterMap.set(curL,1)
        }
    }
    numArr=[...letterMap.values()].sort(sortNum);
    while(numArr.length>0){
        sum+=numArr.pop()*cur;
        --cur;
    }
    return sum;
}

let readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
let inputs=[];
readline.on('line',function(line){
    line=line.trim();
    inputs.push(line);
    if(inputs[0]==inputs.length-1){
        for(i=1;i<Number(inputs[0])+1;i++){
            console.log(getTotal(inputs[i]));
        }
        inputs=[];
    }
})