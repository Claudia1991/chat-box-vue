<template>
    <div id="chat-box" ref="chat">
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
        },
        scrollToEnd: function () {
            this.$nextTick(function() {
                var element = this.$refs.chat;
                element.scrollTop = element.scrollHeight + 120;
            })}
    },
    created: function(){
        this.bubblesArray.push(DataService.getFirstAnswer());
    },
    watch: {
        '$store.state.idData'(newValue){
            this.updateBubblesArray(newValue);
        },
        bubblesArray(){
            this.scrollToEnd();
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

    div div::-webkit-scrollbar{
        width: 16px;
    }
    
    div div::-webkit-scrollbar-thumb {
        background-color: #393e46;
        border: 4px solid transparent;
        border-radius: 8px;
        background-clip: padding-box;  
    }
</style>