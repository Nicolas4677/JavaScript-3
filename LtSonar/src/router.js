/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import About from '@/routes/About.vue'
import lsNavigator from '@/routes/Navigator.vue'
import lsEngineer from '@/routes/Engineer.vue'
import lsCaptain from '@/routes/Captain.vue'
import lsXO from '@/routes/FirstOfficer.vue'

export default new Router({
    routes: [
        { path:"/",             name:"Lobby",        component: About },
        { path:"/navigator",    name:"Navigator",    component: lsNavigator, props: { user: 'Nicolas' } },
        { path:"/captain",      name:"Captain",      component: lsCaptain, props: { user: 'Alex' } },
        { path:"/firstofficer", name:"FirstOfficer", component: lsXO, props: { user: 'lmao' } },
        { path:"/engineer",     name:"Engineer",     component: lsEngineer },
        { path:"/home",         name:"Home",         component: Home, props: { name: "LtSonar"} },
    ]
});