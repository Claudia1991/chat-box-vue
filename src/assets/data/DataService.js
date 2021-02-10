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
                "question" : "Pregunta dos Pregunta dos Pregunta dos Pregunta dos Pregunta dos",
                "answer" : "Respuesta dos"
            },
            {
                "id" : 3,
                "question" : "Pregunta tres Pregunta tres Pregunta tres Pregunta tres Pregunta tres",
                "answer" : "Respuesta tres"
            },
            {
                "id" : 4,
                "question" : "Pregunta cuatro Pregunta cuatro Pregunta cuatro Pregunta cuatro Pregunta cuatro",
                "answer" : "Respuesta cuatro"
            },
            {
                "id" : 5,
                "question" : "Pregunta cinco Pregunta cinco Pregunta cinco Pregunta cinco Pregunta cinco",
                "answer" : "Respuesta cinco"
            },
            {
                "id" : 6,
                "question" : "Pregunta seis Pregunta seis Pregunta seis Pregunta seis Pregunta seis",
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
        while(dataArray.length < 2){
            var id = this.getIdRandom();
            console.log("Id random:",id);
            if(dataArray.find(e => e.id === id) === undefined){
                dataArray.push(this.getData().filter(function(item){
                    return item.id === id;
                })[0]);
                console.log("Data array",dataArray);
            }
        }
        return dataArray;
    },
    getIdRandom(){
        return Math.floor(Math.random() * (this.getData().length) + 1);
    }
}