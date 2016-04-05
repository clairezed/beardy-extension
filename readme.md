Beardy extension - "La Barbe ! chrome extension"
=========

# What is it ?

La Barbe is a French direct action feminist group that fights gender inequality with sarcastic humour and fake beards.
This extension aims to highlight companies, events, organizations towards which La Barbe directed its actions.
This extension is directly linked to a small fake La Barbe website, that presents a few of these actions and has a dedicated API requested by the extension.

This extension is a personal exercise independant from La Barbe. It has no direct link with the activist group.

**Link to download the extension** : https://chrome.google.com/webstore/detail/la-barbe/ajapagjhlmidjgcbcbpfiambnfdaefah

**Website url** : https://beardy-website.herokuapp.com/


# How to

## How to install

### Installation from the chrome store

**Link to download the extension** : https://chrome.google.com/webstore/detail/la-barbe/ajapagjhlmidjgcbcbpfiambnfdaefah

### Installation locally on your computer

You can download the repository on your own computer and install the extension locally, in your browser.

```
$ cd the-place-you-want
$ git clone git@github.com:clairezed/beardy-extension.git
```

Then
- in your browser, go to: `chrome://extensions`
- enable `Developer mode`
- load the folder `beardy-extension` as an unpacked extension.


If you make changes in the extension, don't forget to reload it to see your changes :
- go to: chrome://extensions,
- find the extension,
- click on "Reload (Ctrl+R)")


## How to use

- visit [the fake La Barbe website](https://beardy-website.herokuapp.com/)
- navigate to the website of one of the organization listed on home page
- let magic happen !
*The fake website is hosted freely on heroku and therefore may be sleeping when you want to use the extension.*
*In case no magic happens, try to wake the fake website up by visiting it, then refresh the page you'd like to watch the extension on.*

# Documentation

## Principle

At first I tried to make use of multiple features of chrome extensions, but due to limitation I had no clue how to overtake, I ended up with a quite simple implementation.
- css and js injection on every website
- if the current website has already triggered the extension during the current session, nothing happens.
- else, a call is made to the fake La Barbe website API
- if the call response is positive, the extension is triggered and the pop up appears
- you can click on the pop up button to find more information about the male domination of this website

## Todo in case of motivation

- animated the beard ?
- options for the extension user? (fade out after X seconds, or not ; persistence...)


Random resources used during the development phase can be found in [doc/resources.md](/doc/resources.md)