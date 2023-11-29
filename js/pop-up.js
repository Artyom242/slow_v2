
let elements = document.querySelectorAll(".gift");

let pp = document.querySelector("#test_p");
let emty = document.querySelector("#emty_img");
let xxx = document.querySelector("#elem_modal_img");
let empty_tyt = document.querySelector("#empty_tytle");

let myModal = document.querySelector("#myModal");
let cont = document.querySelector(".modal");
var buttonClose = document.querySelector(".close");

var btns = document.getElementsByClassName('dift_image');
var par = document.getElementsByClassName('emty_gift');

var dateNow = new Date();
let nowDay = dateNow.getDate();
let nowMonth = dateNow.getMonth();
let nowYear = dateNow.getFullYear();

console.log(nowYear);

let list = {
    1: ['1 декабря', 'Этот кит тоже не может поверить, что остался всего месяц до нового года... Ведь только недавно был 2023...', 'image/days2/1.png'],
    2: ['2 декабря', '', 'image/days2/2.jpg'],
    3: ['3 декабря', '', 'image/days2/3.jpg'],
    4: ['4 декабря', '', 'image/days2/4.webp'],
    5: ['5 декабря', '', 'image/days2/5.webp'],
    6: ['6 декабря', '', 'image/days2/6.webp'],
    7: ['7 декабря', '', 'image/days2/7.webp'],
    8: ['8 декабря', '', 'image/days2/8.jpg'],
    9: ['9 декабря', '', 'image/days2/9.jpg'],
    10: ['10 декабря', '', 'image/days2/10jpg.jpg'],
    11: ['11 декабря', '', 'image/days2/11.jpg'],
    12: ['12 декабря', '', 'image/days2/12.jpg'],
    13: ['13 декабря', '', 'image/days2/13.jpg'],
    14: ['14 декабря', '', 'image/days2/14.jpg'],
    15: ['15 декабря', '', 'image/days2/15.jpg'],
    16: ['16 декабря', '', 'image/days2/16.jpg'],
    17: ['17 декабря', '', 'image/days2/17.jpg'],
    18: ['18 декабря', '', 'image/days2/18.jpg'],
    19: ['19 декабря', '', 'image/days2/19.jpg'],
    20: ['20 декабря', '', 'image/days2/20.jpg'],
    21: ['21 декабря', '', 'image/days2/21.jpg'],
    22: ['22 декабря', '', 'image/days2/22.jpg'],
    23: ['23 декабря', '', 'image/days2/23.jpg'],
    24: ['24 декабря', '', 'image/days2/24.jpg'],
    25: ['25 декабря', '', 'image/days2/25.jpg'],
    26: ['26 декабря', '', 'image/days2/26.jpg'],
    27: ['27 декабря', '', 'image/days2/27.jpg'],
    28: ['28 декабря', '', 'image/days2/28.jpg'],
    29: ['29 декабря', '', 'image/days2/29.jpg'],
    30: ['30 декабря', '', 'image/days2/30.jpg'],
    31: ['31 декабря', 'Со 2 декабря что-то пошло не так', 'image/days2/31.jpg'],
    32: ['1 января', 'Всех с новым 2024 годом!', 'image/days/32.jpg'],
}

function test(i) {
    myModal.style.display = "block";
    console.log(i);
    xxx.src = list[i][2];
    pp.innerHTML = list[i][1];
    empty_tyt.innerHTML = list[i][0];


    btns[i - 1].classList.add('none')
    par[i - 1].classList.remove('none')
    par[i - 1].classList.add('block')
}
// document.querySelectorAll(".check")[i].src =  list[i][2];

buttonClose.onclick = function () {
    myModal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == cont) {
        cont.style.display = "none";
    }
};

for (let elem of elements) {
    elem.addEventListener("click", () => {
        if (nowDay >= elem.dataset.num && nowMonth == 11 || nowYear == 2023){
            test(elem.dataset.num);
        }
        console.log(elem.dataset.num);
        //document.querySelector('[data-num="' + elem.dataset.num + '"').style.backgroundImage = 'url("' + list[elem.dataset.num][1] + '")';
        // document.querySelector('[data-num="' + elem.dataset.num + '"').style.backgroundImage = 'url("image/photo_2022-12-08_19-47-08.png")'
    })
}

//document.querySelector("[data-num='1'")