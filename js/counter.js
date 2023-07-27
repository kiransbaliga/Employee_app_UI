var count = 0;
var elbutton = document.querySelector("button");
elbutton.addEventListener("click", () => {
  console.log("Here");
  counter = document.querySelector("input");
  value = counter.value;
  value = parseFloat(value);
  console.log(value);
  value = value * 60;
  count = value;
  const elem = document.getElementById("counter");
  const myintervel = setInterval(() => {
      var minutes = Math.floor(count / 60);
      var seconds = count - minutes * 60;
      elem.innerHTML = minutes + ":" + seconds;
      if (count <= 0) {
          elem.innerHTML = "Expired";
          clearInterval(myintervel);
        }
        count--;
  }, 1000);
});
