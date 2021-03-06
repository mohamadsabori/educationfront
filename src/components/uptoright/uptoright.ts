import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

/**
 * Generated class for the UptorightComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'uptoright',
  templateUrl: 'uptoright.html'
})
export class UptorightComponent implements AfterViewInit{

  @ViewChild('canvas') canvasEl: ElementRef;
  private _CANVAS: any;
  private _CONTEXT: any;

  ngAfterViewInit(): void {
    this.setCanvas();
  }

  constructor() {
  }

  private setCanvas() {
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = 100;
    this._CANVAS.height = 100;
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "#3e3e3e";

    this._CONTEXT.beginPath();
    this._CONTEXT.moveTo(50, 0);
    this._CONTEXT.setLineDash([5, 15]);
    this._CONTEXT.bezierCurveTo(50, 50, 50, 50, 100, 50);
    this._CONTEXT.stroke()
  }
}
