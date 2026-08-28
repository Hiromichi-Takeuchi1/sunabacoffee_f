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

const menuModalTriggers = document.querySelectorAll("[data-menu-modal]");

menuModalTriggers.forEach((trigger) => {
  const modal = document.getElementById(`${trigger.dataset.menuModal}-menu-modal`);

  if (!modal) {
    return;
  }

  const openModal = () => {
    if (!modal.open) {
      modal.showModal();
    }
  };

  trigger.addEventListener("click", openModal);
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal();
    }
  });

  modal.querySelector(".modal-close").addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});