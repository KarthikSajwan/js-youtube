const dc_heroes = ["superman", "flash", "batman"]
const marvel_heroes = ["thor", "ironman", "spiderman"]

const all_Heroes = marvel_heroes.concat(dc_heroes)
console.log(all_Heroes);

const allHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allHeroes);