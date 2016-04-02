Beardy extension
=========

*2016/01 - Development in progress*

# How to

## How to install

It's not available yet in chrome store !

In the meanwhile, you can install it yourself in your browser.
```
$ cd the-place-you-want
$ git clone git@github.com:clairezed/beardy-extension.git
```
Then
- in your browser, go to: chrome://extensions
- enable Developer mode
- load app as an unpacked extension.

Don't forget to reload it (go to: chrome://extensions, find the extension, click on "Reload (Ctrl+R)") if you change something in the extension !

## How to use

Navigate to manly organizations website (http://www.bdangouleme.com, for instance), and enjoy !
*You may have to insist, to wake external server up. Try alternatively to reload the extension and the webpage you're on)*

# Documentation

## Principle

- on Install and on Update : get full list of urls on external website and stock them in localStorage
- if can't reach external website : chek localStorage
- if localStorage is empty : check cheat Array here for demo purpose

Links and information I use to develop this app (in perpetual evolution)

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


## Resources

### Generic
- [Understanding Google Chrome Extensions](https://gist.github.com/jjperezaguinaga/4243341)
- https://coderwall.com/p/hkmedw/understanding-chrome-extensions
- https://css-tricks.com/colorpeek-part-2-building-first-chrome-extension/

- To insert code into a page, your extension must have cross-origin permissions for the page. It also must be able to use the chrome.tabs module.


### This extension problematics specific

- http://stackoverflow.com/questions/10340481/popup-window-in-chrome-extension
- http://stackoverflow.com/questions/14765354/how-do-i-adjust-my-chrome-extensions-manifest-jsons-matches-key-dynamically

Inject only on selected pages :

- http://stackoverflow.com/questions/26667112/optionally-inject-content-script
- http://stackoverflow.com/questions/9515704/building-a-chrome-extension-inject-code-in-a-page-using-a-content-script
- http://stackoverflow.com/questions/9880773/inject-chrome-browser-extension-content-script-based-on-url

css isolation

- http://anderspitman.com/blog/2014/08/04/chrome-extension-content-script-stylesheet-isolation/

### Use templates in extensions

- http://stackoverflow.com/questions/14250210/what-is-the-suggested-way-to-use-template-in-chrome-content-scripts
- http://stackoverflow.com/questions/12616158/js-templating-in-google-chrome-extensionmanifest-v2

### Examples on github

- https://github.com/adam-p/markdown-here : big, with content scripts and common files
- https://github.com/yeoman/generator-chrome-extension : yeoman extension generator

### Other stuff
- Tuto using node web server, extension and socket io to display realtime notifications : http://blog.zenika.com/2011/05/11/a-full-javascript-architecture-part-two-chrome-extension2/
- extension saving title, url and selected text as summary to bookmarks http://markb.co.uk/building-a-simple-google-chrome-extension.html


## Todo

// Appearance :

- isolating : shadow dom ? iframe ?
- make beardy pop up a template
- style the whole
- animated beard ?

// Internal :

- make it non persistent for a whole webpage (once it has been seen on one page, doesn't shows up again)
- choose when to call external website (on installed ?)
- stock 'website' variable on local storage ?
- options ? (fade out after X seconds, or not)