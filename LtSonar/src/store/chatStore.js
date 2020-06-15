//Copyright (C) 2020, Nicolas Morales Escobar. All rights reserved.

import Vue from 'vue'
import Vuex from 'vuex'

import Chat from '@/model/Chat.js'

export default {
    
    state: {
        chat: new Chat(),
    },

    actions: {
        addComment({ commit }, params ) {
            commit( 'ADD_COMMENT', params );
        },
    },

    mutations: {
        ADD_COMMENT: (state, { user = '', team = '', currentMsg = '' }) => state.chat.addComment( user, team, currentMsg ),
    },

    getters: {
        comments: state => state.chat.comments || [],
    },
}
