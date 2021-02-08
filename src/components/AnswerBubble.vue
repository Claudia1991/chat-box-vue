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
        this.date = new Date().toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
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
        max-height: 60px;
        height: 100%;
        margin-right: 20px;
        border-radius: 50%;
    }

    .answer {
        border: 2px solid #dedede;
        border-color: rgb(40, 76, 122);
        border-radius: 0.5em;
        background-color: #487e95;
        padding: 10px;
        margin: 10px;
        height: auto;
    }

    .answer::after {
  content: "";
  clear: both;
  display: table;
}
</style>