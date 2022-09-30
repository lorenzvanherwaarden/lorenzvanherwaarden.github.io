import rocket from './assets/rocket.png'

const template = `
  <img alt="Rocket" src="${rocket}" />
`

export default class MovingRocket extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template

    const personalDetails = document.querySelector('personal-details')
    const { x, y, width, height } = personalDetails.getBoundingClientRect()
    const { innerHeight, innerWidth } = window
    const path = `"M ${innerWidth / 2 - 150},${innerHeight + 50} Q ${Math.round(x + width) + 250},${Math.round(y + height) + 250} ${innerWidth / 2 + 150},-50"`
    this.style.offsetPath = `path(${path})`
    this.style.animation = 'move 10000ms forwards ease-in 9500ms'

  }
}

customElements.define('moving-rocket', MovingRocket)
