export default class GotService {

	constructor(){
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}
	async getResource(url){
		const res = await fetch(`${this._apiBase}${url}`);
		if(!res.ok){
			throw new Error(`Could not fetch ${url}` + `, recieved ${res.status}`);
		}
			return await res.json();
	}
	async getAllCharacters(){
		const res = await this.getResource(`/characters?page=5&pageSize=10`);
		return res.map(this._transformCharacter);
	}
	async getCharacter(id){
		const character = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(character);
	}



	async getAllHouses(){
		const res = await this.getResource(`/houses?page=5&pageSize=10`);
		return res.map(this._transformHouse);
	}
	async getHouse(id){
		const house = await this.getResource(`/houses/${id}`);
		return this._transformHouse(house);
	}


	async getAllBooks(){
		const res = await this.getResource(`/books?page=5&pageSize=10`);
		return res.map(this._transformBook);
	}
	async getBook(id){
		const book = await this.getResource(`/books/${id}`);
		return this._transformBook(book);
	}



	_transformCharacter(char){
		return {
			 name: char.name,
				gender: char.gender,
				born: char.born,
				died: char.died,
				culture: char.culture
		}
	}
	_transformHouse(house){
		return {
			 name: house.name,
				region: house.region,
				words: house.words,
				titles: house.titles,
				overlord: house.overlord,
				ancestaralWeapons: house.ancestaralWeapons
		}
	}
	_transformBook(book){
		return {
			 name: book.name,
				numberOfPages: book.numberOfPages,
				publisher: book.publisher,
				released: book.released
				
		}
	}
}
const got = new GotService();
got.getAllCharacters()
.then(res => {
	console.log(res.forEach(item => console.log(item.name)));
});
got.getCharacter(130)
.then(res => console.log(res));

got.getAllHouses()
.then(res => {
	console.log(res.forEach(item => console.log(item.name)));
});
got.getHouse(10)
.then(res => console.log(res));

got.getAllBooks()
.then(res => {
	console.log(res.forEach(item => console.log(item.name)));
});
got.getBook(10)
.then(res => console.log(res));



