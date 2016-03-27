var time = 0;
function run(url) {
  if(localStorage.getItem(url))
    time = localStorage.getItem(url);
  setInterval(function(){
    time++; 
    var timer = document.getElementById("timer");
    timer.innerHTML = time;
    localStorage.setItem(url, time);
  }, 1000); 

}
document.addEventListener('DOMContentLoaded', function(){
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    var url = tabs[0].url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
    var url_div = document.getElementById("url");
    url_div.innerHTML = url;
    run(url);
  }); 

});

chrome.browserAction.onClicked.addListener(function(tab) {
  //var viewTabUrl = chrome.extension.getURL(tab.);
  console.log("Hello");
  console.timeEnd("Time spent on tab:");

  //var imageUrl = /* an image's URL */;

  // Look through all the pages in this extension to find one we can use.
  /**var views = chrome.extension.getViews();
  for (var i = 0; i < views.length; i++) {
    var view = views[i];

    // If this view has the right URL and hasn't been used yet...
    if (view.location.href == viewTabUrl && !view.imageAlreadySet) {

      // ...call one of its functions and set a property.
      view.setImageUrl(imageUrl);
      view.imageAlreadySet = true;
      break; // we're done
    }
  }**/
});