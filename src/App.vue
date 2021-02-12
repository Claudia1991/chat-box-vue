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
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .full-container{
      max-width: 80%;
      width: 100%;
      max-height: 75%;
      height: 500px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
        .full-container{
      max-width: 80%;
      width: 100%;
      max-height: 75%;
      height: 500px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
        .full-container{
      max-width: 30%;
      width: 100%;
      max-height: 75%;
      height: 550px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
        .full-container{
      max-width: 30%;
      width: 100%;
      max-height: 75%;
      height: 550px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
        .full-container{
      max-width: 30%;
      width: 100%;
      max-height: 75%;
      height: 550px;
    }
  }
</style>
