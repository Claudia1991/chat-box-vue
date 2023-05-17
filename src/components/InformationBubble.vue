<template>
    <div id="InformationBuble">
        <button v-on:click="selectedLanguage('ENGLISH')">ENGLISH</button>
        <button v-on:click="selectedLanguage('SPANISH')">SPANISH</button>
    </div>
</template>

<script>
export default {
    name:"InformationBuble",
    methods: {
        selectedLanguage: function(language)  {
            this.$store.commit('updateSelectedLanguage', language);
        }
    },
}
</script>

<style scoped>
    #InformationBuble{
        border: 2px solid #07689f;
        background-color: #a2d5f2;
        color: #005691;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-evenly;
    }

    button{
        margin: 2px;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        #InformationBuble{
            max-width: 90%;
            width: 100%;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
         #InformationBuble{
            max-width: 90%;
            width: 100%;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
         #InformationBuble{
            max-width: 30%;
            width: 100%;
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
         #InformationBuble{
            max-width: 30%;
            width: 100%;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
         #InformationBuble{
            max-width: 30%;
            width: 100%;
        }
    }
</style>