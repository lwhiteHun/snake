class Snake {
  constructor(length, tiles) {
    this.length = length;
    this.direction = 'right';
    this.start = [];
    this.body = [];
    this.tiles = tiles;
    this.generateSnake();
  }

  generateSnake() {
    var startIndex = Math.round(this.tiles.length / 2) + Math.round(Math.sqrt(this.tiles.length) / 2);
    for (var i = 0; i < this.length; i++) {
      this.tiles[startIndex - i].setSnake();
    }
  }
}
