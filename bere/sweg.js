console.log('Deh, ti puzza il culo');
var urlOld;
var urlNew;

let filenames = [
  "bere.jpg"
];

let imgs = document.getElementsByTagName('img');
let aaa = document.getElementsByTagName('a');


for (let imgElt of imgs) {
  let file = 'foto/bere.jpg'
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  //imgElt.data-thumb_url = url;
  imgElt.alt = 'Il Bere si rasa';
}

for (let aElem of aaa) {
  urlNew = aElem.href;
  aElem.href = urlOld;
  urlOld = urlNew;
  aElem.title = 'Il Bere si rasa';
  
  if (Math.random() > 0.9) {
  aElem.href = 'https://it.wikipedia.org/wiki/Carl_Friedrich_Gauss';
  }
  if (Math.random() > 0.99) {
  aElem.href = ' https://it.pornhub.com/view_video.php?viewkey=ph5b7c2ae454697';
  }
}