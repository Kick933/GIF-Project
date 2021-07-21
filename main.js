const container = document.getElementById('container');
const gifImage = new Image();
gifImage.id="gif";
fetch('https://api.giphy.com/v1/gifs/translate?api_key=m2d5Qd332aYuN41dhDd7RGuOuWxCWhy0&s=cats')
.then(function(response) {
    return response.json();
})
.then(function(response) {
    gifImage.src = response.data.images.original.url;
})
container.appendChild(gifImage);