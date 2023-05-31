import Maze from "./maze.js";
// import { PATH_STR, readPathStr } from "./path.js";

let maze;

function resetMaze() {
  maze = new Maze({
    row_count: 10,
    col_count: 10,
    cell_size: 20,
    // startCell: { row: ~~random(0, 5), col: ~~random(0, 5) },
    // finishCell: { row: ~~random(15, 20), col: ~~random(15, 20) },
  });
  // maze.makePath(readPathStr(PATH_STR.C));
  // maze.makePathFromText("ab", 1);
  maze.generateMaze_DFS({
    sleepTime: 1,
  });
}


class MazeWidget {
  constructor() {
    // this.startMaze();
    this.drawCircle();
  }

  drawCircle = () => {
    window.setup = () => {
      createCanvas(400, 400)
    }
    window.draw = () => {
      background(220);
      ellipse(50, 50, 80, 80)
    }
  }
  // startMaze = () => {
  //   const slogan = document.createElement("h2");
  //   slogan.innerHTML = "This indicates that widget should be visible";
  //   slogan.style.position = 'absolute';
  //   slogan.style.top = '50px';
  //   document.body.appendChild(slogan);
  //   const canv = document.createElement('canvas');
  //   canv.id = 'canvasdummy';
  //   canv.height = 300;
  //   canv.width = 300;
  //   canv.style.position = 'absolute';
  //   canv.style.top = '150px';
  //   document.body.appendChild(canv);
  //   let canvas1 = document.getElementById('canvasdummy');
  //   let ctx = canvas1.getContext('2d');
  //   ctx.beginPath();
  //   ctx.rect(0, 0, 300, 300);
  //   ctx.fillStyle = "gray";
  //   ctx.fill();
  //   ctx.beginPath();
  //   ctx.rect(20, 20, 150, 100);
  //   ctx.fillStyle = "red";
  //   ctx.fill();
  //   ctx.beginPath();
  //   ctx.rect(40, 40, 150, 100);
  //   ctx.fillStyle = "blue";
  //   ctx.fill();



  //   window.setup = () => {
  //     createCanvas(200, 200);
  //     resetMaze();
  //   };

  //   window.draw = () => {
  //     background(50);
  //     maze.draw();
  //   };

  //   window.keyPressed = () => {
  //     if (keyCode == 13) {
  //       resetMaze();
  //     }
  //   };
  // }


}

export default () => {
  new MazeWidget()
}


// new MazeWidget()