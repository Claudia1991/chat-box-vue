<template>
  <div id="app">
    <information-bubble></information-bubble>
    <div class="full-container" >
      <chat-box></chat-box>
      <questions-list></questions-list>
    </div>
  </div>
</template>

<script>
import ChatBox from './components/ChatBox.vue';
import InformationBubble from './components/InformationBubble.vue';
import QuestionsList from './components/QuestionsList.vue';

export default {
  name: 'App',
  components: {
    ChatBox,
    QuestionsList,
    InformationBubble
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
  max-width: 25%;
  width: 100%;
  max-height: 50%;
  height: 550px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
</style>
