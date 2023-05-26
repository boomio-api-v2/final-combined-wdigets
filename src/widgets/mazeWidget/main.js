import Maze from "./maze.js";

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

window.setup = () => {
  createCanvas(200, 200);
  resetMaze();
};

window.draw = () => {
  background(50);
  maze.draw();
};

window.keyPressed = () => {
  if (keyCode == 13) {
    resetMaze();
  }
};
