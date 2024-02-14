import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));



let counter = 0;


const themeParks = [
    {
    
      title: "Disneyland",
      description: "Een magisch pretpark met betoverende attracties en geliefde Disney-personages."
    },
    {
      title: "Efteling",
      description: "Een sprookjesachtig pretpark in Nederland met unieke attracties gebaseerd op folklore en legendes."
    },
    {
      title: "Universal Studios",
      description: "Een film- en entertainmentpretpark met attracties gebaseerd op populaire films en televisieseries."
    },
  ];

  app.get("/api/parks", (request, response)=>{
    response.json(themeParks);
  });

  app.get("/api/parks/add", (request, response)=>{
    if(request.query.parkname && request.query.description){
        const title = request.query.parkname;
        const description = request.query.description;
        themeParks.push({title, description});
        response.json(themeParks);
    }else{
        response.status(500).send('Something went wrong!'); 
    }
  });



app.get("/counter", (request, response) =>{
    console.log(request.query);
    let increment = 1
    if(request.query.incrementby){
        increment = Number ( request.query.incrementby );
    }
    counter = counter + increment;
    response.send("Totaal: " + counter);
});




app.get("/my-profile", (request, response)=> {
    const name = "Pascal Thong";
    const subtitle = "Agile Software Developer";
    response.send(`
    <style>
        .card{
            font-family: sans-serif;
            background: #123456;
            color:white;
            padding:10px;
            margin:10px;
            max-width:420px;
            border-radius: 5px;
            box-shadow: 10px 10px gray;
        }
    </style>
    <div class="card"> 
        <h2> ${name} </h2>
        <p> ${subtitle} </p>
    </div>
    `);
});


app.get("/my-profile", (request, response)=> {
    const name = "Pascal Thong";
    const subtitle = "Agile Software Developer";
    response.send(`
    <style>
        .card{
            font-family: sans-serif;
            background: #123456;
            color:white;
            padding:10px;
            margin:10px;
            max-width:420px;
            border-radius: 5px;
            box-shadow: 10px 10px gray;
        }
    </style>
    <div class="card"> 
        <h2> ${name} </h2>
        <p> ${subtitle} </p>
    </div>
    `);
});

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Api draait op ${port}`)
});