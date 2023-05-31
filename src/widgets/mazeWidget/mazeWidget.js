// import Cell from "./cell.js";
// import { sleep } from "./utils.js";
// // import { DIR, PATH_STR, readPathStr } from "./path.js";
// // import { widgetHtmlService, } from '@/services';

// let maze
// class Maze {
//   constructor({
//     row_count = 5,
//     col_count = 5,
//     cell_size = 30,
//     startCell = { row: 2, col: 2 },
//     startArea = { rowFrom: 0, rowTo: 2, colFrom: 0, colTo: 2 },
//     finishCell = { row: row_count - 5, col: col_count - 5 },
//     finishArea = { rowFrom: row_count - 5, rowTo: row_count - 1, colFrom: col_count - 5, colTo: col_count - 1 },
//     cursorRow = 2,
//     cursorColumn = 2,
//   }) {
//     this.row_count = row_count;
//     this.col_count = col_count;
//     this.cell_size = cell_size;
//     this.startArea = startArea;
//     this.finishArea = finishArea;
//     this.cursorRow = cursorRow;
//     this.cursorColumn = cursorColumn;
//     this.grid = this.createGrid(row_count, col_count, cell_size);
//     this.startCell = this.grid[this.index(startCell.row, startCell.col)];
//     this.finishCell = this.grid[this.index(finishCell.row, finishCell.col)];
//     this.createMoveButton();
//     this.setStartPosition();

//     this.rightEl = document.getElementById('right');
//     this.leftEl = document.getElementById('left');
//     this.upEl = document.getElementById('up');
//     this.downEl = document.getElementById('down');

//     this.rightEl.addEventListener('click', () => this.moveright());
//     this.leftEl.addEventListener('click', () => this.moveleft());
//     this.upEl.addEventListener('click', () => this.moveup());
//     this.downEl.addEventListener('click', () => this.movedown());

//     document.addEventListener('keydown', (e) => {
//       const key = e.key;
//       if (key === "ArrowLeft" || key === "a") this.moveleft()
//       if (key === "ArrowRight" || key === "d") this.moveright()
//       if (key === "ArrowUp" || key === "w") this.moveup()
//       if (key === "ArrowDown" || key === "s") this.movedown()
//     });

//     let xDown = null;
//     let yDown = null;

//     document.addEventListener('touchstart', (e) => {
//       xDown = e.touches[0].clientX
//       yDown = e.touches[0].clientY

//     });

//     document.addEventListener('touchend', (e) => {
//       if (!xDown || !yDown) {
//         return;
//       }
//       const xUp = e.changedTouches[0].pageX
//       const yUp = e.changedTouches[0].pageY
//       const xDiff = xDown - xUp;
//       const yDiff = yDown - yUp;

//       if (Math.abs(xDiff) > Math.abs(yDiff)) {
//         if (xDiff > 0) {
//           // console.log('left')
//           this.moveleft()
//         } else {
//           // console.log('right')
//           this.moveright()
//         }
//       } else {
//         if (yDiff > 0) {
//           // console.log('up')
//           this.moveup()
//         } else {
//           //  console.log('down')
//           this.movedown()
//         }
//       }
//       xDown = null;
//       yDown = null;
//     });




//     canvas.addEventListener('click', (e) => {
//       const elementRelativeX = e.offsetX;
//       const elementRelativeY = e.offsetY;
//       const canvasRelativeX = elementRelativeX * canvas.width / canvas.clientWidth;
//       const canvasRelativeY = elementRelativeY * canvas.height / canvas.clientHeight;
//       if (Math.floor((canvasRelativeY / cell_size) / 2) === this.cursorRow && Math.floor((canvasRelativeX / cell_size) / 2) - 1 === this.cursorColumn) this.moveright()
//       if (Math.floor((canvasRelativeY / cell_size) / 2) === this.cursorRow && Math.floor((canvasRelativeX / cell_size) / 2) + 1 === this.cursorColumn) this.moveleft()
//       if (Math.floor((canvasRelativeY / cell_size) / 2) + 1 === this.cursorRow && Math.floor((canvasRelativeX / cell_size) / 2) === this.cursorColumn) this.moveup()
//       if (Math.floor((canvasRelativeY / cell_size) / 2) - 1 === this.cursorRow && Math.floor((canvasRelativeX / cell_size) / 2) === this.cursorColumn) this.movedown()
//     });


