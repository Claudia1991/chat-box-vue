<template>
    <div id="questions-list">
        <div v-for="(question, index) in questionsArray" 
            :key="question.id" 
            v-on:click="selectQuestion($event, question)"
            >{{index + 1}} - {{question.question}}</div>
    </div>
</template>

<script>

import DataService from '../assets/data/DataService.js'

export default {
    name: "QuestionList",
    data(){
        return{
            questionsArray: [],
            idQuestionSelected:0
        }
    },
    props: {
    },
    created: function(){
        this.chargeQuestions();
    },
    methods:{
        selectQuestion: function(e, element){
            this.idQuestionSelected = element.id;
            this.$store.commit('updateData', this.idQuestionSelected);
            this.chargeQuestions();
        },
        chargeQuestions: function(){
            this.questionsArray = DataService.getRandomQuestions();
        }
    }
}
</script>

<style scoped>
    div div {
        border: 1px solid;
        border-color:#1c2b2d;
        border-radius: 0.3em;
        margin: 10px;
        background-color: #274f63 ;
        transition: step-start;
    }
    #questions-list{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: #d2d3c9;
        transition: .8s;
        background-color: #c6cec5;
        border-radius: 1em;
        margin-left: auto;
        margin-right: auto;
        max-height: 18%;
        height: 100%;
        margin: 10px;
        overflow-y: auto;
    }
</style>