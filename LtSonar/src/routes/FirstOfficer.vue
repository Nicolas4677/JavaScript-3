<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="firstofficer-container">
        <div class="about">
            <h1 class="title">{{ name }}</h1>
            <div class="grid-container">
                <name-batch class="batch-item"></name-batch>
                <health-system class="submarine-stats-item"
                            :id="submarineStats.id"
                            :imgSrc="submarineStats.imgSrc"
                            ></health-system>
                <xo-system v-for="(item, index) in systems" :key="index" 
                            :id="item.id" 
                            :amountToUnlock="item.amountToUnlock"
                            :imgSrc="item.imgSrc"
                            :type="item.type">
                </xo-system>
            </div>

            <ls-chat v-bind:user="user" team="Team A"></ls-chat>

        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import xoSystem from '@/components/SonarSystem.vue'
    import healthSystem from '@/components/SubmarineHealth.vue'
    import nameBatch from '@/components/NameBatch.vue'
    import lsChat from '@/components/Chat.vue'

    //Images
    import minesSystemImg from "@/assets/systems/mines-system.jpg"
    import dronesSystemImg from "@/assets/systems/drones-system.jpg"
    import torpedosSystemImg from "@/assets/systems/torpedos-system.jpg"
    import sonarSystemImg from "@/assets/systems/sonar-system.jpg"
    import submarineSystemImg from "@/assets/systems/submarine-system.jpg"

    class FirstOfficerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'First Officer control panel',
                submarineStats: {
                    id: "Health",
                    imgSrc: submarineSystemImg,
                },
                systems: [
                    { 
                        id: "Mines",
                        amountToUnlock: 3,
                        imgSrc: minesSystemImg, // OR Require("@/assets/systems/mines-system.jpg")
                        type: 'ATTACK'
                    },
                    { 
                        id: "Drones",
                        amountToUnlock: 4,
                        imgSrc: dronesSystemImg,
                        type: 'SONAR'
                    },
                    { 
                        id: "Silence",
                        amountToUnlock: 6,
                        imgSrc: submarineSystemImg,
                        type: 'SUBMARINE'
                    },
                    { 
                        id: "Torpedo",
                        amountToUnlock: 3,
                        imgSrc: torpedosSystemImg,
                        type: 'ATTACK'
                    },
                    { 
                        id: "Sonar",
                        amountToUnlock: 3,
                        imgSrc: sonarSystemImg,
                        type: 'SONAR'
                    },
                    { 
                        id: "Scenario",
                        amountToUnlock: 6,
                        imgSrc: submarineSystemImg,
                        type: 'SUBMARINE'
                    }
                ]
            }

            this.props = {

                user: String
            }
        }
    }

    export default new FirstOfficerController('lsXO', { xoSystem, healthSystem, nameBatch, lsChat });

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
        background-color: rgb(14, 74, 122);
        padding: 10px;
    }
    .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
</style>
