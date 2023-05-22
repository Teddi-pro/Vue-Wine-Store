<template>
   <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>LE CORTE</title>
    <link rel="stylesheet" href="index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap" rel="stylesheet">
</head>
<body>
<header>
    <div class="header">
    <div class="info">
        <p class="info__item">Новокузнечный переулок 4/1</p>
        <p class="info__item">8 (812) 123-45-67</p>
    </div>
    <nav class="menu">
            <div class="menu__list">
            <div class="menu__item">Каталог</div>
            <div class="menu__item">Доставка</div>
            <div class="menu__item">Коллекции</div>
            <div id="contact" class="menu__item">Контакты</div>
            </div>
    </nav>
    </div>
    <div>
        <nav class="low-menu">
            <button class="low-menu__item">Винная карта</button>
            <button class="low-menu__item">Дегустация</button>
        </nav>
    </div>
</header>
<main>
    <div class="main">
    <div class="section">
    <div class="section__content">
        <h1 class="title">Лучший вкус, это вкус долголетнего вина</h1>
        <div class="line"></div>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. Mauris dictumst risus pulvinar blandit elit. Vestibulum quam ultrices nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed. Viverra cras sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit duis. Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus. Pellentesque scelerisque nunc, orci aliquam quis.</p>
        <img class="image" src="/img/wine.png">
    </div>
    </div>

    <div class="section-2">
        <div class="section-2__content">
        <div class="box">
        <div></div>
        <p class="subject">Новинки коллекции</p>
        <h1>Март 1980<br>Урожай Марселя</h1>
        <div class="small-line"></div>
        <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.</p>
        <table>
            <tr>
                <th>1980</th><th class="th-1">Colli Euganei Bianco Ca' Lustra 1980<br class="br">Красочная бутылка вина из Марселя</th>
            </tr>
            <tr>
                <th>1980</th><th class="th-1">Colli Euganei Bianco Ca' Lustra 1980<br>Красочная бутылка вина из Марселя</th>
            </tr>
            <tr class="tr-1">
                <th>1980</th><th class="th-1">Colli Euganei Bianco Ca' Lustra 1980<br>Красочная бутылка вина из Марселя</th>
            </tr>
        </table>
        <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.</p>
        <button class="button-info">Узнать подробнее</button>
        </div>
        <div class="box-2">
        <img class="img" src="/img/Rectangle.png">
        <div class="picture">
        <img class="thumb" src="/img/Rectangle2.png">
        <img class="thumb-2" src="/img/Rectangle3.png">
        </div>
        </div>
        </div>

    </div>
    <div class="section-3">
        <div class="section-3__content">
            <img class="grape" src="/img/grape.png">
            <img class="barrel" src="/img/barrel.png">
        <h1 class="headline">Запись на дегустацию</h1>
        <div class="line"></div>
        <p class="headline__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum.</p>
        <WineInput></WineInput>
        </div>
    </div>
    </div>

</main>
<footer>
    <nav class="footer__menu">
        <div class="footer__items">
        <div class="holder-items">
            <div class="footer__item">Главная</div>
            <div class="footer__item">Каталог</div>
            <div class="footer__item">Поставщики</div>
            <div class="footer__item">Коллекции</div>
            <div class="footer__item">Дегустация</div>
            <div class="footer__item">Коллекция 2020</div>
            <div class="footer__item">Контакты</div>
        </div>
        </div>
        <div class="footer__list">
        <div class="holder-list">
            <div class="list__item" id="promo">винный бутик LE CORTE</div>
            <div class="list__item">8 (812) 123-45-67</div>
            <div class="list__item">
                <img src="/img/youtube.png">
                <img src="/img/vk.png">
                <img src="/img/facebook.png">
        </div>
        <div class="list__item" id="logo">© le-corte.ru</div>
            </div>
        </div>
    </nav>

</footer>
    
</body>
</html>

</template>

