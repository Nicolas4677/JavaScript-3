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
            <div v-for="(data, index) in sectionData.topButtons" :key="index" class="control-button-special" v-bind:style="data"></div>
            <!-- <div class="control-button-special" style="background: green; border-color: #FFFF7D;"></div>
            <div class="control-button-special" style="background: yellow; border-color: #FFFF7D;"></div> -->
        </div>
        <hr>
        <div class="control-line">
            <div v-for="(data, index) in sectionData.bottomButtons" :key="index" class="control-button" v-bind:style="data"></div>
            <!-- <div class="control-button" style="background: blue;"></div>
            <div class="control-button" style="background: blue;"></div> -->
        </div>

    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class EngineerControlSectionController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Hello world"
            }
            this.props = { // props are passed in when using this component
                title: String,
                sectionData: Object
            }
        }

        doIt( event ) {
            // A method that does something to the props or viewModel, or global state
        }
    }

    export default new EngineerControlSectionController('lsEngineerControlSection');

</script>
<style scoped>

    .controls-section {
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
    }

</style>