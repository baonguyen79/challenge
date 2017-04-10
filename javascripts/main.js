var images = [`http://static.tvtropes.org/pmwiki/pub/images/ohcrapraptors_277.JPG`,
			  `https://thumbs.dreamstime.com/x/raptor-dinosaur-illustration-2375395.jpg`,
			  `http://images.dinosaurpictures.org/velociraptor_12_c4fd.jpg`,
			  `https://s-media-cache-ak0.pinimg.com/736x/5d/50/4f/5d504f83a318cf6713d71c1c4c1c290c.jpg`,
			  `https://s-media-cache-ak0.pinimg.com/originals/0f/4d/f3/0f4df3a1960a731eb3e421b875473c79.png`,
			  `http://www.dinosaur-toys-collectors-guide.com/images/Papo-Raptor-front-x2.jpg`,
			  `https://s-media-cache-ak0.pinimg.com/564x/b6/a8/b9/b6a8b9feb43bcab99986d299aa5e21d9.jpg`,
			  `http://pre06.deviantart.net/d7a9/th/pre/i/2011/176/5/5/velociraptor_smile_by_yankeetrex-d3jzije.jpg`,
			  `http://biology.fullerton.edu/hol/im/deinon.jpg`,
			  `https://i.ytimg.com/vi/lIVTcYmRZ2k/maxresdefault.jpg`

];

var imgList = $("#img-list");

for (var i = 0;i<images.length; i++){
	imgList.append(`<div class="col-md-4 col-md-4">
					 <div class="thumbnail">
       					 <img src=${images[i]} style="width:80%">
       				 </div>		 
  				  </div>`);
}
