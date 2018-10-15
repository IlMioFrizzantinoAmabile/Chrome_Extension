console.log('Pompala');
var url;
var deh;
var culo;
var playMode = 'sustain';

function preload() {
 url = chrome.extension.getURL('audio/deh.mp3');
 deh = loadSound(url);
 url = chrome.extension.getURL('audio/culo.mp3')
 culo = loadSound(url);
 
 //culo.disconnect();
}


function setup() {
//  mic = new p5.AudioIn();
//  mic.start();
//	deh.loop();
 // mySound.setVolume(0.5);
}


function mousePressed() {
  volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  culo.amp(volume);
  
  
  
  culo.play();
  
  //var vol = mic.getLevel();
  //console.log(vol);
}

function keyPressed() {
	if (key == ' ') {
		culo.play();
	}
	else {
		deh.play();
	}
}