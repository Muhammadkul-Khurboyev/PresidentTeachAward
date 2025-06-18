const elBackBtn = document.querySelector('.back-btn');
const elNextBtn = document.querySelector('.next-btn');
const elStudentType = document.querySelector('.student');
const elTeacherType = document.querySelector('.teacher');
const elLoginBtn = document.querySelector('.login-btn');

elLoginBtn.addEventListener('click', ()=> {
	window.location.replace('./login.html')
})

const userTypeId = window.localStorage.getItem('registerUserId');

console.log(userTypeId);


elBackBtn.addEventListener('click', ()=> {
	window.location.replace('./register.html')
});

let userType = '';

elStudentType.addEventListener('click', ()=> {
	userType = 'student'
});

elTeacherType.addEventListener('click', ()=> {
	userType = 'teacher'
});

elNextBtn.addEventListener('click', ()=> {

	async function postUserType(user_type) {

		try {
			const res = await fetch(`http://164.92.64.138:8000/users/auth/register/step2/${userTypeId}/`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					user_type: user_type
				})
			});

			const req = await res.json();
			console.log(req);
			

		} catch (error) {
			console.log(error);
		}
	}
	postUserType(userType)

})