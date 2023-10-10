<template>

<header>
    <div class="header">
    <div class="info">
        <p class="info__item">Новокузнечный переулок 4/1</p>
        <p class="info__item" onclick="copyFunction()">8 (812) 123-45-67</p>
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
</style>

<script setup>

</script>