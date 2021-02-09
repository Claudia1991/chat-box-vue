<template>
    <div id="question" class="question">
        <img src="../assets/default-avatar.png" class="img-right">
        <span>{{question}}</span>
        <span class="time-right">{{date}}</span>
    </div>

</template>

<script>
export default {
    name:"Question",
    props:{
        question : {
            type: String,
            default: ''
        },
        date : {
            type: Date,
            default: null
        },
    },
    created: function (){
        this.date = new Date().toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

}
</script>

<style scoped>
    .time-right {
        float: right;
        color: #aaa;
    }

    #question img.img-right {
        float: right;
        max-width: 60px;
        width: 100%;
        margin-left: 20px;
        border-radius: 50%;
    }

    .question {
        border: 2px solid #dedede;
        border-color: rgb(40, 76, 122);
        border-radius: 0.5em;
        background-color: #23689b;
        padding: 10px;
        margin: 10px;
        height: auto;
    }

        .question::after {
  content: "";
  clear: both;
  display: table;
}
</style>