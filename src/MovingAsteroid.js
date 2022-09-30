import asteroid from './assets/asteroid.png'

const template = `
  <img alt="Asteroid" src="${asteroid}" />
`

export default class MovingAsteroid extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template

    const personalDetails = document.querySelector('personal-details')
    const { x, y } = personalDetails.getBoundingClientRect()
    const { innerHeight, innerWidth } = window
    const path = `"M 100,${innerHeight + 50} Q ${Math.round(x) - 250},${Math.round(y) - 250} ${innerWidth + 50},100"`
    this.style.offsetPath = `path(${path})`
    this.style.animation = 'move 10000ms forwards ease-in 1500ms'
  }
}

customElements.define('moving-asteroid', MovingAsteroid)
