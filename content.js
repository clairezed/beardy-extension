console.log("Content.js -- youhouuuuuuuuuu");
console.log(organization);
// var websites = chrome.runtime.getBackgroundPage().websites;

console.log(window.location)

var body = document.body

var modalDiv = document.createElement('div');
modalDiv.setAttribute('class', 'beardyModal');
modalDiv.setAttribute('title', 'La Barbe !');

var heading = document.createElement('h1');
heading.innerHTML = "La barbe !"


var paragraph = document.createElement('p');
paragraph.innerHTML = organization.name + ", une belle assemblée virile que la barbe félicite !";

modalDiv.appendChild(heading);
modalDiv.appendChild(paragraph);
console.log(modalDiv);

body.appendChild(modalDiv);
// document.getElementsByTagName('body')[0].appendChild(modalDiv)

// console.log(websites);
// if (confirm('Open dialog for testing?'))
//     chrome.runtime.sendMessage({type:'request_password'});




// Injecting content in current tab ---------------------------------------------
// To inject CSS, use tabs.insertCSS.


// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript(null, {file: "content_script.js"});
// });


//Code for displaying <extensionDir>/images/myimage.png:
// var imgURL = chrome.extension.getURL("images/myimage.png");


// Communicating --------------------------------------------------------

// var port = chrome.runtime.connect();
// // "message" sent from page in which content script is injected
// window.addEventListener("message", function(event) {
//   // We only accept messages from ourselves
//   if (event.source != window)
//     return;
//   if (event.data.type && (event.data.type == "FROM_PAGE")) {
//     console.log("Content script received: " + event.data.text);
//     port.postMessage(event.data.text); // Send data to extension
//   }
// }, false);



// Security --------------------------------------------------------------
// - if your content script receives content from another web site (for example, by making an  XMLHttpRequest), be careful to filter that content for cross-site scripting attacks before injecting the content into the current page.
//  - prefer to inject content via innerText rather than innerHTML.