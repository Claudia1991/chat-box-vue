<template>
    <div id="chat-box" ref="chat">
        <div v-for="(bubble, index) in bubblesArray" :key="index">
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
        bubblesArray: {
            type: Array,
            default(){
                return []
            }
        },
        selectedLanguage: null
    },
    components: {
        AnswerBubble,
        QuestionBubble
    },
    methods: {
        updateBubblesArray(id) {
            let newsMessages = DataService.messagesFactoryByIdAndLanguage(id, this.selectedLanguage);
            newsMessages.forEach(e => {
                this.bubblesArray.push(e);
            });
        },
        scrollToEnd: function () {
            this.$nextTick(function () {
                let element = this.$refs.chat;
                element.scrollTop = element.scrollHeight + 120;
            })
        },
        getFirstAnswerByLanguage: function(){
            if (this.selectedLanguage) {
                this.bubblesArray.push(DataService.getFirstAnswerByLanguage(this.selectedLanguage));
            }
        }
    },
    created: function () {
        if (this.selectedLanguage) {
            this.bubblesArray.push(DataService.getFirstAnswerByLanguage(this.selectedLanguage));
        }
    },
    watch: {
        '$store.state.idData'(newValue) {
            this.updateBubblesArray(newValue);
        },
        bubblesArray() {
            this.scrollToEnd();
        },
        selectedLanguage() {
            this.getFirstAnswerByLanguage()
        }
    }
}
</script>

<style scoped>
#chat-box {
    background-color: #dddddd;
    border-radius: 1em;
    margin-left: auto;
    margin-right: auto;
    margin: 10px;
    overflow: auto;
    max-height: 75%;
    height: 100%;
}

div div::-webkit-scrollbar {
    width: 16px;
}

div div::-webkit-scrollbar-thumb {
    background-color: #393e46;
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;
}
</style>