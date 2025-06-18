const elLoginForm = document.querySelector('.login-form');
const elLoginPassword = elLoginForm.querySelector('.login-password-input');
const elLoginEmail = elLoginForm.querySelector('.login-email-input')
const elRegisterBtn = document.querySelector('.register-btn');

elRegisterBtn.addEventListener('click', ()=> {
	window.location.replace('./register.html');
});

elLoginForm.addEventListener('submit', (evt)=> {
	evt.preventDefault();

	const userEmailValue = elLoginEmail.value;
	const userPasswordValue = elLoginPassword.value;

	console.log(userEmailValue, userPasswordValue);
	

	async function loginUser(user_email, user_password) {
		try {
			const res = await fetch('http://164.92.64.138:8000/users/auth/login/', {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: user_email,
					password: user_password
				})
			});

			const req = await res.json();

			console.log(req);

		} catch (error) {
			console.log(error)
		}
	}

	loginUser(userEmailValue, userPasswordValue);

});

