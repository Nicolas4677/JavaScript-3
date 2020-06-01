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
            const attackButtonColor = '#A60B20';
            const yellowButtonColor = '#F0E74D';
            const utiltyButtonColor = '#327136';
            const radioactiveButtonColor = '#251D7C';

            const primaryCircuitColor = '#FFFF7D';
            const secondaryCircuitColor = '#D45D26';
            const tertiaryCircuitColor = '#B3B3B3';

            this.vm = {
                name: 'Engineer control panel',
                firstSection: {
                    topButtons: [
                        {
                            background: attackButtonColor,
                            "border-color": primaryCircuitColor
                        },
                        {
                            background: yellowButtonColor,
                            "border-color": primaryCircuitColor
                        },
                        {
                            background: utiltyButtonColor,
                            "border-color": primaryCircuitColor
                        },
                    ],
                    bottomButtons: [
                        {
                            background: utiltyButtonColor
                        },
                        {
                            background: radioactiveButtonColor
                        },
                        {
                            background: radioactiveButtonColor
                        }
                    ]
                },
                secondSection: {
                    topButtons: [
                        {
                            background: yellowButtonColor,
                            "border-color": secondaryCircuitColor
                        },
                        {
                            background: attackButtonColor,
                            "border-color": secondaryCircuitColor
                        },
                        {
                            background: yellowButtonColor,
                            "border-color": secondaryCircuitColor
                        },
                    ],
                    bottomButtons: [
                        {
                            background: utiltyButtonColor
                        },
                        {
                            background: attackButtonColor
                        },
                        {
                            background: radioactiveButtonColor
                        }
                    ]
                },
                thirdSection: {
                    topButtons: [
                        {
                            background: utiltyButtonColor,
                            "border-color": tertiaryCircuitColor
                        },
                        {
                            background: yellowButtonColor,
                            "border-color": tertiaryCircuitColor
                        },
                        {
                            background: attackButtonColor,
                            "border-color": tertiaryCircuitColor
                        },
                    ],
                    bottomButtons: [
                        {
                            background: attackButtonColor
                        },
                        {
                            background: radioactiveButtonColor
                        },
                        {
                            background: yellowButtonColor
                        }
                    ]
                },
                fourthSection: {
                    topButtons: [
                        {
                            background: utiltyButtonColor,
                            "border-color": secondaryCircuitColor
                        },
                        {
                            background: yellowButtonColor,
                            "border-color": tertiaryCircuitColor
                        },
                        {
                            background: attackButtonColor,
                            "border-color": primaryCircuitColor
                        },
                    ],
                    bottomButtons: [
                        {
                            background: radioactiveButtonColor
                        },
                        {
                            background: utiltyButtonColor
                        },
                        {
                            background: radioactiveButtonColor
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
