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
                "answer" : "Desarrollo en .Net lo que es back end, tengo experiencia tanto en Net Core y Framework; despúes un poco Javascript con los frameworks Vue Js y Angular Js. Los infaltables Html y CSS. Y no olvidemos a Sql Server."
            },
            {
                "id" : 3,
                "question" : "¿Con que tecnologias esta hecho esta app?",
                "answer" : "Con Vue Js. Esta deployada con GitHub Pages."
            },
            {
                "id" : 4,
                "question" : "¿Cuales son tus hobbies?",
                "answer" : "Uff, me gusta tomar cervezas, andar en bici y ver fútbol. :P"
            },
            {
                "id" : 5,
                "question" : "¿Cómo te contacto?",
                "answer" : "Pues, te dejo el link  de mi perfil en LinkedIn y podemos continuar charlando! Y siente libre de hacerme sugerencias con respecto a esta forma de presentación. 'linkedin.com/in/claudia-jara-2022' "
            },
            {
                "id" : 6,
                "question" : "¿Que tal está tu inglés?",
                "answer" : "Pues, en el escrito me considero intermedio y en el oral aún me falta práctica! "
            },
            {
                "id" : 7,
                "question" : "Muchas gracias Clau !",
                "answer" : "Muchas gracias a vos por tomarte el tiempo de probar esta nueva forma de charlar! :D <3"
            },
            {
                "id" : 8,
                "question" : "Cuentame algo sobre ti",
                "answer" : "Mi nombre es Claudia, empecé a desarrollar desde el 2018. Me gusta el back end y bases de datos pero me adapto bien en cuanto a desarrollo front end."
            },
            {
                "id" : 9,
                "question" : "¿Cual consideras tus puntos débiles?",
                "answer" : "Creo que pierdo la paciencia rápido! xD."
            },
            {
                "id" : 10,
                "question" : "¿Cual consideras tus punto fuerte?",
                "answer" : "Que no dejo de intertar las cosas, hasta que salgan!."
            }
        ];
    },
    messagesFactoryById(id){
        var messagesArray = [];
        var selectedItem =  this.getData().filter(function(item){
            return item.id === id;
        })[0];
        messagesArray.push({"message": selectedItem.question, "isAnswer": false, "isQuestion": true});
        messagesArray.push({"message": selectedItem.answer, "isAnswer": true, "isQuestion": false});
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
        return {"message": "Hola, ¿cómo estás? Hazme una pregunta para comenzar!", "isAnswer": true, "isQuestion": false};
    }
}