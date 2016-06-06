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
      $('.main-photo, .side-album').html("");
      albums.forEach(function(el, idx, arr){
        var galleryAlbum = app.popData(galleryTemplates.mainAlbum,el);
        var albumList = app.popData(galleryTemplates.sideAlbum,el);
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
    $('.gall, .side-album li').on('click', function(event) {
      console.log(this);
        $('.main-photo').addClass('album-view');
        $('.trio').remove();
        $('.img-wrapper').removeClass('photo-solo');
        $('.main-photo').removeClass('solo');
        event.preventDefault();
        idxOf = $(this).data('idx');
        var albumImageArr = albums[idxOf].photos.map(function(el,idx,arr){
              return el;
            });
        $('.img-wrapper').hide();
        albumImageArr.forEach(function(el, idx, arr){
          var galleryAlbum = app.popData(galleryTemplates.mainPhotos,el);
          $('.main-photo').append(galleryAlbum);
        });

        // SHOW SINGLE PHOTO
        $('.trio').on('click', function(event) {
            event.preventDefault();
            console.log(this, "trio");
            $(this).addClass('photo-solo');
            $('.main-photo').addClass('solo');
            $(this).siblings().hide();
        }); /* <----- end single photo */

    }); /* <----- end album photos */


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
    ); /* end hover */
  },
  templification: function(template) {
    return _.template(template);
  },
  popData: function(template,data) {
    var tmpl = app.templification(template);
    return tmpl(data);
  }
};
