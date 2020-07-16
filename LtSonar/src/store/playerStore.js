/*
VUEX Player Data Store.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use( Vuex, Axios)

const baseURL = `http://localhost:3000`;
const Remote = Axios.create( { baseURL: baseURL });

// import User from '@/model/user' // import POJS model objects
import Player from '@/model/Player';


export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        player: new Player()
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {
        setTeam({ commit }, params) {

            Remote.post('/api/player/login/', { name: 'Test' })
            .then( response => response.data)
            .then( data => (data.error ? error => { throw(error)} : data.payload))
            .then(payload => {

                commit('SET_TEAM', payload);
                console.log(payload);
            })
            .catch( error => {
                console.log(error);
            })
        },
        setRole({ commit }, params) {
            commit('SET_ROLE', params);
        }
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SET_TEAM: (state, { team='' }) =>  state.player.setTeam = team,
        SET_ROLE: (state, { role='' }) =>  state.player.setRole = role
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        playerId: state => state.player
    },
}
