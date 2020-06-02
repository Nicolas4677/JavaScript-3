<template>
    <section class="dimensions container">
        <div class="dimensions" style="display: flex; flex-direction: column; justify-content: center;">
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <form style="display: flex; flex-direction: column">
                        
                        <label for="team-name">Team Name</label>
                        <input type="text" id="team-name" name="teamname" placeholder="Your team name.."><br>      
                        
                        <label for="member-name">Member Name</label>               
                        <input type="text" id="member-name" name="membername" placeholder="Your name..">
                    </form>
                </div>
            </div>
    </section>
</template>

<script>

    import Controller from '@/../lib/controller'

    class BatchController extends Controller
    {
        constructor( name, subcomponents = [] )
        {
            super(name, subcomponents);

        }
    }

    export default new BatchController("batchController");
</script>

<style scoped>

    .dimensions {
        width: 100%;
        height: 100%;
    }

    .container {
        background-color: rgb(17, 33, 80);
        padding: 10px;
    }
</style>