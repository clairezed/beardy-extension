var organization;

// Call to external website, check current site
function checkUrl() {
  if(websiteNotVisitedYet()) {
    var url = window.location.host;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://beardy-website.herokuapp.com/api/organizations?website_url="+url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // JSON.parse does not evaluate the attacker's scripts.
        var resp = JSON.parse(xhr.responseText);
        if(resp.length > 0) {
          organization = resp[0];
          // saving in session to prevent modal from constantly showing
          sessionStorage.setItem('beardy_v', 'true')
          buildModalDiv();
        }
      }
    }
    xhr.send();
  }
}

var websiteNotVisitedYet = function() {
  return sessionStorage.beardy_v !== 'true';
  // return true;
}
// Construction modalDiv ============================================


var buildModalDiv = function() {
  var modalDiv = document.createElement('div');
  modalDiv.setAttribute('class', 'beardyModal beardyModal--animated');
  modalDiv.setAttribute('title', 'La barbe !');

  var header = buildHeader()
  modalDiv.appendChild(header)

  var arrow = document.createElement('span');
  arrow.setAttribute('class', 'beardyModal--arrow');
  modalDiv.appendChild(arrow)

  var content = buildContent();
  modalDiv.appendChild(content);

  var footer = buildFooter(modalDiv);
  modalDiv.appendChild(footer);

  // return modalDiv;
  document.body.appendChild(modalDiv);
}

var buildHeader = function() {
  var headerDiv = document.createElement('div');
  headerDiv.setAttribute('class', 'beardyModal--header');

  var pictureWrapper = document.createElement('div');
  pictureWrapper.setAttribute('class', 'beardyModal--pictureWrapper');
  headerDiv.appendChild(pictureWrapper);

  var beardPic = document.createElement('img');
  beardPic.setAttribute('class', 'beardyModal--picture');
  beardPic.src = chrome.extension.getURL("img/beard01.png");
  pictureWrapper.appendChild(beardPic);

  var title = document.createElement('h1');
  title.setAttribute('class', 'beardyModal--title');
  title.innerText = "LA BARBE !"
  headerDiv.appendChild(title);

  return headerDiv;
}

var buildContent = function() {
  var contentDiv = document.createElement('div');
  contentDiv.setAttribute('class', 'beardyModal--content');

  var paragraph1 = document.createElement('p');
  paragraph1.innerText = "La Barbe félicite";
  contentDiv.appendChild(paragraph1);
  var paragraph2 = document.createElement('p');
  paragraph2.innerText = organization.name
  paragraph2.setAttribute('class', 'beardyModal--strong-paragraph');
  contentDiv.appendChild(paragraph2);
  var paragraph3 = document.createElement('p');
  paragraph3.innerText = "pour son sens aigu et affirmé de l'entre couilles.";
  contentDiv.appendChild(paragraph3);

  return contentDiv;
}

var buildFooter = function(modalDiv) {
  var footerDiv = document.createElement('div');
  footerDiv.setAttribute('class', 'beardyModal--footer');

  var dismissBtn = document.createElement('button');
  dismissBtn.setAttribute('class', 'beardyModal--dismiss-btn');
  dismissBtn.innerText = "Fermer";
  footerDiv.appendChild(dismissBtn);

  var ctaBtn = document.createElement('a');
  ctaBtn.setAttribute('class', 'beardyModal--button');
  var link = build_link(organization);
  ctaBtn.href = link;
  ctaBtn.title = "Voir pourquoi cette organisation s'est faite barbée"
  ctaBtn.target = '_blank';
  ctaBtn.innerText = "En savoir plus";
  footerDiv.appendChild(ctaBtn);

  bind_dismiss_button(dismissBtn, modalDiv);

  return footerDiv;
}

var build_link = function(organization) {
  var link =  "https://beardy-website.herokuapp.com/#" + organization.slug
  return link
}

var bind_dismiss_button = function(btn, container) {
  btn.addEventListener('click', function() {
    container.className += " beardyModal--hide";;
  }, false);
}

checkUrl();


// Injecting content in current tab ---------------------------------------------
// To inject CSS, use tabs.insertCSS.


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
//  - prefer to inject content via innerText rather than innerText.