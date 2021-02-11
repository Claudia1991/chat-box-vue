<template>
    <div id="InformationBuble">
        <span><center><b>{{information}}</b></center></span>
    </div>
</template>

<script>
export default {
    name:"InformationBuble",
    data(){
        return {
            information: 'Esta app aun esta en construcción! \n Estoy trabajando para tenerla al 100%. :D',
        }
    }
}
</script>

<style scoped>
    #InformationBuble{
        border: 2px solid #07689f;
        background-color: #a2d5f2;
        color: #005691;
        margin-left: auto;
        margin-right: auto;
        max-width: 50%;
        width: 100%;
    }
</style>