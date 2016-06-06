

var galleryTemplates = {
  mainAlbum:
    `<div class="img-wrapper" data-idx="<%= idx %>">
       <h3> <%= name %> </h3>
       <img src="<%= photos[0].image %>"></img>
       <span> <%= description %> </span>
     </div>`,
  mainPhotos:
    `<div class="img-wrapper trio">
       <h3> <%= title %> </h3>
       <img src="<%= image %>"></img>
     </div>`,
  sideAlbum:
    `<li data-idx="<%= idx %>"> <%= name %> </li>`
}

// data-idx="${idx}"
