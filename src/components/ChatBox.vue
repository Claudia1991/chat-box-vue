<template>
    <div id="chat-box">
        <div v-for="bubble in bubblesArray" :key="bubble.id">
            <answer-bubble v-if="bubble.isAnswer" :answer="bubble.message"></answer-bubble>
            <question-bubble v-if="bubble.isQuestion" :question="bubble.message"></question-bubble>
        </div>
    </div>
</template>

<script>
import AnswerBubble from './AnswerBubble.vue';
import QuestionBubble from './QuestionBubble.vue';
import DataService from '../assets/data/DataService.js'

export default {
    name: "ChatBox",
    props: {
        bubblesArray:{
            type: Array,
            default(){
                return []
            }
        }
    },
    components:{
        AnswerBubble,
        QuestionBubble
    },
    methods:{
        getQuestionById(id){
            return DataService.getMessageByIdAndType(id, 'QUESTION');
        },
        getAnswerById(id){
            return DataService.getMessageByIdAndType(id, 'ANSWER');
        },
        createBubbleObjectByType(){
            
        }
    },
    created: function(){
        this.bubblesArray = [{"id":0, "message": "Hola, como estas? hazme una pregunta!!", "isAnswer": true, "isQuestion": false}];
    },
    watch: {
        bubblesArray(){

        }
    }
    
}
</script>

<style scoped>
    #chat-box{
        background-color: #dddddd;
        border-radius: 1em;
        margin-left: auto;
        margin-right: auto;
        margin: 10px;
        overflow: auto;
        max-height: 75%;
        height: 100%;
    }
</style>