//     this.moveup = () => {
//       if (this.cursorRow === this.startCell.row && this.cursorColumn === this.startCell.col) return
//       if (this.grid[this.index(this.cursorRow, this.cursorColumn)].walls.top === true) return
//       this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
//       this.cursorRow -= 1
//       this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = true
//     }

//     this.movedown = () => {
//       if (this.cursorRow + 1 === finishCell.row && this.cursorColumn === finishCell.col) {
//         console.log('win')
//         this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
//       }

//       if (this.grid[this.index(this.cursorRow, this.cursorColumn)].walls.bottom === true) return
//       this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
//       this.cursorRow += 1
//       this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = true

//     }

//     this.moveleft = () => {
//       if (this.cursorRow === startCell.row && this.cursorColumn === startCell.col) return
//       if (this.grid[this.index(this.cursorRow, this.cursorColumn)].walls.left === true) return
//       this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
//       this.cursorColumn -= 1
//       this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = true
//     }

//     this.moveright = () => {

//       if (this.cursorRow === finishCell.row && this.cursorColumn + 1 === finishCell.col) {
//         console.log('win')
//         this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
//       }
//       if (this.grid[this.index(this.cursorRow, this.cursorColumn)].walls.right === true) return

//       this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
//       this.cursorColumn += 1
//       this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = true
//     }

//   }

//   setStartPosition() {
//     this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = true
//   }

//   createMoveButton = () => {
//     const btnsEl = document.createElement('div');
//     const btnRight = document.createElement('button');
//     const btnLeft = document.createElement('button');
//     const btnUp = document.createElement('button');
//     const btnDown = document.createElement('button');
//     btnRight.setAttribute('id', 'right')
//     btnLeft.setAttribute('id', 'left')
//     btnUp.setAttribute('id', 'up')
//     btnDown.setAttribute('id', 'down')
//     btnRight.classList.add('move-button')
//     btnLeft.classList.add('move-button')
//     btnUp.classList.add('move-button')
//     btnDown.classList.add('move-button')
//     btnRight.innerHTML = '→'
//     btnLeft.innerHTML = '←'
//     btnUp.innerHTML = '↑'
//     btnDown.innerHTML = '↓'
//     btnsEl.append(btnDown, btnUp, btnLeft, btnRight)
//     document.body.appendChild(btnsEl)
//   }

//   index(row, col) {
//     if (col < 0 || col >= this.col_count || row < 0 || row >= this.row_count || (this.inArea(row, col, this.startArea.rowFrom, this.startArea.rowTo, this.startArea.colFrom, this.startArea.colTo) && !(row === this.startArea.rowTo && col === this.startArea.colTo)) || (this.inArea(row, col, this.finishArea.rowFrom, this.finishArea.rowTo, this.finishArea.colFrom, this.finishArea.colTo) && !(row === this.finishArea.rowFrom && col === this.finishArea.colFrom)))
//       return -1;
//     return col + row * this.col_count;
//   }

//   inArea(r, c, rFrom, rTo, cFrom, cTo) {
//     if ((r >= rFrom && r <= rTo) && (c >= cFrom && c <= cTo)) { return true } else { return false };
//   }
//   cleanArea(rFrom, rTo, cFrom, cTo) {
//     for (let i = rFrom; i <= rTo; i++) {
//       for (let j = cFrom; j <= cTo; j++) {
//         this.grid[j + i * this.col_count].walls.bottom = false
//         this.grid[j + i * this.col_count].walls.right = false
//         this.grid[j + i * this.col_count].walls.left = false
//         this.grid[j + i * this.col_count].walls.top = false
//       }
//     }
//   }

//   createGrid(row_count, col_count, cell_size) {
//     let grid = [];
//     for (let row = 0; row < row_count; row++) {
//       for (let col = 0; col < col_count; col++) {
//         grid.push(new Cell({ row: row, col: col, size: cell_size }));
//       }
//     }
//     return grid;
//   }

//   async generateMaze_DFS({
//     startCell = this.startCell,
//     finishCell = this.finishCell,
//     sleepTime = 0,
//     startArea = this.startArea,
//     finishArea = this.finishArea,
//   }) {
//     let currentCell = startCell;
//     let stack = [currentCell];

