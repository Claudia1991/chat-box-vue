export default{
    getData(){
        return [
            {
                "id" : 1,
                "question" : "Pregunta uno Pregunta uno Pregunta uno Pregunta uno Pregunta uno",
                "answer" : "Respuesta uno"
            },
            {
                "id" : 2,
                "question" : "Pregunta uno Pregunta uno Pregunta uno Pregunta uno Pregunta uno",
                "answer" : "Respuesta dos"
            },
            {
                "id" : 3,
                "question" : "Pregunta uno Pregunta uno Pregunta uno Pregunta uno Pregunta uno",
                "answer" : "Respuesta tres"
            },
            {
                "id" : 4,
                "question" : "Pregunta uno Pregunta uno Pregunta uno Pregunta uno Pregunta uno",
                "answer" : "Respuesta cuatro"
            },
            {
                "id" : 5,
                "question" : "Pregunta uno Pregunta uno Pregunta uno Pregunta uno Pregunta uno",
                "answer" : "Respuesta cinco"
            },
            {
                "id" : 6,
                "question" : "Pregunta uno Pregunta uno Pregunta uno Pregunta uno Pregunta uno",
                "answer" : "Respuesta seis"
            }
        ];
    },
    getMessageByIdAndType(id, type){
        var message;
        var item =  this.getData().filter(function(item){
            return item.id === id;
        });
        message = type == 'ANSWER' ? item.answer : item.question;
        return message;
    },
    getDataRandom(){
        var dataArray = [];
        while(dataArray.length < 3){
            var id = this.getIdRandom();
            console.log("Id",id);
            if(dataArray.find(e => e.id === id) === undefined){
                dataArray.push(this.getData().filter(function(item){
                    return item.id === id;
                })[0]);
            }
        }
        return dataArray;
    },
    getIdRandom(){
        return Math.floor(Math.random() * (this.getData().length + 1));
    }
}