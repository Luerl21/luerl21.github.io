var $=jQuery.noConflict();jQuery(function($){
$(".video").each(function(){
$(".volume-button").click(function mute(){
	$(".volume-button").toggleClass('fa-volume-mute').toggleClass('fa-volume-up');
	$("video").prop('muted',!$("video").prop('muted'));});});});
function refresh(){
var count = Math.floor(Math.random() * videoArray.length);
document.getElementsByTagName('source')[0].src = "./videos/" + videoArray[count];video.load();}
var videoArray = ["bluelock.mp4","Blake Basic  BAD INFLUENCE ft Yamakazi.mp4","UNDAGROUND ENEMY.mp4","GHOSTEMANE  Pouya  Stick Out.mp4","PLAYBOI CARTI  LET EM IN.mp4", "6HOST I HOPE YOU CAVE.mp4", "jpn amend.mp4"];

function pauseplay(x) {
	x.classList.toggle("fa-play");
	x.classList.toggle("fa-pause");
    if(video.paused) {
    	video.play();
		video.muted = "";
	}	
	else video.pause();video.muted = "";
}

document.addEventListener('DOMContentLoaded', function() {
	var x = this.getElementById("pause/play");
	document.getElementById("video").addEventListener('loadeddata', function() {
		x.classList.replace("fa-play", "fa-pause");
	 }, false);
	document.addEventListener('visibilitychange', function() {
		if (document.hidden) {
			video.pause();
			x.classList.replace("fa-pause", "fa-play");
		} else {
			video.play();
			x.classList.replace("fa-play", "fa-pause");
		}
	});
});
