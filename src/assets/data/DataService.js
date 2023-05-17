export default{
    getSpanishMessages(){
        return [
            {
                "id" : 1,
                "question" : "¿Cuántos años de experiencia tienes en desarrollo de software?",
                "answer" : "Empecé a trabajar como programadora desde el 2018"
            },
            {
                "id" : 2,
                "question" : "¿En qué tecnologías desarrollas?",
                "answer" : "Para back end desarrollo en Net Framework y Net Core. Con el front end tengo experiencia con los framework Vue Js y React. Para la gestión de base de datos, SQL Server"
            },
            {
                "id" : 3,
                "question" : "¿Con qué tecnologías esta hecho esta app?",
                "answer" : "Con Vue Js. Esta deployada con GitHub Pages."
            },
            {
                "id" : 4,
                "question" : "¿Cúales son tus hobbies?",
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
                "answer" : "Tengo un nivel Advanced."
            },
            {
                "id" : 7,
                "question" : "¡Muchas gracias Clau !",
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
                "question" : "¿Cual consideras tus puntos fuertes?",
                "answer" : "Que no dejo de intertar las cosas, hasta que salgan!."
            }
        ];
    },
    getEnglishMessages(){
        return [
            {
                "id" : 1,
                "question" : "How many years of experience do you have in software development?",
                "answer" : "I started working as a programmer since 2018"
            },
            {
                "id" : 2,
                "question" : "What technologies do you use to develop?",
                "answer" : "For back end development in Net Framework and Net Core. With the front end I have experience with the Vue Js and React frameworks. For database management, SQL Server"
            },
            {
                "id" : 3,
                "question" : "What technologies is this app made with?",
                "answer" : "With Vue Js. It is deployed with GitHub Pages."
            },
            {
                "id" : 4,
                "question" : "What are your hobbies?",
                "answer" : "Uff, I like to drink beers, ride my bike and watch football. :P"
            },
            {
                "id" : 5,
                "question" : "How do I contact you?",
                "answer" : "Well, I leave you the link of my LinkedIn profile and we can continue chatting! And feel free to make suggestions regarding this form of presentation. 'linkedin.com/in/claudia-jara-2022'"
            },
            {
                "id" : 6,
                "question" : "How is your English?",
                "answer" : "I have an Advanced level."
            },
            {
                "id" : 7,
                "question" : "Thank you very much Clau!",
                "answer" : "Thank you very much for taking the time to try this new way of chatting! :D <3"
            },
            {
                "id" : 8,
                "question" : "Tell me something about you",
                "answer" : "My name is Claudia, I started developing since 2018. I like the back end and databases but I adapt well in terms of front end development."
            },
            {
                "id" : 9,
                "question" : "What do you consider your weak points?",
                "answer" : "I think I lose patience fast! xD."
            },
            {
                "id" : 10,
                "question" : "What do you consider your strengths?",
                "answer" : "That I don't stop trying things, until they come out!."
            }
        ];
    },
    messagesFactoryByIdAndLanguage(id, language){
        let messagesArray = [];
        if(id && language){
            let selectedItem =  this.getMessagesByLanguage(language).filter(function(item){
                return item.id === id;
            })[0];
            messagesArray.push({"message": selectedItem.question, "isAnswer": false, "isQuestion": true});
            messagesArray.push({"message": selectedItem.answer, "isAnswer": true, "isQuestion": false});
        }
       
        return messagesArray;
    },
    getRandomQuestionsByLanguage(language){
        let dataArray = [];
        if(language){

            while(dataArray.length < 3){
                let id = this.getIdRandom();
                if(dataArray.find(e => e.id === id) === undefined){
                    dataArray.push(this.getMessagesByLanguage(language).filter(function(item){
                        return item.id === id;
                    })[0]);
                }
            }
        }
            
        return dataArray;
    },
    getIdRandom(){
        return Math.floor(Math.random() * (10) + 1);
    },
    getFirstAnswerByLanguage(language){
        let message = {};
        switch (language) {
            case "SPANISH":
                message = {"message": "Hola, ¿cómo estás? Hazme una pregunta para comenzar!", "isAnswer": true, "isQuestion": false};
                break;
        
            case "ENGLISH":
                message = {"message": "Hello how are you? Ask me a question to get started!", "isAnswer": true, "isQuestion": false};
                break;
                default:
                    message={}
                    break;
        }
        return message;
    },
    getMessagesByLanguage(language){
        let messages = [];
        switch (language) {
            case "SPANISH":
                messages = this.getSpanishMessages();
                break;
        
            case "ENGLISH":
                messages = this.getEnglishMessages();
                break;
                default:
                    messages=[]
                    break;
        }
        return messages;
    }
}