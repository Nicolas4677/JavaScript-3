<!--Copyright (C) 2020, Nicolas Morales Escobar. All rights reserved-->

<template>

    <section class="container">
        <div class="content">
            {{ id }}
        </div>
        <img v-bind:src=imgSrc v-bind:width=imgWidth v-bind:height=imgHeight>
        <span> Amount to unlock: {{amountToUnlock}}</span>
    </section>

</template>

<script>

    import Controller from '@/../lib/controller'
    class SystemController extends Controller {

        constructor( name, subComponentList = [])
        {
            super(name, subComponentList);

            this.vm = {
                imgWidth: "100px",
                imgHeight: "100px"
            }

            this.props = {
                id: String,
                amountToUnlock: Number,
                imgSrc: String
            }
        }
    }

    export default new SystemController('xoSystem');

</script>

<style scoped>

    .container {
        width: 100%;
        height: 150px;
        background-color: rgb(17, 33, 80);
    }

    .content {
        display: flex;
    }

    img {
        border-radius: 50%;
    }

</style>