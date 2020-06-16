/*
VUEX Data Store.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'

//const baseURL = `${LOCATION.PROTOCOL}//${LOCATION.HOSTNAME}:${LOCATION.PORT}`;
//const Remote = Axios.create( { baseURL: baseURL });

import EngineerControls from '../model/EngineerControls.js';
import Map from '../model/Map.js';
import FirstOfficerControls from '../model/FirstOfficerControls.js';

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        engineer: new EngineerControls(),
        map: new Map(),
        firstOfficer: new FirstOfficerControls()
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {
        clickEngineerButton({ commit }, params ) {
            commit('SET_ENGINEER_BUTTON', params);
        },
        clickFirstOfficerControl({ commit }, params ) {
            commit('SET_FIRST_OFFICER_STATUS', params);
        }
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SET_ENGINEER_BUTTON: ( state, params ) => {
            const { orientation, index } = params;

            state.engineer[orientation] = [ ...state.engineer[orientation], index ]
        },
        SET_FIRST_OFFICER_STATUS: ( state, params ) => {
            const { id } = params;

            ++state.firstOfficer[id];
        }
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        engineerControl: state => state.engineer,
        firstOfficerControl: state => state.firstOfficer
    }
}
