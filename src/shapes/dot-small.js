import Shape from './shape';

export default class Dot extends Shape {
  drawTile() {
    this.setFillProps();
    this.drawDots();
    return this._canvas;
  }

  drawDots() {
    const halfSize = this._size / 2;
    this._context.fillRect(0, 0, halfSize, halfSize);
    this._context.fillRect(halfSize, halfSize, halfSize, halfSize);
  }
}
