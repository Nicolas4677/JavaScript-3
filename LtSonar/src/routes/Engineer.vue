<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="engineer-container">
        <div class="control-panel">
            <h1 class="title">{{ name }}</h1>
            <div class="controls-wrapper">
                <ls-engineer-control-section v-bind:sectionData="firstSection" title="West"/>
                <ls-engineer-control-section v-bind:sectionData="secondSection" title="North"/>
                <ls-engineer-control-section v-bind:sectionData="thirdSection" title="South"/>
                <ls-engineer-control-section v-bind:sectionData="fourthSection" title="East"/>
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import lsEngineerControlSection from '@/components/EngineerControlSection.vue';

    class EngineerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Engineer control panel',
                firstSection: {
                    topButtons: [
                        {
                            background: 'red',
                            "border-color": 'FFFF7D'
                        },
                        {
                            background: 'yellow',
                            "border-color": 'FFFF7D'
                        },
                        {
                            background: 'green',
                            "border-color": 'FFFF7D'
                        },
                    ],
                    bottomButtons: [
                        {
                            background: 'green'
                        },
                        {
                            background: 'blue'
                        },
                        {
                            background: 'blue'
                        }
                    ]
                },
                secondSection: {
                    topButtons: [
                        {
                            background: 'yellow',
                            "border-color": 'FFD57D'
                        },
                        {
                            background: 'red',
                            "border-color": 'FFD57D'
                        },
                        {
                            background: 'yellow',
                            "border-color": 'FFD57D'
                        },
                    ],
                    bottomButtons: [
                        {
                            background: 'green'
                        },
                        {
                            background: 'red'
                        },
                        {
                            background: 'blue'
                        }
                    ]
                },
                thirdSection: {
                    topButtons: [
                        {
                            background: 'green',
                            "border-color": 'B3B3B3'
                        },
                        {
                            background: 'yellow',
                            "border-color": 'B3B3B3'
                        },
                        {
                            background: 'red',
                            "border-color": 'B3B3B3'
                        },
                    ],
                    bottomButtons: [
                        {
                            background: 'red'
                        },
                        {
                            background: 'blue'
                        },
                        {
                            background: 'yellow'
                        }
                    ]
                },
                fourthSection: {
                    topButtons: [
                        {
                            background: 'green',
                            "border-color": 'FFD57D'
                        },
                        {
                            background: 'yellow',
                            "border-color": 'B3B3B3'
                        },
                        {
                            background: 'red',
                            "border-color": 'FFFF7D'
                        },
                    ],
                    bottomButtons: [
                        {
                            background: 'blue'
                        },
                        {
                            background: 'green'
                        },
                        {
                            background: 'blue'
                        }
                    ]
                }
            }
        }
    }

    export default new EngineerController('lsEngineer', { lsEngineerControlSection });

</script>
<style scoped>
/* Local styles for this template */
    .control-container {
        display: inline-block;
        width: 100%;
    }

    .title {
        text-shadow: 2px 2px #777;
    }

    .controls-wrapper {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 80vw;
    }

    /*.controls-section {
        width: 23%;
        height: 50vh;
        padding: 20px;
        background-color: cadetblue;
    }

    .control-line {
        display: flex;
        margin-top: 10%;
        margin-bottom: 10%;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .control-button {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 2px solid black;
    }

    .control-button-special {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 5px solid black;
    } */
</style>
