const slider = document.querySelector(".slider");
const trail = document.querySelector(".trail").querySelectorAll("div");

let value = 0;
let trailValue = 0;
let interval = 4000;
let start = setInterval(() => slide("increase"), interval);

const slide = (condition) => {
    clearInterval(start);
    condition === "increase" ? initiateINC() : initiateDEC();
    move(value, trailValue);
    start = setInterval(() => slide("increase"), interval);
};

const initiateINC = () => {
    trail.forEach(cur => cur.classList.remove("active"));
    value = (value + 20) % 100;
    trailUpdate();
};

const initiateDEC = () => {
    trail.forEach(cur => cur.classList.remove("active"));
    value = (value - 20 + 100) % 100;
    trailUpdate();
};

const move = (S, T) => {
    slider.style.transform = `translateX(-${S}%)`;
    trail[T].classList.add("active");
};

const trailUpdate = () => {
    trailValue = Math.floor(value / 20);
};

document.querySelectorAll("svg").forEach(cur => {
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"));
});

const clickCheck = (e) => {
    clearInterval(start);
    trail.forEach(cur => cur.classList.remove("active"));
    const check = e.target;
    check.classList.add("active");

    switch (check.classList[0]) {
        case "box1":
            value = 0;
            break;
        case "box2":
            value = 20;
            break;
        case "box3":
            value = 40;
            break;
        case "box4":
            value = 60;
            break;
        case "box5":
            value = 80;
            break;
        default:
            break;
    }
    trailUpdate();
    move(value, trailValue);
    start = setInterval(() => slide("increase"), interval);
};

trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)));

const touchSlide = (() => {
    let start, move, change, sliderWidth;
    slider.addEventListener("touchstart", (e) => {
        start = e.touches[0].clientX;
        sliderWidth = slider.clientWidth / trail.length;
    });
    slider.addEventListener("touchmove", (e) => {
        e.preventDefault();
        move = e.touches[0].clientX;
        change = start - move;
    });
    const mobile = (e) => {
        change > (sliderWidth / 4) ? slide("increase") : null;
        (change * -1) > (sliderWidth / 4) ? slide("decrease") : null;
        [start, move, change, sliderWidth] = [0, 0, 0, 0];
    };
    slider.addEventListener("touchend", mobile);
});
//navigation slide
var tablinks = document.getElementsByClassName("tab-links");
var products_items = document.getElementsByClassName("products_items");
function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (let product_item of products_items) {
        product_item.classList.remove("active-skills");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add('active-skills')
}
//price
const elementPithPriceClass = document.querySelectorAll('.price');

elementPithPriceClass.forEach(element => {
    const currentText = element.textContent;
    const formattedNumericPart = Number(currentText).toLocaleString('fa');
    element.textContent = formattedNumericPart;
});
//website animation scroll
  AOS.init();
