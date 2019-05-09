function initMap() {
	var home = {lat: 26.174, lng: 91.734};
	var map = new google.maps.Map(
		document.getElementById('map'), 
		{	
			zoom: 12, 
			center: home, 
			mapTypeControl: false,
			streetViewControl: false,
			fullscreenControl: false,
			gestureHandling: 'cooperative'
		});
	var marker = new google.maps.Marker({position: home, map: map});
}

function classToggle() {
	const navs = document.querySelectorAll('.Navbar__Items')
	navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);