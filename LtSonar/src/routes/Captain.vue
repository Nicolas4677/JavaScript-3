<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.

Usage: <ls-captain user="Username"/>
-->
<template>

    <section class="captain-container">
        <div class="control-panel">
            <h1 class="title">{{ name }}</h1>
            <ls-map size=15></ls-map>
            <ls-chat v-bind:user="user" team="Team A"></ls-chat>
            <div class="status panel-status">Sub is not sunk</div>
            <div class="controls panel-control">Buttons here</div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import lsChat from '@/components/Chat.vue';
    import lsMap from '@/components/Map.vue';

    class CaptainController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Captain control panel',
            }
            this.props = {
                user: String
            }
        }
    }

    export default new CaptainController('lsCaptain', { lsChat, lsMap });

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
</style>
