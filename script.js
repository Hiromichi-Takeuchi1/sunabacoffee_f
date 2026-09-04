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

const informationImages = document.querySelector(".information-images");

const aboutSection = document.querySelector(".about");

if (aboutSection && "IntersectionObserver" in window) {
  const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  aboutObserver.observe(aboutSection);
} else if (aboutSection) {
  aboutSection.classList.add("is-visible");
}

if (informationImages && "IntersectionObserver" in window) {
  const revealInformationImages = () => {
    informationImages.classList.add("is-visible");

    requestAnimationFrame(() => {
      informationImages.querySelectorAll("img").forEach((image, index) => {
        image.style.opacity = "1";
        image.style.transform = "translate(0, 0)";

        if (index === 1) {
          image.style.transitionDelay = "0.2s";
        }
      });
    });
  };

  const informationImagesObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealInformationImages();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  informationImagesObserver.observe(informationImages);

  const informationImagesBox = informationImages.getBoundingClientRect();

  if (informationImagesBox.top < window.innerHeight && informationImagesBox.bottom > 0) {
    revealInformationImages();
  }
} else if (informationImages) {
  informationImages.classList.add("is-visible");
}

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