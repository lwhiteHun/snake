class Tile {
  constructor(width) {
    this.width = width;
    this.div;
    this.create();
  }
  create() {
    this.div = document.createElement('div');
    this.div.style.width = this.width + '%';
    this.div.style.height = this.width + '%';
    this.div.className = 'tile empty';
  }
  setFood() {
    this.div.classList.replace('empty', 'food');
    this.div.classList.replace('snake', 'food');
  }
  setSnake() {
    this.div.classList.replace('empty', 'snake');
    this.div.classList.replace('food', 'snake');
  }
  setEmpty() {
    this.div.classList.replace('snake', 'empty');
    this.div.classList.replace('food', 'empty');
  }
}
