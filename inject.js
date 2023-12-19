let startTime, endTime;
let user = document.getElementsByClassName("AmmtE")[0].getInnerHTML().match(/style="min-height: 0px;">(.*?)<\/span><\/div>/)[1];
// check emoji
if(user.length>25){
	user=user.split("<")[0]
}
let lastSeen;
function trackuser() {
	var track = 1;
	if (track) {
		setTimeout(function () {
			var today = new Date();
			var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			var encodedDate = encodeURIComponent(date);
			var encodedTime = encodeURIComponent(time);

			statusUser = document.getElementsByClassName("AmmtE")[0].getInnerHTML()
			
			try {
				if (statusUser.includes('online') || statusUser.includes('en linea') || statusUser.includes('typing') || statusUser.includes('escribiendo')) {
					if (!startTime) {
						startTime = encodedTime;
					}
					endTime = encodedTime;
					console.log("User online! (" + user + ")");

				} else {
					if (startTime) {
						var encodedUser = encodeURIComponent(user);
						//way to avoid the cors policies
						var exfilImage = new Image();
						exfilImage.src = "http://127.0.0.1:5555?user=" + encodedUser + "&date=" + encodedDate + "&starttime=" + startTime + "&endtime=" + endTime;
						startTime = null;
						endTime = null;
					} else {
						lastSeen = statusUser.match(/last seen (.{20})/)
						if (lastSeen) {
							console.log("User " + user + " not online. Last online: " + lastSeen[1] + " (Not sending)");
						} else {
							console.log("User " + user + " not online - Privacy mode activated");
						}
					}
				}
			} catch (error) {
				console.log("User " + user + " not online - Privacy mode activated (" + error + ")");
			}
			trackuser()
		}, 2500);
	}
}
trackuser()

