<template>
    <div id="chat-box">
        <answer-bubble answer="Respuesta respuesta respuesta respuesta respuesta"></answer-bubble>
        <question-bubble question="Pregunta Pregunta Pregunta Pregunta Pregunta"></question-bubble>
        <answer-bubble answer="Respuesta respuesta respuesta respuesta respuesta"></answer-bubble>
        <question-bubble question="Pregunta Pregunta Pregunta Pregunta Pregunta"></question-bubble>
        <answer-bubble answer="Respuesta respuesta respuesta respuesta respuesta"></answer-bubble>
        <question-bubble question="Pregunta Pregunta Pregunta Pregunta Pregunta"></question-bubble>
    </div>
</template>

<script>
import AnswerBubble from './AnswerBubble.vue';
import QuestionBubble from './QuestionBubble.vue';

export default {
    name: "ChatBox",
    props: {
        bubble:{
            type: Object,
            default: null
        },
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

    },
    created: function(){}
    
}
</script>

<style scoped>
/* Color de fondo donde van a estar las burbujas: fff3e6, dddddd
Color del boton: 00af91, 007965, dddddd */

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