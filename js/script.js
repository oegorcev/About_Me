'use strict'

document.getElementById("change-style").addEventListener('click', changeCSS) 

function changeCSS() {

    var oldlink = document.getElementsByTagName("link").item(0);
    
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");

    if(oldlink.getAttribute("href") === "css/white.css") {
        newlink.setAttribute("href", "css/dark.css");
        document.getElementById("change-style").innerHTML =  "&#127765;";
    } else {
        newlink.setAttribute("href", "css/white.css");
        document.getElementById("change-style").innerHTML = "&#127761;";
    }
    
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}


  



function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('body', true);
    setVisible('#loading', false);
  });