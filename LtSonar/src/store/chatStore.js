//Copyright (C) 2020, Nicolas Morales Escobar. All rights reserved.

import Vue from 'vue'
import Vuex from 'vuex'

import Chat from '@/model/Chat.js'

export default {
    
    state: {
        chat: new Chat(),
    },

    actions: {

        addComment({ commit }, author, message ) {

            commit( 'ADD_COMMENT', { author: author, message: message } );
        },
    },

    mutations: {
        
        ADD_COMMENT: ( state, payload ) => state.chat.addComment( payload.author, payload.message ),
    },

    getters: {

        comments: state => state.chat.comments,
    },
}
