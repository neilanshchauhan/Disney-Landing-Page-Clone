let movies = [
  {
    name: "Loki",
    des: "After stealing the Tesseract in “Avengers: Endgame,” Loki lands before the Time Variance Authority.    ",
    image: "images/slider 1.png",
  },
  {
    name: "The Falcon and the Winter Soldier",
    des: "Sam Wilson and Bucky Barnes realize that their futures are anything but normal.",
    image: "images/slider 2.png",
  },
  {
    name: "WandaVision",
    des: "Wanda and Vision struggle to conceal their powers during dinner with Vision’s boss and his wife.    ",
    image: "images/slider 3.png",
  },
  {
    name: "Raya and the last dragon",
    des: "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
    image: "images/slider 4.png",
  },
  {
    name: "Luca",
    des: "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides",
    image: "images/slider 5.png",
  },
];

const carousel = document.querySelector(".carousel");

let slider = [];
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //Created Dom Elements

  let slide = document.createElement("div");
  let img = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //Attached Elements
  img.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(img);
  carousel.appendChild(slide);

  // Adding images
  img.src = movies[slideIndex].image;
  slideIndex++;

  //Setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-description";
  carousel.className = "carousel";
  slider.push(slide);

  if (slider.length) {
    const value = `calc(-${100 * (slider.length - 2)}% - ${
      30 * (slider.length - 2)
    }px)`;
    slider[0].style.marginLeft = value;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((e) => {
  e.addEventListener("mouseover", () => {
    let video = e.children[1];
    video.play();
  });
  e.addEventListener("mouseleave", () => {
    let video = e.children[1];
    video.pause();
  });
});

//movie-list slider

let cardContainers = [...document.querySelectorAll(".card-container")];
let prevBtns = [...document.querySelectorAll(".prev-button")];
let nextBtns = [...document.querySelectorAll(".next-button")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  prevBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
