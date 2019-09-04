let readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

function split8(str){
    if(str.length<=8){
        console.log(str.padEnd(8,'0'));
        return;
    }
    console.log(str.substr(0,8));
    split8(str.slice(8));
}

let inputs=[];
readline.on('line',function(line){
    line=line.trim();
    inputs.push(line);
    if(inputs.length==2){
        split8(inputs[0]);
        split8(inputs[1]);
        inputs=[];
    }
})