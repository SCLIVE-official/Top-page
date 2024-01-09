$(function () {
  //読み込みが完了したら実行する
  $(window).on("load", function () {
    //背景色をフェードアウト
    $(".loader-bg").delay(900).fadeOut(3000);
    $(".topbackground").delay(900).fadeIn(3000);
  });

  //ページの読み込みが完了してなくても5秒後にアニメーションを非表示にする
  setTimeout(function () {
    $(".loader-bg").fadeOut(600);
  }, 5000);
});
