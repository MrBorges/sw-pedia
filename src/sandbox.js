let fetchedChars = [];
const source = 'https://swapi.co/api/people/?search=';

const fetchChars = async (char) =>{
	console.log(`${source}${char}`);
	let response = await window.fetch(`${source}${char}`);	
	let returnedChar = await response.json();
	for (let item of returnedChar.results){
		await fetchedChars.push(item)
	}
}

fetchChars('R2');


for (let item of returnedChar.results){
		await fetchedChars.push(item)
	}
