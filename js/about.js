function About()
{
	this.init();
}

About.prototype =
{
	container: null,

	init: function()
	{
		var text, containerText;

		this.container = document.createElement("div");
		this.container.className = 'gui';
		this.container.style.position = 'absolute';
		this.container.style.top = '0px';
		this.container.style.visibility = 'hidden';

		containerText = document.createElement("div");
		containerText.style.margin = '10px 10px';
		containerText.style.textAlign = 'left';
		this.container.appendChild(containerText);

		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = '<a href= "inspiration.html">Get inspiration</a> | <a href="draw.html">Draw</a> | <a href="anno-edit.html">Coloring</a> | <a href="coloring_advanced.html">Advanced coloring</a> | <a href="homepage.html">Home</a>';
		containerText.appendChild(text);

		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = '~';
		containerText.appendChild(text);

		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = 'To re-adjust the brush size press F to increase the size and D to decrease.';
		containerText.appendChild(text);

		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = '~';
		containerText.appendChild(text);

		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = 'This drawing tool is called <strong>Harmony</strong> and is an original work of <strong>mr. doob</strong>; thanks to mr. doob for this amazing creation.';
		containerText.appendChild(text);
	},

	show: function()
	{
		this.container.style.visibility = 'visible';
	},

	hide: function()
	{
		this.container.style.visibility = 'hidden';
	}
}
