import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.sass']
})
export class GameBoardComponent implements OnInit {

  constructor(private router: Router) { }

  board: boolean[][];
  size = 5;

  ngOnInit() {
    this.reset();
  }

  isOn(row, col) {
    if (this.board[row][col]) {
      return "on";
    } else {
      return "off";
    }
  }

  toggle(row, col) {
    if (row >= 0 && col >= 0 && row < this.size && col < this.size) {
      this.board[row][col] = !this.board[row][col];
    }
  }

  onPress(row, col) {
    this.switch(row, col);

    if (this.isWon) {
      alert("Congratulations!");
      this.router.navigateByUrl('/home');
    }
  }

  switch(row, col) {
    this.toggle(row, col);
    this.toggle(row - 1, col);
    this.toggle(row + 1, col);
    this.toggle(row, col - 1);
    this.toggle(row, col + 1);
  }

  randomMove() {
    let row = Math.floor(Math.random() * this.size);
    let col = Math.floor(Math.random() * this.size);
    
    console.log(row, col);
    this.switch(row, col);
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

  reset() {
    this.board = [];
    for (let row = 0; row < this.size; row++) {
      this.board[row] = [];
      for (let col = 0; col < this.size; col++) {
        this.board[row][col] = true;
      }
    }

    for (let i = 0; i < 5; i++) {
      this.randomMove();

      if (this.isWon) {
        this.randomMove();
      }
    }
  }
}
