// MAIN IMAGE POPULATION FUNCTION
// Currently pulling from data.js

$(document).ready(function() {
    function renderAlbums (dataArr, $target) {
      var galleryAlbum = '';
      dataArr.forEach(function(el, idx, arr){
        galleryAlbum += `<div class="img-wrapper" data-idx="${idx}">
                           <h3>${el.name}</h3>
                           <img src="${el.photos[0].image}"></img>
                           <span>${el.description}</span>
                         </div>`;
      });
      $target.append(galleryAlbum);
    }
    renderAlbums(albums, $('.main-photo'));

    //ALBUM HOVER VARIABLES
    var idxOf = 0;
    var albumArr = [];
    var index = 0;
    var cycleImg = function() {
      if (index === 3) {index = 0;}
      $('.hover').attr('src', albumArr[index]);
      index++;
    }
    var cycle = setInterval(cycleImg, 2000);
    // ALBUM HOVER SCRIPTS
    $('.img-wrapper').hover(
        function () {
            $(this).find('img').addClass("hover");
            idxOf = $(this).data('idx');
            albumArr = albums.map(function(e,i,a){
                return e.photos
              })[idxOf].map(function(e,i,a){
                return e.image;
              });
              cycle;
        },
        function () {
            $(this).find('img').removeClass("hover");
        }
    );
    var thisArr = albums.map(function(e,i,a){
        console.log(e.photos[i]);
    });

    //SHOW ONLY PHOTOS FROM SELECTED ALBUM
    $('.img-wrapper').on('click', function(event) {
        $('.main-photo').addClass('album-view');
        event.preventDefault;
        idxOf = $(this).data('idx');
        var galleryAlbum = '';
        var albumImageArr = albums[idxOf].photos.map(function(el,idx,arr){
              return el;
              })
        function renderAlbumPhotos (dataArr, $target){
        dataArr.forEach(function(el, idx, arr){
          galleryAlbum += `<div class="img-wrapper" data-idx="${idx}">
                             <h3>${el.title}</h3>
                             <img src="${el.image}"></img>
                           </div>`;
        });
        $target.append(galleryAlbum);
      }
        $('.img-wrapper').fadeOut(800);
        renderAlbumPhotos(albumImageArr, $('.main-photo'));

        // SHOW SINGLE PHOTO
        $('.img-wrapper').on('click', function(event) {
            $(this).addClass('photo-solo');
            $('.main-photo').addClass('solo');
            $(this).siblings().hide();

        }) /* <----- end album photos */

    }) /* <----- end album photos */



});




// ABOUT PAGE

// FRIENDS PAGE
