//console.log('Javascript File got loaded!!!');
document.querySelector('#btn').addEventListener('click',()=>
{
    getImageFromAPI();
});

async function getImageFromAPI()
{
    //we are using the fetch API to render the images over here.
    const response=await fetch("/techquotes");
    const data=await response.json();
    let random_index=Math.floor((Math.random()*100)+0);
    let quoteimage=data.response.images[random_index].image.url;
    document.getElementById("image").src=quoteimage;
    console.log(quoteimage);
}