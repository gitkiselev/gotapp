export default class GotService {

	constructor(){
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}
	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		if(!res.ok){
			throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
		}
			return await res.json();
	}
	getAllCharacters = async () => {
		const res = await this.getResource(`/characters?page=5&pageSize=10`);
		return res.map(this._transformCharacter);
	}
	getCharacter = async (id) => {
		const character = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(character);
	}



	getAllHouses = async () => {
		const res = await this.getResource(`/houses?page=5&pageSize=10`);
		return res.map(this._transformHouse);
	}
	getHouse = async (id) => {
		const house = await this.getResource(`/houses/${id}`);
		return this._transformHouse(house);
	}


	getAllBooks = async () => {
		const res = await this.getResource(`/books`);
		return res.map(this._transformBook);
	}
	getBook = async (id) => {
		const book = await this.getResource(`/books/${id}`);
		return this._transformBook(book);
	}



	_transformCharacter(char){
		return {
			 name: char.name,
				gender: char.gender,
				born: char.born,
				died: char.died,
				culture: char.culture,
				id: char.url.match(/\d+$/).join()
		}
	}
	_transformHouse(house){
		return {
			 name: house.name,
				region: house.region,
				words: house.words,
				titles: house.titles,
				overlord: house.overlord,
				ancestralWeapons: house.ancestralWeapons,
				id: house.url.match(/\d+$/).join()
		}
	}
	_transformBook(book){
		return {
			 name: book.name,
				numberOfPages: book.numberOfPages,
				publisher: book.publisher,
				released: book.released,
				id: book.url.match(/\d+$/).join()
		}
	}
}
/*const got = new GotService();
got.getAllCharacters()
.then(res => {
	//console.log(res.forEach(item => console.log(item.name)));
});
got.getCharacter(130)
.then(res => console.log(res));

got.getAllHouses()
.then(res => {
	//console.log(res.forEach(item => console.log(item.name)));
});
got.getHouse(10)
.then(res => console.log(res));

got.getAllBooks()
.then(res => {
	//console.log(res.forEach(item => console.log(item.name)));
});
got.getBook(10)
.then(res => console.log(res));*/



