// track various href values for anchor links
// ex: pyxalweb.com
// ex: tel:9258295270
// ex: mailto:alex@pyxalweb.com

jQuery(document).ready(function($){
	$('a').click(function(){
		var link = $(this).attr('href');
		var text = $(this).text();

		// linkHref      = the pattern in the href you wish to track
		// eventCategory = the "Event Category" used in GA
		function checkLink(linkHref, eventCategory){
			if (link.toLowerCase().indexOf(linkHref) >= 0) {
				// this is the current page that the link was clicked on
				var pathName = window.location.pathname;
				if (pathName == '/') {
					pathName = 'homepage';
				} else {
					pathName = pathName.substring(1);
				}

				// Tracking Script - Synchronous (Old)
				// try { pageTracker._trackEvent(eventCategory, text + ' - ' + pathName); } catch(err) { console.log(err) }
				
				// Tracking Script - Asynchronous (New)
				// try { ga('send', 'event', 'Track Booking', pathName); } catch(err) { console.log(err) }

				// Testing
				// console.log(eventCategory + ': ' + text + ' - ' + pathName);
			}
		}

		// track (linked) phone numbers
		checkLink('tel:', "Phone Number");

		// track links to Request Appointment page
		checkLink('request-appointment.php', 'Request Appointment');

		// track links to Google Maps
		checkLink('google.com/maps', "Google Maps");
	});
});