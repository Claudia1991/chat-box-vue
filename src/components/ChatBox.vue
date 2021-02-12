<template>
    <div id="chat-box">
        <div v-for="(bubble,index) in bubblesArray" :key="index">
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
        updateBubblesArray(id){
            var newsMessages = DataService.messagesFactoryById(id);
            newsMessages.forEach(e => {
                this.bubblesArray.push(e);
            });
        }
    },
    created: function(){
        this.bubblesArray.push(DataService.getFirstAnswer());
    },
    watch: {
        '$store.state.idData'(newValue){
            this.updateBubblesArray(newValue);
        },
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