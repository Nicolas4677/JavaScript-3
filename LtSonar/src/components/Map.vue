<!--
<some-tag-name title="My Map">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <div class="background">
            <!-- Divs that will act as map sections watermark -->
        </div>
        <table>
            <tr>
                <th></th>
                <th v-for="index in 15" :key="index">
                    {{ index }}
                </th>
            </tr>
            <tr v-for="index in 15" :key="index">
                <th>{{ String.fromCharCode(index + 64) }}</th>
                <td v-for="index in 15" :key="index"></td>
            </tr>
        </table>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class MapController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.props = {
                size: Number
            }
        }
    }

    export default new MapController('lsMap');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .component-style {
        display: flex;
        height: 50vh;
        width: 100%;
    }

    table {
        table-layout: fixed;
        border-collapse: collapse;
    }

    td {
        width: 30px;
        height: 30px;
        border: 1px solid black;
    }

    .background {
        position: absolute;
    }

</style>