function exchange(n,t) {
    if(n==2){
        t++;
        return t;
    }else if(n<2){
        return t;
    }else {
        t+=Math.floor(n/3);
        n=Math.floor(n/3)+n%3;
        return exchange(n,t)
    }

}

let inputs=[]

let readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

readline.on('line',function (line) {
    line=parseInt(line.trim());
    if(line==0){
        for(let i=0;i<inputs.length;i++){
            console.log(exchange(inputs[i],0));
        }
        inputs=[];
    }else {
        inputs.push(line)
    }
})