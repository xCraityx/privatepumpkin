setTimeout(level(), 300000)

function level() {
  localStorage.setItem("level", localStorage.getItem("level")+1);
}