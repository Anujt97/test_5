console.log("welcome to js")


let a= fetch('https://meme-api.herokuapp.com/gimme');

let b = a.then(function(response){
    return response.json();

});
b.then(function(data){
    displayData(data)
})

function displayData(data){
    console.log(data);

    let url = `${data.url}`;
    console.log(url);

    let img = document.getElementById('img');
    img.src=url;


}


