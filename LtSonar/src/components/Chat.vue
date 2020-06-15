<!--
<ls-chat user="Username" team="teamName"/>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">
        <div class="chat panel-bottom">
            <div class="messages">
                {{ theStream }}
            </div>
            <div class="clear"></div>
            <input type="text" name="entry" class="entry" v-model="newMsg">
            <button v-on:click="send">Send</button>
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
                theStream: "",
                newMsg: "",
            }
            this.props = { // props are passed in when using this component
                user: String,
                team: String,
            }

            this.injectActions( ['addComment'] );
            this.injectGetters( ['comments'] );
        }

        send() {
            this.theStream += this.newMsg;

            this.addComment( this.props.user, this.newMsg );

            this.newMsg = "";
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