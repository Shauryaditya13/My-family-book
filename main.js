var reason = [
    "Kiran Kumar",
    "Swapna",
    "Aishwarya",
    "Shauryaditya"
  ];
  var pics = [
    "Kiran Kumar.jpg",
    "Swapna.jpg",
    "aishwarya.jpg",
    "Shauryaditya.jpg"
  ];
  var arraynumber = 0;
  function nextslide() {
    document.getElementById("image1").src = pics[arraynumber];
    document.getElementById("p1").innerHTML = reason[arraynumber];
    arraynumber++;
    if (arraynumber > 3) {
      arraynumber = 0;
    }
  }
  