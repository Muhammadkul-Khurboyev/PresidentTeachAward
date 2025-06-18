async function getData() {
	try {
		const respons = await fetch('http://164.92.64.138:8000');

		const data = await respons.json();

		console.log(data)
	} catch (error) {
		console.log('HAtolik tuz berdi: ', error)
	}
}


getData();
