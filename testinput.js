class node {
    constructor(x, y,node) {
        this.x = x;
        this.y = y;
        this.pre=node;
    }
}

function canPass(x, y, m, n, grid) {
    if (x > m - 1 || x < 0 || y < 0 || y > n - 1 || grid[x][y]) {
        return false;
    }

    return true;
}

let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let inputs = [];
readline.on('line', function (line) {
    line = line.trim();
    line = line.split(' ').map(function (x) {
        return parseInt(x)
    })
    inputs.push(line);
    if (inputs[0][0] == inputs.length - 1) {
        let m = inputs[0][0]
        let n = inputs[0][1]
        let dist = Array(m).fill(0).map(() => Array(n).fill(0));
        let queen = [];
        let direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        let tx = m-1, ty = n-1;

        let grid = [];
        let lastNode;

        for (let i = 1; i < m+1; i++) {
            let temparr = inputs[i];
            grid.push(temparr);
        }
        grid[0][0] = 1;
        queen.push(new node(0, 0,null));
        while (queen.length > 0) {
            let cur = queen.shift();
            //console.log(`(${cur.x},${cur.y})`)
            if (cur.x == tx && cur.y == ty) {
                lastNode=cur;
                break;
            }
            for (let i = 0; i < 4; i++) {
                let nx = cur.x + direction[i][0];
                let ny = cur.y + direction[i][1];
                if (canPass(nx, ny, m, n, grid)) {
                    //console.log(`(${nx},${ny})`)
                    dist[nx][ny] = dist[cur.x][cur.y] + 1;
                    grid[nx][ny] = 1;
                    queen.push(new node(nx, ny,cur));
                }
            }
        }
        while(lastNode!=null){
            queen.push(`(${lastNode.x},${lastNode.y})`)
            lastNode=lastNode.pre;
        }
        while (queen.length>0){
            console.log(queen.pop());
        }
        inputs=[];
    }
})