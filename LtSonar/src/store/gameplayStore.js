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
        teamMap: new Map(),
        enemyMap: new Map(),
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
        },
        setShip({ commit }, params) {
            commit('SET_SHIP', params)
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
        },
        SET_SHIP: ( state, params ) => {
            const { x, y } = params;

            if (!state.teamMap.currentPlace) {
                state.teamMap.currentPlace = { x, y };
                return;
            }
            
            const deltaX = state.teamMap.currentPlace.x - x;
            const deltaY = state.teamMap.currentPlace.y - y;
            state.teamMap.currentPlace = { x, y };

            if (deltaX === 0 && deltaY === 1) {
                state.teamMap.currentOrientation = 'west';
            } else if (deltaX === 0 && deltaY === -1) {
                state.teamMap.currentOrientation = 'east';
            } else if (deltaX === 1 && deltaY === 0) {
                state.teamMap.currentOrientation = 'north';
            } else if (deltaX === -1 && deltaY === 0) {
                state.teamMap.currentOrientation = 'south';
            }
            console.log(state.teamMap.currentOrientation);
            
        }
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        // Engineer contols
        engineerControl: state => state.engineer,
        // First officer controls
        firstOfficerControl: state => state.firstOfficer,
        // Map
        teamMap: state => state.teamMap.mapRepresentation,
        shipIsplaced: state => state.teamMap.shipPlaced,
        currentShipOrientation: state => {
            console.log(state.teamMap.currentOrientation);

            return state.teamMap.currentOrientation
        },
        enemyShipCurrentOrientation: state => state.enemyMap.currentOrientation
    }
}
