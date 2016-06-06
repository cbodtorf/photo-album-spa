// Currently pulling from data.js

$(document).ready(function() {
  app.init();
});

var app = {
  init: function(){
    app.styles();
    app.events();
  },
  styles: function(){
    /*populate main albums*/
      var galleryAlbum = '';
      var albumList = '';
      $('.main-photo, .side-album').html("");
      albums.forEach(function(el, idx, arr){
        galleryAlbum = app.popData(galleryTemplates.mainAlbum,el);
        albumList = app.popData(galleryTemplates.sideAlbum,el);
        $('.main-photo').append(galleryAlbum);
        $('.side-album').append(albumList);
      });

  },
  events: function(){
    /*click-events*/
    // HOME
    $('.home').on('click', function(event) {
        $('.trio').remove();
        $('.img-wrapper').removeClass('photo-solo');
        $('.main-photo').removeClass('solo');
        $('.img-wrapper').fadeIn();
    }) /* <----- end home */

    //SHOW ONLY PHOTOS FROM SELECTED ALBUM
    $('.img-wrapper, .side-album li, .photo-solo').on('click', function(event) {
        $('.main-photo').addClass('album-view');
        $('.trio').remove();
        $('.img-wrapper').removeClass('photo-solo');
        $('.main-photo').removeClass('solo');
        event.preventDefault();
        idxOf = $(this).data('idx');
        var galleryAlbum = '';
        var albumImageArr = albums[idxOf].photos.map(function(el,idx,arr){
              return el;
            });
        $('.img-wrapper').hide();
        albumImageArr.forEach(function(el, idx, arr){
          galleryAlbum = app.popData(galleryTemplates.mainPhotos,el);
          $('.main-photo').append(galleryAlbum);
        });
    }) /* <----- end album photos */

    // SHOW SINGLE PHOTO
    $('.trio').on('click', function(event) {
        console.log("hello");
        $(this).addClass('photo-solo');
        $('.main-photo').addClass('solo');
        $(this).siblings().hide();
    }) /* <----- end single photo */

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

  },
  templification: function(template) {
    return _.template(template);
  },
  popData: function(template,data) {
    var tmpl = app.templification(template);
    return tmpl(data);
  }
};

///// OLD CODE /////
///// vvvvvvvv /////


// MAIN IMAGE POPULATION FUNCTION
// ADDED SIDE BAR ALBUM NAMES AS THIRD ARGUMENT

// var renderAlbums = function renderAlbums (dataArr, $target, $targetTwo) {
//   var galleryAlbum = '';
//   var albumList = '';
//   dataArr.forEach(function(el, idx, arr){
//     galleryAlbum += `<div class="img-wrapper" data-idx="${idx}">
//                        <h3>${el.name}</h3>
//                        <img src="${el.photos[0].image}"></img>
//                        <span>${el.description}</span>
//                      </div>`;
//     albumList += `<li data-idx="${idx}">${el.name}</li>`;
//   });
//   $target.append(galleryAlbum);
//   $targetTwo.append(albumList);
// }

// // Home
// $('.home').on('click', function(event) {
//     $('.trio').remove();
//     $('.img-wrapper').removeClass('photo-solo');
//     $('.main-photo').removeClass('solo');
//     $('.img-wrapper').fadeIn();
// }) /* <----- home */

// $(document).ready(function() {
    // renderAlbums(albums, $('.main-photo'), $('.side-album'));



    // //ALBUM HOVER VARIABLES
    // var idxOf = 0;
    // var albumArr = [];
    // var index = 0;
    // var cycleImg = function() {
    //   if (index === 3) {index = 0;}
    //   $('.hover').attr('src', albumArr[index]);
    //   index++;
    // }
    // var cycle = setInterval(cycleImg, 2000);
    // // ALBUM HOVER SCRIPTS
    // $('.img-wrapper').hover(
    //     function () {
    //         $(this).find('img').addClass("hover");
    //         idxOf = $(this).data('idx');
    //         albumArr = albums.map(function(e,i,a){
    //             return e.photos
    //           })[idxOf].map(function(e,i,a){
    //             return e.image;
    //           });
    //           cycle;
    //     },
    //     function () {
    //         $(this).find('img').removeClass("hover");
    //     }
    // );

    // //SHOW ONLY PHOTOS FROM SELECTED ALBUM
    // $('.img-wrapper, .side-album li, .photo-solo').on('click', function(event) {
    //     $('.main-photo').addClass('album-view');
    //     $('.trio').remove();
    //     $('.img-wrapper').removeClass('photo-solo');
    //     $('.main-photo').removeClass('solo');
    //     event.preventDefault();
    //     idxOf = $(this).data('idx');
    //     var galleryAlbum = '';
    //     var albumImageArr = albums[idxOf].photos.map(function(el,idx,arr){
    //           return el;
    //           })
    //     function renderAlbumPhotos (dataArr, $target){
    //     dataArr.forEach(function(el, idx, arr){
    //       galleryAlbum += `<div class="img-wrapper trio" data-idx="${idx}">
    //                          <h3>${el.title}</h3>
    //                          <img src="${el.image}"></img>
    //                        </div>`;
    //     });
    //     $target.append(galleryAlbum);
    //   }
    //     $('.img-wrapper').hide();
    //     renderAlbumPhotos(albumImageArr, $('.main-photo'));
    //
    //     // SHOW SINGLE PHOTO
    //     $('.trio').on('click', function(event) {
    //         console.log("hello");
    //         $(this).addClass('photo-solo');
    //         $('.main-photo').addClass('solo');
    //         $(this).siblings().hide();
    //
    //     }) /* <----- end single photo */
    //
    //
    // }) /* <----- end album photos */
    //

// });



// ABOUT PAGE

// FRIENDS PAGE
