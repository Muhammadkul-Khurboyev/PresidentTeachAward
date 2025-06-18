const elRegisterForm = document.querySelector('.register-form');
const elUserFullName = elRegisterForm.querySelector('.username-input');
const elUserEmail = elRegisterForm.querySelector('.user-email-input')
const elUserPassword = elRegisterForm.querySelector('.user-password-input');
const elUserRewritePassword = elRegisterForm.querySelector('.user-rewrite-password-input');
const elSubmitBtn = elRegisterForm.querySelector('.register-form-btn');
const elLoginBtn = document.querySelector('.login-btn');

elLoginBtn.addEventListener('click', ()=> {
	window.location.replace('./login.html')
})


elRegisterForm.addEventListener('submit', (evt) => {
	evt.preventDefault();

	const username = elUserFullName.value;
	const email = elUserEmail.value;
	const password1 = elUserPassword.value;
	const password2 = elUserRewritePassword.value;


	async function postUserInfo(username, email, password1, password2){
		try {
			const res = await fetch('http://164.92.64.138:8000/users/auth/register/step1/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					full_name: username,
					email: email,
					password1: password1,
					password2: password2
				})
			});

			const registerData = await res.json()

			window.localStorage.setItem('registerToken', registerData.access);
			window.localStorage.setItem('registerUserId', registerData.user_id);
			window.location.replace('./user-type.html')
			

		} catch (error) {
			console.log(error);
		}
	}

	postUserInfo(username, email, password1, password2);

})