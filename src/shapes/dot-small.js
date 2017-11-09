import Shape from './shape';

export default class Dot extends Shape {
  drawTile() {
    const doubleSize = this._size * 2;
    this._context.beginPath();

    this.setFillProps();

    //this.drawDot();
    this.drawDot(doubleSize, doubleSize);

    this._context.fill();

    return this._canvas;
  }

  drawDot(offsetX = 0, offsetY = 0) {
    const size = this._size;
    //const quarterSize = size / 8;
    const x = size + offsetX;
    const y = size + offsetY;

    this._context.moveTo(x , y);
    //this._context.arc(x, y, diameter, 0, 2 * Math.PI);
    this._context.fillRect(x, y, size, size)

    this._context.closePath();
  }
}
