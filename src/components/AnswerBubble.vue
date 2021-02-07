<template>
    <div id="answer" class="answer">
        <img src="../assets/me-avatar.png" >
        <span>{{answer}}</span>
        <span class="time-left">{{date}}</span>
    </div>

</template>

<script>
export default {
    name:"Answer",
    props:{
        answer : {
            type: String,
            default: ''
        },
        date : {
            type: Date,
            default: new Date()
        },
    },
    created: function(){
        this.date = new Date();
    }
}
</script>

<style scoped>
    .time-left {
        float: left;
        color: #999;
    }

    #answer img {
        float: left;
        max-width: 60px;
        width: 100%;
        margin-right: 20px;
        border-radius: 50%;
    }

    .answer {
        border: 2px solid #dedede;
        border-color: rgb(40, 76, 122);
        border-radius: 5px;
        background-color: #487e95;
        padding: 10px;
        margin: 10px 0;
    }
</style>