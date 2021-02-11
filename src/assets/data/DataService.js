export default{
    getData(){
        return [
            {
                "id" : 1,
                "question" : "¿Cuantos años de experiencia tienes en desarrollo?",
                "answer" : "Empecé a desarrollar en el 2018."
            },
            {
                "id" : 2,
                "question" : "¿En que tecnologias desarrollas?",
                "answer" : "Me gusta mucho .Net lo que es back end, tengo experiencia tanto en Net Core y Framework; despúes un poco Javascript con los frameworks Vue Js y Angular Js. Los infaltables Html y CSS."
            },
            {
                "id" : 3,
                "question" : "¿Con que tecnologias esta hecho esta app?",
                "answer" : "Con Vue Js. Esta deployada con GitHub Pages."
            },
            {
                "id" : 4,
                "question" : "¿Cuales son tus hobbies?",
                "answer" : "Uff, me gusta tomar cervezas, andar en bici y ver fútbol."
            },
            {
                "id" : 5,
                "question" : "¿Como te contacto?",
                "answer" : "Pues, te dejo el link  de mi perfil en LinkedIn y podemos continuar charlando! linkedin.com/in/claudia-jara-2022"
            }
        ];
    },
    messagesFactoryById(id){
        var messagesArray = [];
        var selectedItem =  this.getData().filter(function(item){
            return item.id === id;
        })[0];
        messagesArray.push({"id":selectedItem.id, "message": selectedItem.question, "isAnswer": false, "isQuestion": true});
        messagesArray.push({"id":selectedItem.id, "message": selectedItem.answer, "isAnswer": true, "isQuestion": false});
        return messagesArray;
    },
    getRandomQuestions(){
        var dataArray = [];
        while(dataArray.length < 3){
            var id = this.getIdRandom();
            if(dataArray.find(e => e.id === id) === undefined){
                dataArray.push(this.getData().filter(function(item){
                    return item.id === id;
                })[0]);
            }
        }
        return dataArray;
    },
    getIdRandom(){
        return Math.floor(Math.random() * (this.getData().length) + 1);
    },
    getFirstAnswer(){
        return {"id":0, "message": "Hola, ¿cómo estás? Hazme una pregunta para comenzar!", "isAnswer": true, "isQuestion": false};
    }
}