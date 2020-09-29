var reason = [
    "Kiran Kumar",
    "Swapna",
    "Aishwarya",
    "Shauryaditya"
  ];
  var pics = [
    "blob:https://web.whatsapp.com/68a1fe88-e9a9-40f9-abb0-fb4838da0dc5",
    "blob:https://web.whatsapp.com/9a2c1f67-e80e-427e-8282-ff0de1f692b2",
    "blob:https://web.whatsapp.com/04ab24eb-fd39-42d3-930a-ad4b8d737428",
    "blob:https://web.whatsapp.com/dc3facaa-e431-4998-8408-2246470513da"
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
  