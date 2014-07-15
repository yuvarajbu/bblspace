images = getImages();
var n = images.length;
var i;

for(i=1; i<n; i++){
    if(i === 1){
    var $activediv = $('<div class = "item active"/>').append('<img src=\'../images/Slide'+i+'.JPG\'/>');
    $('.carousel-inner').append($activediv);
    }
  else{
    var $itemdiv = $('<div class = "item"/>').append('<img src=\'../images/Slide'+i+'.JPG\'/>');
    $('.carousel-inner').append($itemdiv);
    }
  }

function getImages() {  
  var size=1;
  var jpg = '.JPG';
  var path = '../images/Slide';
  var url = path+size+jpg;
  var images = [];

  function check(urlLink) {
    var request = new XMLHttpRequest();
    request.open('GET', urlLink, false);
    request.send();
  //this condition will throw an error when file not found.
    if (request.status === 404) {
      return false;
    } else {
      return true;
    }
  }
    
  while(true) {
    if (check(url)) {
      size++;
      images.push(url);
    } else {
      break;
    }
    url = path+size+jpg;
  }
  
  return images;
}