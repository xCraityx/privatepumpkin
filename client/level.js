var mylevel = localStorage.getItem("level");

window.setInterval(function () {
			mylevel = (mylevel + 1);
			localStorage.setItem("level", mylevel);
			document.getElementById("pumpkinlevel").innerHTML = localStorage.getItem("level");
       }
   }, 300000);

/* <!-- no hacks level lmao --> */

window.setInterval(function () {
			document.getElementById("pumpkinlevel").innerHTML = localStorage.getItem("level");
       }
   }, 1);