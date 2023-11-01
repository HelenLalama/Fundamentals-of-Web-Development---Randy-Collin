document.addEventListener('DOMContentLoaded', function () {

	const paintings = JSON.parse(arrayOfObj);
	const figure = document.querySelector('figure');
	const ul = document.querySelector('ul');
	
	for (let i = 0; i < paintings.length; i++) {
		const li = document.createElement('li');
		const figure = document.createElement('figure');
		const img = document.createElement('img');
		
		img.src = `images/small/` + paintings[i].id + `.jpg`;
		img.dataset.id = paintings[i].id; 
		
		figure.appendChild(img);
		li.appendChild(figure);
		ul.appendChild(li);
	}
	
	const h3 = document.querySelector('h3');
	const h2 = document.querySelector('h2');
	const description = document.getElementById('description');

	let figures = document.querySelectorAll("figure");

	for (let fig of figures) {
		fig.addEventListener('click', (e) => {
			const imageid = e.target.dataset.id;
			const myPainting = paintings.find(painting => painting.id == imageid);
			figure.innerHTML = "";

			const largeimg = document.createElement('img');
			largeimg.src = `images/large/${imageid}.jpg`;

			h3.textContent = `${myPainting.title}`;
			h2.textContent = `${myPainting.artist}`;

			figure.appendChild(largeimg);

			for (let i = 0; i < myPainting.features.length; i++) {
				const div = document.createElement('div');
				div.className = 'box';
				div.style.position = 'absolute';

				div.style.left = `${myPainting.features[i].upperLeft[0]}px`;
				div.style.top = `${myPainting.features[i].upperLeft[1]}px`;
				div.style.width = `${myPainting.features[i].lowerRight[0] - myPainting.features[i].upperLeft[0]}px`;
				div.style.height = `${myPainting.features[i].lowerRight[1] - myPainting.features[i].upperLeft[1]}px`;

				div.addEventListener("mouseover", () => {
					description.textContent = myPainting.features[i].description;
				});

				div.addEventListener("mouseout", () => {
					description.textContent = "";
				});

				figure.appendChild(div);
			}

		});
	}

});
