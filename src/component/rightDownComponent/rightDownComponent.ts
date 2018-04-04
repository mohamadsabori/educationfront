/**
 * Created by msabori on 2/8/18.
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'rightDownComponent',
  templateUrl: 'rightDownComponent.html'
})
export class RightDownComponent {
  @ViewChild('canvas') canvasEl: ElementRef;
  private _CANVAS: any;
  private _CONTEXT: any;

  constructor(public navCtrl: NavController) {
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = 100;
    this._CANVAS.height = 100;

    this.initialiseCanvas();
    this.createCurve();
  }

  ionViewDidLoad() {
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = 100;
    this._CANVAS.height = 100;

    this.initialiseCanvas();
    this.createCurve();
  }

  initialiseCanvas() {
    if (this._CANVAS.getContext) {
      this.setupCanvas();
    }
  }

  setupCanvas() {
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "#3e3e3e";
    // this._CONTEXT.fillRect(0, 0, 100, 100);
  }

  createCurve() {
    this._CONTEXT.beginPath();
    /*this._CONTEXT.moveTo(0, 0);               // Create a starting point
     this._CONTEXT.arc(0, 0, 45, 1.1 * Math.PI, 1.9 * Math.PI, true);
     this._CONTEXT.stroke();                     // Draw it*/

    /*this._CONTEXT.moveTo(40, 20);
     this._CONTEXT.bezierCurveTo(20, 20, 20, 20, 20, 40);*/
    this._CONTEXT.moveTo(100, 50);
    this._CONTEXT.setLineDash([5, 15]);
    this._CONTEXT.bezierCurveTo(50, 50, 50, 50, 50, 100);
    this._CONTEXT.stroke()
  }


}
