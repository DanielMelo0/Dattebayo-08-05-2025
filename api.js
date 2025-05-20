const host = 'https://dattebayo-api.onrender.com/'; 
fetch(`${host}teams/?limit=10`, {method: 'GET', headers: {Accept: 'application/json'}}) 
.then(function (response) 
{ 
    return response.json(); 
}) 
.then(async function (json) 
{ 
    for (let i = 0; i < json.teams.length; i++) 
    { 
        let time = '', personagens = []; 
        for (let j = 0; j < json.teams[i].characters.length; j++) 
        { 
            time = json.teams[i].name; 
            await fetch(`${host}characters/${json.teams[i].characters[j]}`, {method: 'GET', headers: {Accept: 'application/json'}}) 
            .then(function (response) 
            { 
                return response.json(); 
            }) 
            .then(function (json) 
            { 
                personagens.push(json.name); 
            }) 
            .catch(function (error) 
            { 
                console.log(error); 
            }); 
        } 
        personagens = personagens.join(', '); 
        console.log(`Nome da Equipe: ${time}\nMembros : ${personagens}`) 
    } 
}) 
.catch(function (error) 
{ 
    console.log(error); 
}); 
 
