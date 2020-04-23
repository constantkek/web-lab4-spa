import $ from 'jquery'

export default class PokemonComponent {
  constructor(number) {
    this.number = number
  }
  async pokemonData() {
    const res = await $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${this.number}`,
      method: 'GET',
    })
    console.log(res)
    return res
  }
  
  async render() {
    const data = await this.pokemonData()
    return (
      `<div id="pokemon-container">
        <div id="img-contaier">
          <img src=${data.sprites.front_default} />
        </div>
        <h2 id="pokemon-name">${data.name}</h1>
        <h4 id="pokemon-name">${data.abilities.map(elem => {
          return elem.ability.name
        }).join(', ')}
        </h4>
      </div>`
    )
  }
}