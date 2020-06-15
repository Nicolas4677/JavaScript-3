<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="controls-section">  <!-- Just one main element per template -->
        <h1>{{ title }}</h1>
        <div class="control-line">
            <div v-for="(data, index) in sectionData.topButtons" :key="index" class="control-button special" v-bind:style="data"></div>
        </div>
        <hr>
        <div class="control-line">
            <div v-for="(data, index) in sectionData.bottomButtons" :key="index" class="control-button" v-bind:style="data"></div>
        </div>

    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class EngineerControlSectionController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )

            this.props = {
                title: String,
                sectionData: Object
            }
        }
    }

    export default new EngineerControlSectionController('lsEngineerControlSection');

</script>
<style scoped>

    h1 {
        background-color: rgb(38, 80, 160);
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .controls-section {
        width: 23%;
        height: 50vh;
        padding: 20px;
        background-color: rgb(17, 33, 80);
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
        box-shadow: 0 9px #999;
        cursor: pointer;
    }

    .special {
        border: 10px solid black;
    }

    .control-button:active {
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }

</style>