<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="engineer-container">
        <div class="control-panel">
            <h1 class="title">{{ name }}</h1>
            <div class="batch-container">
                <name-batch class="batch-item"></name-batch>
            </div>
            <div class="controls-wrapper">
                <ls-engineer-control-section v-for="(sectionData, index) in sectionStyleData" :key="index" :sectionData="sectionData" :title="sectionData.title"/>
            </div>
        </div>
        <ul class="legend">
            <li><span class=""></span> Super Awesome</li>
            <li><span class="awesome"></span> Awesome</li>
            <li><span class="kindaawesome"></span> Kinda Awesome</li>
            <li><span class="notawesome"></span> Not Awesome</li>
        </ul>

    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import lsEngineerControlSection from '@/components/EngineerControlSection.vue';

    import nameBatch from '@/components/NameBatch.vue'

    class EngineerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );

            const missileIcon = require('@/assets/missile.svg');
            const submarineIcon = require('@/assets/submarine.svg');
            const nuclearIcon = require('@/assets/nuclear.svg');
            const sonarIcon = require('@/assets/sonar.svg');

            const attackButton = {
                background: '#A60B20',
                'background-image': `url(${missileIcon})`,
                'background-repeat': 'no-repeat, repeat',
                'background-size': 'cover'
            };
            const submarineButton = {
                background: '#F0E74D',
                'background-image': `url(${submarineIcon})`,
                'background-repeat': 'no-repeat, repeat',
                'background-size': 'cover'
            };
            const utiltyButton = {
                background: '#327136',
                'background-image': `url(${sonarIcon})`,
                'background-repeat': 'no-repeat, repeat',
                'background-size': 'cover'
            };
            const radioactiveButton = {
                background: '#251D7C',
                'background-image': `url(${nuclearIcon})`,
                'background-repeat': 'no-repeat, repeat',
                'background-size': 'cover'
            };

            const primaryCircuitColor = '#FFFF7D';
            const secondaryCircuitColor = '#D45D26';
            const tertiaryCircuitColor = '#B3B3B3';

            this.vm = {
                name: 'Engineer control panel',
                sectionStyleData: [
                    {
                        title: 'West',
                        topButtons: [
                            {
                                ...attackButton,
                                "border-color": primaryCircuitColor
                            },
                            {
                                ...submarineButton,
                                "border-color": primaryCircuitColor
                            },
                            {
                                ...utiltyButton,
                                "border-color": primaryCircuitColor
                            },
                        ],
                        bottomButtons: [ utiltyButton, radioactiveButton, radioactiveButton ]
                    },
                    {
                        title: 'North',
                        topButtons: [
                            {
                                ...submarineButton,
                                "border-color": secondaryCircuitColor
                            },
                            {
                                ...attackButton,
                                "border-color": secondaryCircuitColor
                            },
                            {
                                ...submarineButton,
                                "border-color": secondaryCircuitColor
                            },
                        ],
                        bottomButtons: [ utiltyButton, attackButton, radioactiveButton ]
                    },
                    {
                        title: 'South',
                        topButtons: [
                            {
                                ...utiltyButton,
                                "border-color": tertiaryCircuitColor
                            },
                            {
                                ...submarineButton,
                                "border-color": tertiaryCircuitColor
                            },
                            {
                                ...attackButton,
                                "border-color": tertiaryCircuitColor
                            },
                        ],
                        bottomButtons: [ attackButton, radioactiveButton, submarineButton ]
                    },
                    {
                        title: 'East',
                        topButtons: [
                            {
                                ...utiltyButton,
                                "border-color": secondaryCircuitColor
                            },
                            {
                                ...submarineButton,
                                "border-color": tertiaryCircuitColor
                            },
                            {
                                ...attackButton,
                                "border-color": primaryCircuitColor
                            },
                        ],
                        bottomButtons: [ radioactiveButton , utiltyButton , radioactiveButton ]
                    }
                ]
            }
        }
    }

    export default new EngineerController('lsEngineer', { lsEngineerControlSection, nameBatch });

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
</style>
