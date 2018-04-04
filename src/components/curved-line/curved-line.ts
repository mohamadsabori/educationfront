import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the CurvedLineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'curved-line',
  templateUrl: 'curved-line.html'
})
export class CurvedLineComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.setCanvasToIn();
  }

  @ViewChild('canvas') canvasEl: ElementRef;

  private _CANVAS: any;
  private _CONTEXT: any;

  constructor(public navCtrl: NavController) {

  }

  setCanvasToIn() {
    console.log(this.canvasEl);
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = 100;
    this._CANVAS.height = 100;
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "#3e3e3e";

    this._CONTEXT.beginPath();
    this._CONTEXT.moveTo(100, 50);
    this._CONTEXT.setLineDash([5, 15]);
    this._CONTEXT.lineTo(0, 50);
    this._CONTEXT.stroke()
  }


}
