<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="navigator-container">
        <div class="control-panel">
            <h1 class="title">{{ name }}</h1>
            <div class="controls-content">
                <div class="batch-container">
                    <name-batch class="batch-item"></name-batch>
                </div>
                <ls-map></ls-map>
            </div>
            <ls-chat v-bind:user="user" team="Team A"></ls-chat>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import lsChat from '@/components/Chat.vue';
    import lsMap from '@/components/Map.vue';
    import nameBatch from '@/components/NameBatch.vue'

    class NavigatorController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Navigator control panel',
            }

            this.props = {
                user: String
            }
        }
    }

    export default new NavigatorController('lsNavigator', { lsChat, lsMap, nameBatch });

</script>
<style scoped>
/* Local styles for this template */
    .control-panel {
        width: 100%;
    }

    .controls-content {
        display: flex;
        flex-direction: row-reverse;
    }

    .title {
        text-shadow: 2px 2px #777;
    }
</style>
