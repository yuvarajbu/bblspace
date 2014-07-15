images = getImages();
var n = images.length;
var i;

for(i=1; i<n; i++){
    if(i === 1){
    var $activecaption = $('<div class="carousel-caption"/>').text('Slide'+i);
    var $activediv = $('<div class = "item active"/>').append('<img src=\'../images/Slide'+i+'.JPG\' width=\'1500\' height=\'999\'/>', $activecaption);
    var $activepag = $('<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>');
    
    $('.carousel-indicators').append($activepag);
    $('.carousel-inner').append($activediv);
    }
  else{
    var p=i-1;
    var $activecap = $('<div class="carousel-caption"/>').text('Slide'+i);
    var $itemdiv = $('<div class = "item"/>').append('<img src=\'../images/Slide'+i+'.JPG\' width=\'1500\' height=\'999\'/>',$activecap);
    var $pag = $('<li data-target="#carousel-example-generic" data-slide-to="'+p+'"></li>'); 
    $('.carousel-indicators').append($pag);
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
