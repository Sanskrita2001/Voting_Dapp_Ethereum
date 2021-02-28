const butt = document.getElementById('sign_up_button');
butt.addEventListener('click', (e) => {
	e.preventDefault();
	gender = document.querySelector('input[name = gridRadios]:checked').value;
	const alertBox = document.getElementById('alert-box');
	const result = {
		name: document.getElementById('sign_up_Name').value,
		email: document.getElementById('sign_up_email').value,
		password: document.getElementById('sign_up_password').value,
		gender: 'male',
		voterNo: document.getElementById('sign_up_VoterId').value,
		aadharNumber: document.getElementById('sign_up_AadharId').value,
		address: document.getElementById('sign_up_Address').value,
		dateOfBirth: document.getElementById('sign_up_DOB').value,
		phoneNumber: document.getElementById('sign_up_phone').value,
	};
	console.log(result);
	console.log(result.name);

	register(result).then((data) => {
		console.log(data);
		alertBox.classList.remove('hidden');
		alertBox.firstElementChild.innerText = `Successfully Signed in as ${data.name}`;
	});
});

async function register(data) {
	const res = await fetch('http://localhost:5000/api/users', {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return res.json();
}