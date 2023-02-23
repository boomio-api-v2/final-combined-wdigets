import { Matter } from 'exports-loader?type=commonjs&exports=Matter!../../matter.min.js';
import { AnimationService, DragElement } from '@/services';

//
class CratesWidget {
  constructor() {
    this.start();
  }
  start() {
    const container = document.createElement('div');
    new AnimationService({
      elem: container,
    });
    new DragElement(container);
    let engine = Matter.Engine.create();

    let render = Matter.Render.create({
      element: container,
      engine: engine,
      options: {
        width: 300,
        height: 600,
        wireframes: false, // need this or various render styles won't take
        background: 'red',
      },
    });
    Matter.Render.run(render);

    let runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
  }
}

export default () => {
  new CratesWidget();
};
