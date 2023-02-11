const { response } = require('express');
const express=require('express');
const fetch=require('node-fetch');

const app=express();

//inorder to use files in public folder we need to consider the usage of middleware.

app.use(express.static('public'));

app.listen(3002,function(req,res)
{
    console.log('App is listening at the port 3002.');
});

app.get("/techquotes",async(request,response)=>
{
    //we need to set headers.
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'Unique RAPIDAPI KEY',
            'X-RapidAPI-Host': 'Unique RAPIDAPI HOST KEY'
        }
    };
    //fetch API is used to render the results over here.
    const fetchAPI=await fetch('API LINK FOR IMAGE', options);
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));


        const techquoteimageResponse=await fetchAPI.json();
        console.log(techquoteimageResponse);
        response.json(techquoteimageResponse);

});
