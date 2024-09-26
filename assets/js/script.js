fetch('https://raw.githubusercontent.com/growkingscripts/growkingscripts.github.io/refs/heads/main/assets/json/resellers.json')
    .then(response => response.json())
    .then(data => {
		const resellerList = document.getElementById('resellerList');

		data.datas.forEach(reseller => {
			let div = document.createElement("div");
			div.classList.add("numbered-item");
			div.innerHTML = 'Username [Discord ID]: ' + reseller.username + ' [' + reseller.userid + ']';
			resellerList.appendChild(div);
		});
	});	
