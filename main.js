const container = document.getElementById('container');
const gifImage = new Image();
gifImage.id="gif";
let str = 'https://api.giphy.com/v1/gifs/translate?api_key=m2d5Qd332aYuN41dhDd7RGuOuWxCWhy0&s=cats';
function getGIF(){
fetch(str)
.then(function(response) {
    return response.json();
})
.then(function(response) {
    gifImage.src = response.data.images.original.url;
})
.catch(function(err){
    console.log(err);
    alert("No GIF found.");
})
}
getGIF();

const btn = document.getElementById('search');
btn.addEventListener('click',()=>{
    event.preventDefault();
    newSearch();
})

function newSearch(){
    let text = document.getElementById('search-text');
    if(text.value == ''){
        return;
    }
    str = 'https://api.giphy.com/v1/gifs/translate?api_key=m2d5Qd332aYuN41dhDd7RGuOuWxCWhy0&s=' + text.value;
    getGIF();
}

container.appendChild(gifImage);