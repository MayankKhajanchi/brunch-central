// function initMap() {
// 	var home = {lat: 26.174, lng: 91.734};
// 	var map = new google.maps.Map(
// 		document.getElementById('map'), 
// 		{	
// 			zoom: 12, 
// 			center: home, 
// 			mapTypeControl: false,
// 			streetViewControl: false,
// 			fullscreenControl: false,
// 			gestureHandling: 'cooperative'
// 		});
// 	var marker = new google.maps.Marker({position: home, map: map});
// }

function initMap() {
      let locations = [
        ['shiro', 12.9719, 77.5965, 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', '222, 3rd Floor, UB City Comet, Vittal Mallya Road, Bengaluru, Karnataka 560001', '12pm - 3pm', 'Sushi', 1],
        ['Olive Bar and Kitchen', 12.9668, 77.6083, 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', '16, Wood Street, Ashok Nagar, Bengaluru, Karnataka 560025', '12pm - 3pm', 'Oysters', 2],
        ['Sly Granny', 12.9705, 77.6464, 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', '3rd Floor, # 618, Above Chicco, 12th Main Rd, Indiranagar, Bengaluru, Karnataka 560038', '12pm - 3pm', 'Waffles', 3],
        ['Hotel Royal Orchid', 12.9574, 77.6440, 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', '#1, Golf Avenue,Adjoining KGA Golf Course, HAL Airport Road,Bengaluru Karnataka India-560008', '12pm - 3pm', 'Rock Oysters', 4],
        ['The Oberoi Bengaluru', 12.9735, 77.6182, './public/pin-deals-tp-ornge.png', '37-39, Mahatma Gandhi Road, Bengaluru, Karnataka 560001', '12pm - 3pm', 'Pasta', 5],
        ['Pablos Gastrobar', 12.9818, 77.7087, 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', '2, Graphite India Road, Ashraya Layout, Seetharampalya, Mahadevapura, Bengaluru, Karnataka 560048', '12pm - 3pm', 'Tacos', 6],
        ['Vivanta By Taj MG Road, Bangalore', 12.9870, 77.7376, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png', '41/3, MG Road, Yellappa Garden, Yellappa Chetty Layout, Sivanchetti Gardens, Bengaluru, Karnataka 560001', '12pm - 3pm', 'Salads', 7],
        ['JW Marriott Hotel Bengaluru', 12.9724, 77.5951, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png', '24/1, Vittal Mallya Road, KG Halli, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001', '12pm - 3pm', 'Sandwich', 8],
        ['Sheraton Grand Bangalore Hotel at Brigade Gateway', 13.0127, 77.5550, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png', 'A Block, 26/1, Doctor Rajkumar Road, Rajaji Nagar, Bengaluru, Karnataka 560055', '12pm - 3pm', 'Butter Chicken', 9],
        ['1Q1', 12.9838, 77.5968, 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', 'No. 1, Express Building, Queens Road, Bengaluru, Karnataka 560001', '12pm - 3pm', 'Sushi', 10],
        ['Le Meridien Bangalore', 12.9903, 77.5861, 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', 'No. 28 Sankey Road, P.B. No. 174 (Opposite Bangalore Golf Club), Bengaluru, Karnataka 560052', '12pm - 3pm', 'Spaghetti', 11]
      ]

      let infos = locations.map((location, index) => {
        return new google.maps.InfoWindow({
          content: (`<div class="content" style="color: black">
                      <div id="siteNotice">
                      </div>
                      <h5 id="firstHeading" class="firstHeading">${location[0]}</h5>
                      <div id="bodyContent">
                        <div class="d-flex justify-content-start">
                          <p>
                              <img class="mb-2 pic" src=./public/${index}.jpg alt="Girl in a jacket" width="100" height="100"><br />
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star unchecked"></span>
                              <span class="fa fa-star unchecked"></span></br>
                          </p>
                          <div class="ml-3">
                            <p class="description">${location[4]}</p>
                            <p class="description"><span class="best">Timing:</span> ${location[5]}</p>
                            <p class="description"><span class="best">Known for:</span> ${location[6]}</p>
                            <p class="text-right"><a class="mt-2 info" target="_self" href="location${index}.html">More info</a></p>
                          </div>
                        </div>
                      </div>
                    </div>`)
        });
      })

      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(12.9716, 77.5946),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
          featureType: "poi",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }]
      });
      let marker, i;
      for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          class: "card",
          map: map,
          title: locations[i][0],
          icon: {
            url: locations[i][3]
          }
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {
            infos.forEach((info) => {
              info.close();
            });
            infos[i].open(map, marker);
          }
        })(marker, i));
      }
    }
// function classToggle() {
// 	const navs = document.querySelectorAll('.Navbar__Items')
// 	navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
// }

// document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

// function classToggle() {
// 	const navs = document.querySelectorAll('.Navbar__Items')
// 	navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
// }

// document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);