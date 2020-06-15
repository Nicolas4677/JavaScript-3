<!--
<ls-chat user="Username" team="teamName"/>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">
        <div class="chat panel-bottom">
            <div class="messages">
                <span v-for="({ author, team, message }, index) in comments" :key="index">{{ `[${author}|${team}]: ${message}` }}<br></span>
            </div>
            <div class="clear"></div>
            <form class="sample-form" @submit.prevent="send(user, team, currentMsg)">
                    <label>New message:
                        <input type="text" name="entry" class="entry" v-model="currentMsg">
                    </label><br/>
                    <input value="Send" type="submit" />
            </form>
            <div class="title">From {{ user }} ({{ team }})</div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class ChatController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                currentMsg: '',
            }
            this.props = { // props are passed in when using this component
                user: String,
                team: String,
            }

            this.injectActions( ['addComment'] );
            this.injectGetters( ['comments'] );
        }

        send(user, team, currentMsg) {
            this.addComment({ user, team, currentMsg });
            this.currentMsg = '';
        }
    }

    export default new ChatController('lsChat');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .component-style {
        display: flex;
        height: 20vh;
        width: 100%;
    }

    .messages {
        min-width: 60vw;
        min-height: 10vh;
        border: 2px solid black;
        overflow-y: scroll;
    }

    .clear {
        float: left;
    }

</style>