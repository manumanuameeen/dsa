
class Graph {
    constructor() {
        this.adjacentList = {};
    }
    addvertex(vertex) {

        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = [];
            return
        }
    }
    addEdge(vertex1, vertex2) {
        this.addvertex(vertex1)
        this.addvertex(vertex2);

        this.adjacentList[vertex1].push(vertex2)
    }
    display() {
        for (let neibours in this.adjacentList) {
            console.log(neibours + " :" + this.adjacentList[neibours].join("-"))
        }
    }
    bfs(start) {
        let visited = new Set();
        let queue = [start]
        visited.add(start);
        while (queue.length > 0) {
            let vertex = queue.shift()
            console.log(vertex)
            for (let neibours of this.adjacentList[vertex]) {
                if (!visited.has(neibours)) {
                    visited.add(neibours);
                    queue.push(neibours)
                }
            }
        }
    }
    dfs(start, visited = new Set()) {
        // let queue=[start];
        visited.add(start);
        console.log(start)
        for (let neibours of this.adjacentList[start]) {
            if (!visited.has(neibours)) {
                this.dfs(neibours, visited);
            };
        };
    };
    shortestPath(start, end) {
        let visited = new Set();
        let queue = [start];
        let parent = {};
        parent[start] = null
        visited.add(start);

        while (queue.length > 0) {
            let curr = queue.shift();
            if (curr === end) {
                let path = [];
                while (curr !== null){
                    path.push(curr);
                    curr = parent[curr];
                }
                path.reverse();
                return path;
            }else{
                for(let neibours of this.adjacentList[curr]){
                    if(!visited.has(neibours)){
                        visited.add(neibours);
                        parent[neibours] = curr;
                        queue.push(neibours);
                    }
                }
            }
        }
    }
}

const g = new Graph();

g.addvertex(1)
g.addvertex(2)
g.addvertex(3)
g.addvertex(4)
g.addvertex(5)


g.addEdge(1, 2)
g.addEdge(1,4)
g.addEdge(2, 4)
g.addEdge(2, 3)
g.addEdge(3, 5)


// g.display();
// g.bfs(1);
// g.dfs(1)
const short = 
console.log(`shortest path is ${g.shortestPath(1,5).join("-")}`)