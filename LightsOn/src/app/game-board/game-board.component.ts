import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.sass']
})
export class GameBoardComponent implements OnInit {
  board: boolean[][];
  size: number;
  moves: number;
  boardSize: Array<number>;
  subscrption: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscrption = this.route.params.subscribe(params => {
      this.size = +params['size'];
      this.moves = +params['moves'];
  
      this.boardSize = new Array<number>();
      for (let i = 0; i < this.size; i++) {
        this.boardSize[i] = i;
      }

      this.reset();
    })
  }

  ngOnDestroy() {
    this.subscrption.unsubscribe();
  }

  classesFor(row, col) {
    let classes = [];
    if (this.size == 7) {
      classes.push('seven');
    }

    if (this.board[row][col]) {
      classes.push('on');
    } else {
      classes.push('off');
    }
    
    return classes;
  }

  get isWon() {
    let isWon = true;
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        isWon = isWon && this.board[row][col];

        if (!isWon) {
          return false;
        }
      }
    }

    return true;
  }

  toggle(row, col) {
    if (row >= 0 && col >= 0 && row < this.size && col < this.size) {
      this.board[row][col] = !this.board[row][col];
    }
  }

  switch(row, col) {
    this.toggle(row, col);
    this.toggle(row - 1, col);
    this.toggle(row + 1, col);
    this.toggle(row, col - 1);
    this.toggle(row, col + 1);
  }

  onPress(row, col) {
    this.switch(row, col);

    if (this.isWon) {
      alert("Congratulations!");
      this.router.navigateByUrl('/home');
    }
  }

  randomMove() {
    let row = Math.floor(Math.random() * this.size);
    let col = Math.floor(Math.random() * this.size);
    
    console.log(row, col);
    this.switch(row, col);
  }

  reset() {
    this.board = [];
    for (let row = 0; row < this.size; row++) {
      this.board[row] = [];
      for (let col = 0; col < this.size; col++) {
        this.board[row][col] = true;
      }
    }

    for (let i = 0; i < this.moves; i++) {
      this.randomMove();

      if (this.isWon) {
        this.randomMove();
      }
    }
  }
}
