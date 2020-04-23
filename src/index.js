import $ from 'jquery'
import InfoComponent from './components/info.component.js'
import PokemonComponent from './components/pokemon.component.js'
import './styles/styles.css'

const renderInfo = () => {
  const info = new InfoComponent()
  $('#content').html(info.render())
}

const renderPokemon = async() => {
  const pokemon = new PokemonComponent(Math.floor(Math.random() * 100))
  $('#content').html(await pokemon.render())
}

$('#root').html(`
  <div id="wrapper">
    <ul id="header">
      <li><a class="header-elem" id="link-info" href="#">Информация</a></li>
      <li><a class="header-elem" id="link-pokemon" href="#">Покемон</a></li>
    </ul>
    <div id="content"></div>
  </div>`
)

$('.header-elem').on('click', event => {
  if (event.target.id === 'link-info') {
    renderInfo()
  } else {
    renderPokemon()
  }
})

renderInfo()