<template>
  <div id="app">
    <!-- Aca deberia de estar el contorno del celular e ir cargando los componentes aca
    el chat-box, la lista de preguntas y el boton
    dentro del chat box si poner los bubbles -->
    <div class="full-container" >
      <chat-box></chat-box>
      <questions-list></questions-list>
    </div>
  </div>
</template>

<script>
import ChatBox from './components/ChatBox.vue';
import QuestionsList from './components/QuestionsList.vue';

export default {
  name: 'App',
  components: {
    ChatBox,
    QuestionsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-content: center;
  color: #33393f;
  margin-top: 60px;
}
.full-container{
  border: 2em;
  border-color: black;
  border-radius: 5%;
  background-color:  #222831;
  width: 35%;
  height: 550px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
</style>
