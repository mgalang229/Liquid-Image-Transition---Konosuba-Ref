
new hoverEffect({
	parent: document.querySelector(".distortion"),
	intensity: 0.2,
	image1: "bw1.jpg",
	image2: "bw2.jpg",
	displacementImage: "heightMap.png"
});

const distortion = document.querySelector('.distortion');

distortion.onclick = function(){
	window.open('https://konosuba.fandom.com/wiki/Megumin');
}