var curImage = 0;
var cImages = [
    'assets/headphone-video-img/headphone-2.png',
    'assets/headphone-video-img/headphone-3.png',
    'assets/headphone-video-img/headphone-1.png'
    
];
var ltext1 = [
  "Originally unveiled in 2007 for the iPhone, iOS has been extended to support other Apple devices such as the iPod Touch(September 2007) and the iPad (January 2010). As of March2018, Apple's App Store contains more than 2.1million iOS applications, 1 million of which are native for iPads. These mobile aplls have colectively been downloaded more than 130 billion times.",
  "The Beats app makes it easy to give your Beats earphones, headphones or Pill+ speakers names that reflect your style. The Beats app can also suggest some spirited device names.",
  "Use the Beats app to choose a listening mode on your new Solo Pro headphones: Turn on Pure Adaptive Noise Cancelling (Pure ANC) to actively block external sounds or turn on Transparency to hear ambient noise and stay aware of your surroundings."
];
var ltext2 = [
    "Use it EveryWhere",
    "Customise your Beats",
    "Deliver sound how you want it"

];

 
function townHousePics(direction) {
    if (direction == 'next') {
        //curImage++;
        curImage = (curImage +1) % 3;
 
       // if (curImage == 3) {
         //   curImage = 0;
        //}
    } else {
       // curImage--;
        curImage = (curImage - 1 + 3) % 3;
        // even reset the counter here when
        // its getting 0
    }
 
    document.images[3].src = cImages[curImage];
    document.getElementById("first").innerHTML = ltext2[curImage];
    document.getElementById("second").innerHTML = ltext1[curImage];
}


 