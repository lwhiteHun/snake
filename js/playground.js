class Playground {
  constructor(width, targetDiv) {
    this.width = width;
    this.targetDiv = targetDiv;
    // itt gyűjtjük a csempéket
    this.tiles = [];

    // nem this kell, mert nem az objektumhoz tartozik a művelet
    var self = this;
    window.onresize = function () {
      self.setSize();
    };
    this.generate();
  }
  generate() {
    var tileWidth = 100 / this.width;
    for (var i = 0; i < (this.width * this.width); i++) {
      var tile = new Tile(tileWidth);
      this.tiles.push(tile);
      this.targetDiv.appendChild(tile.div);
    }
    this.setSize();
    this.snake = new Snake(5, this.tiles);
    this.generateFood();
  }
  setSize() {
    // a targetDiv pontos értékét kérem vissza - getComputedStyle()
    var style = window.getComputedStyle(this.targetDiv);
    this.targetDiv.style.height = style.width;
  }
  generateFood() {
    // csak empty típusúra generálhat food-ot
    var filteredTiles = this.tiles.filter(function (item) {
      return item.type === 'empty';
    });
    // ez generálja, hogy melyik tömbelem legyen food
    var random = Math.floor(Math.random() * filteredTiles.length);
    filteredTiles[random].setFood();
  }
}
