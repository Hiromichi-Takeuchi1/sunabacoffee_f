const heroImages = document.querySelectorAll(".hero-image");

let currentImage = 0;

setInterval(() => {

  // 今表示している画像を消す
  heroImages[currentImage].classList.remove("active");


  // 次の画像へ
  currentImage++;

  // 4枚目まで行ったら1枚目に戻る
  if (currentImage >= heroImages.length) {
    currentImage = 0;
  }


  // 次の画像を表示する
  heroImages[currentImage].classList.add("active");

}, 4000);