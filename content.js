console.log("Content.js -- youhouuuuuuuuuu");
console.log(organization);
// var websites = chrome.runtime.getBackgroundPage().websites;

// console.log(window.location)

var build_link = function(organization) {
  var link =  "https://beardy-website.herokuapp.com/#" + organization.slug
  console.log(link);
  return link
}

var bind_dismiss_button = function(btn, container) {
  btn.addEventListener('click', function() {
    container.className += " beardyModal--hide";;
  }, false);
}

// Construction modalDiv ============================================

var basicModalDiv = function() {
  var modalDiv = document.createElement('div');
  modalDiv.setAttribute('class', 'beardyModal beardyModal--animated');
  modalDiv.setAttribute('title', 'La Barbe !');

  var dismiss_btn = document.createElement('button');
  dismiss_btn.setAttribute('class', 'beardyModal--dismiss-btn');
  dismiss_btn.innerHTML = "X";
  modalDiv.appendChild(dismiss_btn);

  var title = document.createElement('h1');
  title.setAttribute('class', 'beardyModal--title');
  title.innerHTML = "La barbe !"
  modalDiv.appendChild(title);

  var body_wrapper = document.createElement('div');
  body_wrapper.setAttribute('class', 'beardyModal--body-wrapper');

  var beard_pic = document.createElement('img');
  beard_pic.setAttribute('class', 'beardyModal--picture');
  beard_pic.src = chrome.extension.getURL("img/beard01.png");
  body_wrapper.appendChild(beard_pic);

  var paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'beardyModal--paragraph');
  paragraph.innerHTML = "<strong>"+ organization.name + "</strong>, une belle assemblée virile que la barbe félicite !";
  body_wrapper.appendChild(paragraph);

  modalDiv.appendChild(body_wrapper);

  var button = document.createElement('a');
  button.setAttribute('class', 'beardyModal--button');
  var link = build_link(organization);
  button.href = link;
  button.target = '_blank';
  button.innerHTML = "En savoir plus";
  modalDiv.appendChild(button);

  bind_dismiss_button(dismiss_btn, modalDiv);

  return modalDiv;
}

var buildModalDivFromScratch = function() {
  console.log("buildModalDivFromScratch");
  var modalDiv = basicModalDiv();
  document.body.appendChild(modalDiv);
};



buildModalDivFromScratch();


// SHADOW DOM TRY ======================================

// var lightShadowDomModalDiv = function() {
//   var modalDiv = basicModalDiv();

//   modalDiv.style.cssText =
//     'position: fixed;' +
//     'top: 5%;' +
//     'right: 5%;' +
//     'display: block;' +
//     'width: 200px;' +
//     'height: 200px;' +
//     'z-index: 1000;' +
//     'background-color: white;' +
//     'padding: 30px;' +
//     'box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 3px'

//   var holder = document.createElement('div');
//   holder.setAttribute('id', 'beardyModalHolder');

//   var shadow = holder.createShadowRoot();
//   console.log("ROOT : ")
//   console.log(shadow)

//   // shadow.resetStyleInheritance = true;
//   shadow.appendChild(modalDiv);

//   document.body.appendChild(holder);
// }

// lightShadowDomModalDiv();

// SHADOW DOM + TEMPLATE TRY ======================================

// var templateModalDiv = function() {
//   var link = document.createElement('link');
//   link.setAttribute('rel', 'import');
//   link.setAttribute('href', chrome.extension.getURL('modal-element.html'));
//   link.onload = function() {
//     var elem = document.createElement('my-element');
//     document.body.appendChild(elem);
//     elem.init(); // Error: undefined is not a function
//   };

//   var script = document.createElement('<script>');
//   script.src = chrome.extension.getURL('something.js');
//   document.appendChild(script);


//   document.body.appendChild(link);
// }

// <template id="beardyModalTemplate">
// <style>
// .beardyModal{
//   font-family: sans-serif;
//   color: black:
//   position: fixed;
//   top: 5%;
//   right: 5%;
//   display: block;
//   width: 200px;
//   height: 200px;
//   z-index: 1000;
//   background-color: white;
//   padding: 30px;
//   box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 3px;
// }
// </style>
//   <div class="beardyModal" title="La Barbe !">
//     <h1>La barbe !</h1>
//     <p>Festival d'Angouleme, une belle assemblée virile que la barbe félicite !</p>
//   </div>
// </template>

// var t = document.querySelector('#beardyModalTemplate');
// t.content.querySelector('img').src = 'http://...';
// document.body.appendChild(t.content.cloneNode(true));

// var shadow = document.querySelector('#beardyModalHolder').createShadowRoot();
// //var shadow = document.querySelector('#beardyModalHolder').createShadowRoot();
// var template = document.querySelector('#beardyModalTemplate');
// var clone = document.importNode(template.content, true);
// shadow.appendChild(clone);




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