//     this.cleanArea(startArea.rowFrom, startArea.rowTo, startArea.colFrom, startArea.colTo)
//     this.cleanArea(finishArea.rowFrom, finishArea.rowTo, finishArea.colFrom, finishArea.colTo)

//     while (stack.length > 0) {
//       currentCell.visited = true;
//       currentCell.isHightlight = false;
//       let next = this.getRandomNeighborNotVisited(currentCell);
//       if (next) {
//         next.visited = true;
//         stack.push(currentCell);
//         this.removeWalls(currentCell, next);
//         currentCell = next;
//       } else if (stack.length > 0) {
//         currentCell.isDone = true;
//         currentCell = stack.pop();
//       }
//       currentCell.isHightlight = true;
//       if (sleepTime) await sleep(sleepTime);
//     }
//   }

//   removeWalls(cellA, cellB) {
//     let dx = cellA.col - cellB.col;
//     if (dx == 1) {
//       cellA.walls.left = false;
//       cellB.walls.right = false;
//     } else if (dx == -1) {
//       cellA.walls.right = false;
//       cellB.walls.left = false;
//     }

//     let dy = cellA.row - cellB.row;
//     if (dy == 1) {
//       cellA.walls.top = false;
//       cellB.walls.bottom = false;
//     } else if (dy == -1) {
//       cellA.walls.bottom = false;
//       cellB.walls.top = false;
//     }
//   }

//   getRandomNeighborNotVisited(cell) {
//     let neighbors = this.getNeighbors(cell);
//     let neighborsArray = Object.values(neighbors).filter(
//       (n) => n && !n.visited
//     );

//     if (neighborsArray.length > 0) {
//       var randomIndex = floor(random(0, neighborsArray.length));
//       return neighborsArray[randomIndex];
//     } else {
//       return null;
//     }
//   }

//   getNeighbors(cell) {
//     let x = cell.col;
//     let y = cell.row;

//     return {
//       top: this.grid[this.index(y - 1, x)],
//       right: this.grid[this.index(y, x + 1)],
//       bottom: this.grid[this.index(y + 1, x)],
//       left: this.grid[this.index(y, x - 1)],
//     };
//   }

//   draw() {
//     for (let cell of this.grid) {
//       cell.draw();
//     }
//     // this.startCell.draw("darkgrey");
//     this.finishCell.draw("yellow");
//   }
// }


// const resetMaze = () => {
//   maze = new Maze({
//     row_count: 10,
//     col_count: 10,
//     cell_size: 20,
//     // startCell: { row: ~~random(0, 5), col: ~~random(0, 5) },
//     // finishCell: { row: ~~random(15, 20), col: ~~random(15, 20) },
//   });
//   // maze.makePath(readPathStr(PATH_STR.C));
//   // maze.makePathFromText("ab", 1);
//   maze.generateMaze_DFS({
//     sleepTime: 1,
//   });
// }


// class MazeWidget {
//   constructor() {
//     this.startMaze()
//     // this.testVisibility()
//   }

//   startMaze = () => {
//     const slogan = document.createElement("h2");
//     slogan.innerHTML = "this indicates that widget should be visible";
//     document.body.appendChild(slogan);

//     const canv = document.createElement('canvas');
//     canv.id = 'canvasdummy';
//     canv.height = 300;
//     canv.width = 300;
//     document.body.appendChild(canv);
//     let canvas1 = document.getElementById('canvasdummy');
//     let ctx = canvas1.getContext('2d');
//     ctx.beginPath();
//     ctx.rect(20, 20, 150, 100);
//     ctx.fillStyle = "red";
//     ctx.fill();
//     ctx.beginPath();
//     ctx.rect(40, 40, 150, 100);
//     ctx.fillStyle = "blue";
//     ctx.fill();

     

//     window.setup = () => {
//       createCanvas(200, 200);
//       resetMaze();
//     };

//     window.draw = () => {
//       background(50);
//       maze.draw();
//     };

//     // window.keyPressed = () => {
//     //   if (keyCode == 13) {
//     //     resetMaze();
//     //   }
//     // };

//     }
// }


// export default () => {
//   new MazeWidget()
// }


