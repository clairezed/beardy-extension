// var organizations = ['www.agglo-epinal.fr', 'www.grandlyon.com', 'http://localhost:3000/']
var organizations;
var currentUrl;


chrome.runtime.onMessage.addListener(function(request) {
  console.log("runtime + onMessage : ")
  console.log(request);
})

// Chrome RUNTIME =====================================================================

chrome.runtime.onStartup.addListener(function() {
  console.log("runtime ON STARTUP");
})

chrome.runtime.onConnect.addListener(function() {
  console.log("runtime ON CONNECT");
})

chrome.runtime.onInstalled.addListener(function() {
  console.log("runtime ON INSTALLED");
  getDataAndSetListeners();
});

chrome.runtime.onSuspend.addListener(function() {
  console.log("runtime ON SUSPEND");
})

chrome.runtime.onUpdateAvailable.addListener(function() {
  console.log("runtime ON onUpdateAvailable");
  getDataAndSetListeners();
})

chrome.runtime.onConnect.addListener(function() {
  console.log("runtime ON onConnect");
})


chrome.runtime.onRestartRequired.addListener(function() {
  console.log("runtime ON onRestartRequired");
})

function getDataAndSetListeners() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://beardy-website.herokuapp.com/api/organizations", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // JSON.parse does not evaluate the attacker's scripts.
      var resp = JSON.parse(xhr.responseText);
      console.log("XHR RESP : ");
      console.log(resp);
      organizations = resp

      chrome.storage.sync.set({'beardy_data': resp}, function() {
          // Notify that we saved.
          console.log('Settings saved');
          chrome.storage.sync.get('beardy_data', function (result) {
            console.log(result)
          });
        });
      // Add listeners ---------------
      SetListeners()
    }
  }
  xhr.send();
}

function SetListeners() {

  organizations.forEach(function(orga) {
    // console.log(orga);

    chrome.webNavigation.onCommitted.addListener(function(e) {
        console.log("WEB NAVIGATION / ON COMMITTED ===================");
        //chrome.tabs.executeScript(null, {file: "content.js"});
        chrome.tabs.executeScript(null, {
          code: 'var organization = ' + JSON.stringify(orga)
        }, function() {
          chrome.tabs.executeScript(null, {file: "content.js"});
        });

    }, {url: [{ urlContains: orga.website_url }]})
  })
};

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) {
    var storageChange = changes[key];
    console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);
  }
});



// Chrome TABS =====================================================================

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log('tabs.onUpdated : ');
  // console.log("tabId : "+tabId);
  // console.log("change : ");
  // console.log(change);
  console.log("tab : ");
  console.log(tab);
  chrome.tabs.getSelected(null,function(tab){
  console.log("tabs.getSelected : ");
    console.log(tab);
    console.log(tab.url);
    currentUrl=tab.url;
  });

//   // if (change.status == "complete") {
//   //       chrome.tabs.create({
//   //         url: chrome.extension.getURL('dialog.html'),
//   //         active: false
//   //       }, function(tab) {
//   //         // After the tab has been created, open a window to inject the tab
//   //         chrome.windows.create({
//   //           tabId: tab.id,
//   //           type: 'popup',
//   //           focused: true
//   //           // incognito, top, left, ...
//   //         });
//   //       });
//   // }
});

// ways to create popup :
// - window.open
// - chrome.windows.create

// chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
//   console.log('tabs.onSelectionChanged : ');
//   console.log(tabId);

//   // selectedId = tabId;
//   // updateSelected(tabId);
// });

// Ensure the current selected tab is set up.
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  console.log("Tabs.query : ");
  console.log(tabs);
  // updateAddress(tabs[0].id);
});


// WebNavigation ===============================================
//TODO : truover meilleure façon de chrcher sur les organizations ?
// organizations.forEach(function(url) {
  // chrome.webNavigation.onCommitted.addListener(function(e) {
  //     console.log("WEB NAVIGATION OnCommited XXXXXXXXXXXXXXXXXXXXXXXXX");
//       chrome.tabs.executeScript(null, {file: "content.js"});
//   }, {url: [{ urlContains: url }]})
// })

// DeclarativeContent ===============================================

// chrome.declarativeContent.RequestContentScript -> to insert a content script in a given page

// Ou bien
// - chrome.webNavigation.onComitted ou onCompleted with filters + chrome.tabs.executeScript

// chrome.browserAction.onClicked.addListener(function(tab) {
//   console.log("browserAction.onClicked")
//   console.log(tab)
//   chrome.tabs.executeScript(null, {file: "content_script.js"});
// });
