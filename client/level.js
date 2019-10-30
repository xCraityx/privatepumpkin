window.setInterval(function () {
			localStorage.setItem("level", (localStorage.getItem("level"))+1);
			document.getElementById("pumpkinlevel").innerHTML = localStorage.getItem("level");
       }
   }, 300000);

/* <!-- thing --> */

window.setInterval(function () {
document.getElementById("pumpkinlevel").innerHTML = localStorage.getItem("level");
       }
   }, 1);