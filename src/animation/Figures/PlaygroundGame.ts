import * as PIXI from "pixi.js";

import { CurrentFigure } from "./CurrentFigure";
import { Figure } from "./LoadFigure";
import { ConstructorOptions, ConstructorPlayground } from "../utils/types";

export class PlaygroundGame extends PIXI.Application {
  offsetWidth: number | undefined;
  offsetHeight: number | undefined;
  currentFigure: CurrentFigure | undefined;
  axieId: number;
  animationId: number[];
  delay: number;
  loopAnimation: boolean;
  scaleAxie:number;
  setLoading: (Loading: boolean)=>void;
  setIntervalID: (ID: NodeJS.Timer) => void;

  constructor(options: ConstructorPlayground) {
    super(options.style);
    this.offsetWidth = options?.style?.width;
    this.offsetHeight = options?.style?.height;
    this.axieId = options.axieId;
    this.animationId = options.animationId;
    this.delay = options.delay;
    this.loopAnimation = options.loopAnimation;
    this.scaleAxie = options.scaleAxie;
    this.setLoading = options.setLoading;
    this.setIntervalID = options.setIntervalID

    this.currentFigure = undefined;
  }

  startGame() {
    PIXI.utils.clearTextureCache()

    this.loader.load(async () => {
      const currentFigure = new CurrentFigure();
      const figure = await Figure.fromAxieId(this.loader, this.axieId);
      if(figure){
        currentFigure.currentSpine = figure;
        currentFigure.addChild(figure);
      }
        currentFigure.changeCurrentAnimation(this.animationId, this.loopAnimation, this.delay, this.setIntervalID);
        currentFigure.setScaleAxie(this.scaleAxie)
      
      if(this.offsetWidth && this.offsetHeight){
        currentFigure.position.set(this.offsetWidth / 2, this.offsetHeight / 1.2);
      }
      this.stage?.addChild(currentFigure);
      this.currentFigure = currentFigure;
      this.setLoading(false)
    });

    this.start();
  }

  changeSpine(options: ConstructorOptions) {
    PIXI.utils.clearTextureCache()
    return this.currentFigure?.changeSpine(this.loader, options);
  }

}
