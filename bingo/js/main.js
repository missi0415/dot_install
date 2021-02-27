'use strict'

{
  function createColumn(col){

    const source = [];
 
    for (let i = 0;　i < 15; i++){
      source[i] = i + 1 + (15 * col);
    }
    const column = [];
    for (let i = 0; i < 5; i++){
      column[i] = source.splice(Math.floor(Math.random() * source.length),1)[0];
    }
    return column;//処理を汎用化したのでそれを関数の戻り値として返す
  }

  function createColumns(){
    const columns = [];//ビンゴ全体の配列を作る
    for (let i = 0; i <5; i++){
      columns[i] = createColumn(i);
    }
    columns[2][2] = "FREE";
    return columns;
  }

  function createBingo(colums){
    const bingo = [];//反転した配列
    //row ===行 0行目から4行目
    for (let r = 0; r < 5 ; r++){
      bingo[r] = [];//それぞれの要素はまた配列になる
      //5列分つくりたい col===列
      for (let c = 0; c < 5; c++) {
        bingo[r][c] = columns[c][r];
      }
    }
    return bingo;
  }

  function renderBingo(bingo){
    for (let row =0; row < 5; row++){
      const tr = document.createElement('tr');
      for (let col = 0;col < 5; col++){
        const td = document.createElement('td');
        td.textContent = bingo[row][col];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }

  const columns =createColumns();
  const bingo = createBingo(columns);
  renderBingo(bingo);
    
} 
