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
                <th v-for="(row, index) in teamMap" :key="index">
                    {{ index + 1 }}
                </th>
            </tr>
            <tr v-for="(row, outerIndex) in teamMap" :key="outerIndex">
                <th>{{ String.fromCharCode(outerIndex + 65) }}</th>
                <td
                    v-for="(value, innerIndex) in row"
                    :key="`${value}-${innerIndex}`"
                    :class="value"
                    v-on:click="selectCell(outerIndex, innerIndex)"></td>
            </tr>
        </table>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class MapController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                teamMap: [
                    [ 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'  ],
                    [ 'water', 'water', 'ground', 'water', 'water', 'water', 'ground', 'water', 'water', 'water', 'water', 'water', 'ground', 'ground', 'water'  ],
                    [ 'water', 'water', 'ground', 'water', 'water', 'water', 'water', 'water', 'ground', 'water', 'water', 'water', 'ground', 'water', 'water'  ],
                    [ 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'ground', 'water', 'water', 'water', 'water', 'water', 'water'  ],
                    [ 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'  ],
                    [ 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'  ],
                    [ 'water', 'ground', 'water', 'ground', 'water', 'water', 'ground', 'water', 'ground', 'water', 'water', 'water', 'water', 'water', 'water'  ],
                    [ 'water', 'ground', 'water', 'ground', 'water', 'water', 'ground', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'  ],
                    [ 'water', 'water', 'water', 'ground', 'water', 'water', 'water', 'ground', 'water', 'water', 'water', 'ground', 'ground', 'ground', 'water'  ],
                    [ 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'  ],
                    [ 'water', 'water', 'water', 'ground', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'  ],
                    [ 'water', 'water', 'ground', 'water', 'water', 'water', 'water', 'ground', 'water', 'water', 'water', 'ground', 'water', 'water', 'water'  ],
                    [ 'ground', 'water', 'water', 'ground', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'ground', 'water', 'water'  ],
                    [ 'water', 'water', 'water', 'ground', 'water', 'water', 'ground', 'water', 'ground', 'water', 'water', 'water', 'water', 'ground', 'water'  ],
                    [ 'water', 'water', 'water', 'water', 'ground', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'  ]
                ]
            }
            this.props = {
                size: Number
            }

            this.injectActions([ 'setShip' ]);
            this.injectGetters([ 'shipIsplaced' ]);
        }

        selectCell(innerIndex, outerIndex) {
            const x = innerIndex;
            const y = outerIndex;

            if (!this.shipIsplaced) {
                this.teamMap[x].splice(y, 1, 'current');
                this.setShip({x, y});
            }
            console.log(x, y);
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

    .water {
        background-color: blue;
    }

    .ground {
        background-color: green;
    }

    .current {
        background-color: black;
    }

</style>