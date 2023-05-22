<template>
    <form>
            <div class="wrapper">
            <InputGui type="text" placeholder="Имя" class="tel-Name"/>
            <InputGui type="tel" placeholder="Телефон" class="tel-Name"/>
            </div>
            <InputGui type="text" placeholder="Бутик на Невском 103" class="form-text"/>
            <button class="form-button">Записаться</button>
        </form>
</template>

<style>
form {
    width: 550px;
    display: flex;
    flex-direction: column;
}
::placeholder {
    color: #fff;
}
.wrapper {
    display: flex;
    justify-content: space-between;
    border: none;
}
.tel-Name {
    border-bottom: 1px solid #fff;
    background-color: #282828;
    border-right: none;
    border-left: none;
    border-top: none;
    width: 46%;
    height: 40px;
    margin-bottom: 20px;
}
.form-text {
    border-bottom: 1px solid #fff;
    background-color: #282828;
    border-right: none;
    border-left: none;
    border-top: none ;
    height: 40px;
    margin-bottom: 50px;
}
.form-button {
    border: 1px solid #fff;
    background-color: #282828;
    color: #fff;
    height: 50px;
    text-transform: uppercase;
}
</style>

<script setup>
    import InputGui from './gui/InputGui.vue';
</script>