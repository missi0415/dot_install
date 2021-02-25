'use strict';
{
  
  let i = 0;
  function showTime() {
    console.log(new Date());
    //指定した時間の後に1回だけ処理を実行する命令
    const timeoutId = setTimeout(showTime, 1000);
    i++;
    if (i > 2) {
      clearTimeout(timeoutId);
    }
  }
  showTime();

}