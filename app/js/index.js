
var aside = document.getElementsByTagName('aside')[0];
var main = document.getElementsByTagName('main')[0];
var menuButton = document.getElementsByClassName('menuButton')[0];
var brands = document.getElementsByClassName('menuButtonBrand')
var asideButton = document.getElementsByClassName('asideButton')[0];



var asideVisible = false;
menuButton.addEventListener('click', (e) => {
	if( !asideVisible) {
		// brands[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
		// brands[2].style.transform = 'rotate(-45deg) translate(5px, -8px)';
		// brands[1].style.backgroundColor = 'white';
		aside.style.left = "0px";
		aside.style.boxShadow = '0 0 7px 0  #000000';
		asideVisible = true;
	} else {
		// aside.style.width = "0px";
		// brands[0].style.transform = 'initial';
		// brands[2].style.transform = 'initial';
		// brands[1].style.backgroundColor = 'gray';
		// asideVisible = false;
	}
})
asideButton.addEventListener('click', (e) => {
	if(asideVisible) {
		// brands[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
		// brands[2].style.transform = 'rotate(-45deg) translate(5px, -8px)';
		// brands[1].style.backgroundColor = 'white';
		aside.style.boxShadow = 'initial';
		aside.style.left = "-300px";
		asideVisible = false;
	} else {
		// aside.style.width = "0px";
		// brands[0].style.transform = 'initial';
		// brands[2].style.transform = 'initial';
		// brands[1].style.backgroundColor = 'gray';
		// asideVisible = false;
	}
})

// $(function() {
// 	var data = ['Guinea-Bissau',
// 			'Sri Lanka',
// 			'Faroe Islands',
// 			'Botswana',
// 			'Isle of Man',
// 			'Lithuania',
// 			'Heard Island and McDonald Islands',
// 			'Anguilla',
// 			'Samoa',
// 			'Thailand',
// 			'Tokelau',
// 			'Heard Island and McDonald Islands',
// 			'Georgia',
// 			'Saint Barthelemy',
// 			'Libyan Arab Jamahiriya',
// 			'Jamaica',
// 			'British Indian Ocean Territory (Chagos Archipelago)',
// 			'Guinea-Bissau',
// 			'Ghana',
// 			'Netherlands' ];
// 	$('#search').autocomplete({
// 		source: data
// 	});
// });


$( function() {
    $( "#search" ).datepicker();
  } );

