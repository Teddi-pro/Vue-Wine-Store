<template>

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
</template>

<style>

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

</script>