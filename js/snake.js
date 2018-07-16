class Snake {
  constructor(length, tiles, parent) {
    this.length = length;
    this.tiles = tiles;
    // referencia a szűlőre, így lehet onnan metódust hívni
    this.parent = parent;
    // direction 0-UP, 1-RIGHT, 2-DOWN, 3-LEFT
    // keyCode 38-UP, 39-RIGHT, 40-DOWN, 37-LEFT
    this.direction = 1;
    this.pos = 0;
    this.start = [];
    this.body = [];
    this.generateSnake();
    this.startWatch();
    this.watchKeys();
  }
  // óra hozzáadása, tick-ek meghatározása
  startWatch() {
    // mivel később fut le, addigra elveszítjük a this-t
    var self = this;
    setInterval(function () {
      self.move();
    }, 100);
  }

  move() {
    // a tömb hosszának a gyöke értékkel csökken vagy nő, ez a sor lépés
    switch (this.direction) {
    case 0:
      this.body.unshift(this.body[0] - Math.round(Math.sqrt(this.tiles.length)));
      break;
    case 1:
    // a tömb utolsó elemét törli
      this.body.unshift(this.body[0] + 1);
      break;
    case 2:
      this.body.unshift(this.body[0] + Math.round(Math.sqrt(this.tiles.length)));
      break;
    default:
      this.body.unshift(this.body[0] - 1);
    }
    // minden lépés után töröljük az utolsó elemet
    if (this.tiles[this.body[0]].type !== 'food') {
      this.tiles[this.body.pop()].setEmpty();
    } else {
      this.parent.generateFood();
    }

    for (var i = 0; i < this.body.length; i++) {
      this.tiles[this.body[i]].setSnake();
    }
  }

  generateSnake() {
    this.pos = Math.round(this.tiles.length / 2) + Math.round(Math.sqrt(this.tiles.length) / 2);
    for (var i = 0; i < this.length; i++) {
      this.tiles[this.pos - i].setSnake();
      this.body.push(this.pos - i);
    }
  }

  watchKeys() {
    var self = this;
    document.body.addEventListener('keydown', function (event) {
    // csak a játékban használja a kurzort, nem lesz scroll
      event.preventDefault;
      switch (event.keyCode) {
      case 38:
        if (self.direction !== 2) {
          self.direction = 0;
        }
        break;
      case 39:
        if (self.direction !== 3) {
          self.direction = 1;
        }
        break;
      case 40:
        if (self.direction !== 0) {
          self.direction = 2;
        }
        break;
      case 37:
        if (self.direction !== 1) {
          self.direction = 3;
        }
        break;
      default:
        '';
      }
    });
  }
}
