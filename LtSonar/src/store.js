/*
VUEX Data Store.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use( Vuex );

// Modules
import ModelStore from '@/store/modelStore';
import PlayerStore from '@/store/playerStore';
import GameplayStore from '@/store/gameplayStore';

// Store with modules
const store = new Vuex.Store({
    modules: {
        PlayerStore,
        ModelStore,
        GameplayStore,
    }
});

//      OR

// Store with local definitions
//const store = new Vuex.Store({ state, mutations, actions, getters });

export default store;
