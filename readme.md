Beardy extension
=========

## Element of the extensions (defined in manifest)

- **Background Pages** : persistent background script or event script that plays the role of a bridge between the other parts of the extension.
- **Content Scripts** : needed to access to the current page's DOM, it will be executed with every refresh
- **cross-origin XMLHttpRequests** : to communicate with server

Types of extension (UI)
- **Browser Action extension** : puts a button in the Chrome toolbar that will show an HTML page when clicked and optionally execute some JavaScript.
- **Page Action** : work only on certain pages


## How to test locally

In your browser's address bar, just type in:

```
chrome://extensions
```


Make sure that you check Developer mode and click the Load unpacked extension... button. Then simply select the folder from your hard disk which contains the extension's files.

## Debugging

- `Content Scripts` is shown in the Combo box of Scripts tab of Developer Tools.
- `popup.js` can be found if I right click the extension icon and choose "Inspect popup".
- `background.js`  is loaded in the background. To inspect it visit chrome://extensions, find the loaded extension, and "inspect active views" for the background script.


## Documentation

### Generic
- [Understanding Google Chrome Extensions](https://gist.github.com/jjperezaguinaga/4243341)
- https://coderwall.com/p/hkmedw/understanding-chrome-extensions

- To insert code into a page, your extension must have cross-origin permissions for the page. It also must be able to use the chrome.tabs module.


### This extension problematics specific

- http://stackoverflow.com/questions/10340481/popup-window-in-chrome-extension
- http://stackoverflow.com/questions/14765354/how-do-i-adjust-my-chrome-extensions-manifest-jsons-matches-key-dynamically

Inject only on selected pages :

- http://stackoverflow.com/questions/26667112/optionally-inject-content-script
- http://stackoverflow.com/questions/9515704/building-a-chrome-extension-inject-code-in-a-page-using-a-content-script
- http://stackoverflow.com/questions/9880773/inject-chrome-browser-extension-content-script-based-on-url

### Use templates in extensions

- http://stackoverflow.com/questions/14250210/what-is-the-suggested-way-to-use-template-in-chrome-content-scripts
- http://stackoverflow-.com/questions/12616158/js-templating-in-google-chrome-extensionmanifest-v2

### Examples on github

- https://github.com/adam-p/markdown-here : big, with content scripts and common files
- https://github.com/yeoman/generator-chrome-extension : yeoman extension generator

### Other stuff
- Tuto using node web server, extension and socket io to display realtime notifications : http://blog.zenika.com/2011/05/11/a-full-javascript-architecture-part-two-chrome-extension2/
- extension saving title, url and selected text as summary to bookmarks http://markb.co.uk/building-a-simple-google-chrome-extension.html