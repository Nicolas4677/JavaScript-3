<!--Copyright (C) 2020, Nicolas Morales Escobar. All rights reserved-->

<template>

    <section class="container">
        <div class="title">
            {{ id }}
        </div>
        <div style="display: flex">
            <img :src=imgSrc :width=imgWidth :height=imgHeight>
            <div style="display: flex; flex-direction: column; justify-content: center;">
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <div
                        v-for="(item, index) in submarine.maxHealth"
                        :class="submarine.health - index > 0 ? 'block active' : 'block'"
                        :key="index"
                    ></div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

    import Controller from '@/../lib/controller'
    class HealthController extends Controller {

        constructor( name, subComponentList = [])
        {
            super(name, subComponentList);

            this.vm = {
                imgWidth: "100px",
                imgHeight: "100px"
            }

            this.props = {
                id: String,
                imgSrc: String
            }

            this.injectGetters( ['submarine'] );
        }
    }

    export default new HealthController('healthSystem');

</script>

<style scoped>

    .container {
        color: aliceblue;
        width: 100%;
        height: 150px;
        background-color: rgb(17, 33, 80);
        padding: 10px;
    }

    .title {
        background-color: rgb(38, 80, 160);
        display: flex;
        justify-content: center;
        text-align: center;
    }

    img {
        border-radius: 50%;
        object-fit: cover;
        margin: 10px;
    }

    .block {
        width: 50px; 
        height: 50px; 
        margin: 10px;
        border-radius: 10%;
        background-color: rgba(0, 0, 0, 0.336);
    }

    .active {
        background-color: rgba(0, 255, 0, 0.336);
    }

</style>