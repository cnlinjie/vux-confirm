<template>
    <div>
        <div class="banner"></div>
        <router-link to="/introduce" class="router-link-active rose">活动简介</router-link>
        <router-link to="/activity" class="router-link-active violet">活动须知</router-link>
        <router-link to="/link" class="router-link-active orange">活动路线</router-link>
        <router-link to="/review" class="router-link-active blue"> 2014-2016年公益回顾 </router-link>
    </div>
</template>
<style scoped>
    .router-link-active {
        width: 90%;
        margin: 18px auto;
        text-align: center;
        font-size: 15px;
        padding: 12px;
        color: #fff !important;
        display: block;
    }
</style>