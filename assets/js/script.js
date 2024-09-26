// Ambil data dari file JSON
fetch('https://raw.githubusercontent.com/')
    .then(response => response.json())
    .then(data => {
		const resellerList = document.getElementById('resellerList');

		// Iterasi melalui data dan tambahkan ke list
		data.datas.forEach(reseller => {
			let div = document.createElement("div");
			div.classList.add("numbered-item");
			div.innerHTML = 'Username [Discord ID]: ' + reseller.username + ' [' + reseller.userid + ']';
			resellerList.appendChild(div);
		});
	});