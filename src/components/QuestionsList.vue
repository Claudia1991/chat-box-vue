<template>
    <div id="questions-list">
        <ul>
            <li v-for="(question, index) in questionArray" 
            :key="question.id" 
            :class="isSelected ? no-selected : selected"
            v-on:click="selectQuestion()"
            >{{index}} - {{question.question}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "QuestionList",
    props: {
        questionsArray:{
            type: Array,
            default(){
                return []
            }
        },
        isSelected: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        selectQuestion: function(){
            this.isSelected = !this.isSelected;
        }
    },
    created: function(){
        this.questionsArray = [
            {
                "id":1,
                "question": "Pregunta uno"
            },
            {
                "id":2,
                "question": "Pregunta dos"
            },
            {
                "id":3,
                "question": "Pregunta tres"
            }
        ]
    }
}
</script>

<style scoped>
/* color de la lista de preguntas: 1a508b, 0d335d */
    .selected{
        background-color: cornflowerblue;
    }
    .no-selected{
        background-color: darkcyan;
    }
    div ul li{
        transition: .8s;
    }
</style>