<style>
    body {
    display: flex;
    flex-direction: column;
    margin: 0;
}
header {
    width: 100%;
    height: 900px;
    background-image: url(/img/bgc.png);
}
.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.info {
    display: flex;
    justify-content: space-between;
    width: 800px;
    color: #fff;
}
.menu {
    display: flex;
    justify-content: center;
    height: 600px;
    width: 800px;
}
.menu__list {
    display: flex;
    justify-content: center;
    border: 2px solid #fff; 
    border-left: none;  
    border-right: none; 
    width: 800px;
    height: 70px;
}
.menu__item {
    border-right: 2px solid #fff;
    text-align: center;
    padding: 25px 50px 25px 50px;
    height: 20px;
    color: #fff;
}
#contact {
    border-right: none;
}
.low-menu {
    display: flex;
    justify-content: center;
}
.low-menu__item {
    text-align: center;
    text-transform: uppercase;
    background: #99862A;
    margin: 15px; 
    padding: 15px;
    color: #fff;
}
.main {
    display: flex;
    flex-direction: column;
}
.section {
    width: 100%;
    height: 900px;
    background: #282828;
    display: flex;
    justify-content: center;
    align-items: center;
}
.section__content {
    width: 1000px;
    height: 650px;
    border: 3px solid #C4C4C4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    
}
.title {
    width: 650px;
    height: 50px;
    color: #fff;
    font-family: "Playfair Display";
}
.line {
    width: 160px;
    height: 0;
    border: 1px solid #fff;
}
.text {
    width: 610px;
    height: 150px;
    color: #fff;
    font-family:"Montserrat";
}
.image {
    width: 160px;
    height: 160px;
}
.section-2 {
    width: 100%;
    height: 900px;
    background: #E6E3C4;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.section-2__content {
    width: 1000px;
    height: 750px;
    border: 1px solid #998431;
    display: flex;
    justify-content: space-between;
    border-left: none;
    border-right: none;
    padding-top: 20px;
    padding-bottom: 20px;
}
.box {
    width: 40%;
    display: flex;
    flex-direction: column;
}
.box-2 {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.img {
    height: 430px;
    width: 430px;
    margin: 50px 0;
}
.picture {
    display: flex;
}
.thumb {
    width: 190px;
    height: 190px;
    margin-right: 50px;
}
.thumb-2 {
    width: 190px;
    height: 190px;
}
.subject {
    margin-top: 50px;
    font-family:"Montserrat";
}
.subtitle {
    text-align: justify;
    font-family:"Montserrat";
}
.small-line {
    width: 160px;
    height: 0;
    border: 1px solid#282828;
}
table {
    border-spacing: 30px;
    border-collapse: collapse;
    margin: 15px 0;
}
tr {
    padding: 10px 10px;
    border-bottom: 1px solid #282828;
}
th {
    padding: 10px 10px;
    border-right: 1px solid #282828;
    font-family:"Montserrat";
}
.th-1 {
    border-right: none;
}
.tr-1 {
    border-bottom: none;
}
.button-info {
    text-transform: uppercase;
    color: #fff;
    background: #998431;
    width: 210px;
    height: 40px;
    margin-top: 20px;
    font-family:"Montserrat";
    border: none;
}

.section-3 {
    width: 100%;
    height: 700px;
    background: #282828;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.section-3__content {
    position: relative;
    width: 1000px;
    height: 480px;
    border: 3px solid #C4C4C4;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.headline {
    font-family: "Playfair Display";
    width: 450px;
    text-align: center;
    background-color: #282828;
    color: #fff;
    margin-top: -25px;
    margin-bottom: 40px;
}
.headline__text {
    font-family: "Montserrat";
    color: #fff;
    width: 550px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
}

.grape {
    position: absolute;
    right: 800px;
    bottom: 280px;
}
.barrel {
    position: absolute;
    left: 816px;
    bottom: 327px;
}
footer {
    width: 100%;
    height: 200px;
    background: #998431;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer__menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 1000px;
    height: 100px;
}
.footer__items {
    display: flex;
    justify-content: center;
    border-top:1px solid #fff;
    width: 1000px;
    height: 50px;
    
}
.holder-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    font-size: small;
   
}
.footer__item {
    color: #fff;
    font-family: "Montserrat";
}
.footer__list {
    display: flex;
    justify-content: center;
    border: 1px solid #fff;
    border-left: none;
    border-right: none;
    width: 1000px;
    height: 50px;
}
.holder-list {
    display: flex;
    justify-content: space-between;
    width: 800px;
    font-size: small;
    
}
.list__item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    border-right: 1px solid #fff;
    height: 50px;
    text-transform: uppercase;
    font-family: "Montserrat";
    font-weight: 900;
    font-size: small;
    width: 290px;
}
#promo {
    display: flex;
    justify-content: flex-start;
}
#logo {
    display: flex;
    justify-content: flex-end;
    border-right: none;
}

</style>

<script setup>
import WineInput from '../components/icons/WineInput.vue';

</script>