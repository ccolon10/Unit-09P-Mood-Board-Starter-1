var happyImages = [
    "https://media0.giphy.com/media/ehegLhF3Z80xi/giphy.gif?cid=790b76115cdd69e262595446593d871b&rid=giphy.gif", 
    "https://media1.giphy.com/media/u33BcMbqQmJGg/giphy.gif?cid=790b76115cdd67c56f6b2f5545abc481&rid=giphy.gif",
    "https://media1.giphy.com/media/ma6P4l3O53uX6/giphy.gif?cid=790b76115cdd67c56f6b2f5545abc481&rid=giphy.gif"
];
var sadImages = ["https://media.giphy.com/media/KDRv3QggAjyo/giphy.gif","https://media.giphy.com/media/TU76e2JHkPchG/giphy.gif","https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F4082068%2Fimages%2Fn-VIOLENCE-WOMEN-628x314.jpg"];
var tiredImages = ["https://media.giphy.com/media/RTIGQQZwkGy9q/giphy.gif","https://media3.giphy.com/media/NWg7M1VlT101W/giphy.gif","https://media.self.com/photos/57d88ab246d0cb351c8c4cef/4:3/w_728,c_limit/always-tired-feat.jpeg"];
var hungryImages = ["","https://media.tenor.com/images/f85c932039fc7e45c6c1f946502a5f2b/tenor.gif","http://clipart-library.com/img/419107.jpg","https://media.giphy.com/media/2wh8dIGFpOX6NpAkle/giphy.gif","https://media.giphy.com/media/SCIdk5a1BYzxC/giphy.gif" ];


$('button').click(function(){
   var mood = $('input').val();
   $('.images').html('');
   if (mood === 'happy') {
       console.log ('h1');
       happyMood();
   }
   if (mood === 'sad') {
       console.log ('h1');
       sadMood();
   }
   if (mood === 'tired') {
       console.log ('h1');
       tiredMood();
   }
     if (mood === 'hungry') {
       console.log ('h1');
       hungryMood();
   }

  
  
});


function happyMood(){
   displayImages(happyImages);
   changeBackgroundColor('yellow');
   
}
function sadMood(){
    displayImages(sadImages);
    changeBackgroundColor('red');
}
function tiredMood(){
    displayImages(tiredImages);
    changeBackgroundColor('blue');
}
function hungryMood(){
    displayImages(hungryImages);
    changeBackgroundColor('purple');
}


function changeBackgroundColor(color){
   $("body").css('background-color', color);
}


function changeTextColor(color){
}

function displayImages(images){
 images.forEach(function(image) {
     console.log(image);
   $('.images').append("<img src='" + image +" '/>'");
 });
}