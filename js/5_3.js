'use strict';

const obj1 = 
    {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
        "small": "img/smrtxiaomi11t-m.jpg",
        "big": "img/smrtxiaomi11t-b.jpg"
    },
    };

const arr1 = [
    {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
        "small": "img/smrtxiaomi11t-m.jpg",
        "big": "img/smrtxiaomi11t-b.jpg"
    }
    },
    {
    "id": 296378448,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
        "small": "img/cheetancar-m.jpg",
        "big": "img/cheetancar-b.jpg"
    }
    },
    {
    "id": 215796548,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
        "small": "img/tvboxmecool-m.jpg",
        "big": "img/tvboxmecool-b.jpg"
    }
    },
    {
    "id": 246258248,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
        "small": "img/lan_proconnect43-3-25.jpg",
        "big": "img/lan_proconnect43-3-25-b.jpg"
    }
    }
];


function createRow(obj1) {
    let table = document.querySelector('.tbody2');  
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for(let key in obj1) {
        let td = document.createElement('td');
        table.appendChild(tr).appendChild(td).append(obj1[key]);
    console.log(tr)
    }
};
createRow(obj1);

function renderGoods(arr1) {
    let table = document.querySelector('.tbody2')
    let result = arr1.map(element => {
        let tr = document.createElement('tr');
        table.append(tr);
        tr.appendChild(document.createElement('td')).append(element.id);
        tr.appendChild(document.createElement('td')).append(element.title);
        tr.appendChild(document.createElement('td')).append(element.price);
        tr.appendChild(document.createElement('td')).append(element.description);
        tr.appendChild(document.createElement('td')).append(element.category);
        tr.appendChild(document.createElement('td')).append(element.discont);
        tr.appendChild(document.createElement('td')).append(element.count);
        tr.appendChild(document.createElement('td')).append(element.units);
        tr.appendChild(document.createElement('td')).append(element.images.small);
        tr.appendChild(document.createElement('td')).append(element.images.big);
        console.log(tr);
})
}
renderGoods(arr1);
