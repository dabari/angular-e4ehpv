import { Component } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private _canvas: HTMLCanvasElement;
  
  @ViewChild("canvasElement")
	set canvasElement(value: ElementRef) {
		this._canvas = value.nativeElement;
	}

	/**
	 * Return the canvas
	 */
	public getCanvas(): HTMLCanvasElement {
		return this._canvas;
	}

  name = 'Angular';

  ngOnInit() {
    this.addPointerListener2(this.getCanvas());
  }

private addPointerListener2(canvas: HTMLCanvasElement) {
		const self = this;
		canvas.addEventListener(
			"pointermove",
			function() {
					console.log("pointermove");
				
			},
			false
		);
		canvas.addEventListener(
			"pointerdown",
			function() {
				console.log("pointerdown");
			},
			false
		);
	}

}
