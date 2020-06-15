//Copyright (C) 2020, Nicolas Morales Escobar. All rights reserved.

'use strict'

import Comment from '@/model/Comment.js'

export default class Chat {

    constructor() {

        this.comments = [];
    }

    addComment ( author, comment ) {
        
        this.comments.push( new Comment( author, comment ) );
    }

    //serialize () {}

    //deserialize () {}
}