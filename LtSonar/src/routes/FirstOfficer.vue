<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="firstofficer-container">
        <div class="about">
            <h1 class="title">{{ name }}</h1>
            <div class="grid-container">
                <div class="batch-item">Batch item</div>
                <div class="submarine-stats-item">Submarine stats</div>
                <xo-system v-for="(item, index) in systems" :key="index" 
                            v-bind:id="item.id" 
                            v-bind:amountToUnlock="item.amountToUnlock"
                            v-bind:imgSrc="item.imgSrc">
                </xo-system>
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import xoSystem from '@/components/SonarSystem.vue'

    class FirstOfficerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'First Officer control panel',
                systems: [
                    { 
                        id: "Mines",
                        amountToUnlock: 3,
                        imgSrc: "/../assets/systems/mines-system.jpg"
                    },
                    { 
                        id: "Drones",
                        amountToUnlock: 4,
                        imgSrc: "@/assets/systems/drones-system.jpg"
                    },
                    { 
                        id: "Silence",
                        amountToUnlock: 6,
                        imgSrc: "@/assets/systems/mines-system.jpg"
                    },
                    { 
                        id: "Torpedo",
                        amountToUnlock: 3,
                        imgSrc: "@/assets/systems/torpedos-system.jpg"
                    },
                    { 
                        id: "Sonar",
                        amountToUnlock: 3,
                        imgSrc: "@/assets/systems/mines-system.jpg"
                    },
                    { 
                        id: "Scenario",
                        amountToUnlock: 6,
                        imgSrc: "@/assets/systems/mines-system.jpg"
                    }
                ]
            }
        }
    }

    export default new FirstOfficerController('lsXO', { xoSystem });

</script>
<style scoped>
/* Local styles for this template */
    .about-container {
        display: inline-block;
        width: 100%;
    }

    .about {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .title {
        text-shadow: 2px 2px #777;
    }
        
    .batch-item {
        grid-area: batch;
    }

    .submarine-stats-item {
        grid-area: stats;
    }

    .grid-container {
        display: grid;

        grid-template-areas: 
        'batch stats stats';
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
    }
    .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
</style>
