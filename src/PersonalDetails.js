import myFaceUrl from './assets/myFace.jpg'
import items from './items.json'

const template = `
  <img class="face" alt="My face" src="${myFaceUrl}" />
  <div class="info js-personal-details-info"></div>
`

export default class PersonalDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template
    const personalDetailsInfo = document.querySelector('.js-personal-details-info')

    this.itemsWithOffset
      .forEach((item, i) => {
        let containerEl
        if (item.href) {
          containerEl = document.createElement('a')
          containerEl.setAttribute('href', item.href)
          containerEl.setAttribute('target', '_blank')
        } else {
          containerEl = document.createElement('span')
        }

        item.name.split('').forEach((letter, j) => {
          containerEl.appendChild(this.getSpan(letter, item.offset + j))
        })

        personalDetailsInfo.appendChild(containerEl)
      })
  }

  get itemsWithOffset() {
    let offset = 0

    return items.map((item) => {
      const formatted = {
        ...item,
        offset,
      }
      offset += item.name.length
      return formatted
    })
  }

  get nrLetters() {
    return items.reduce((counter, item) => counter + item.name.length, 0)
  }

  getSpan(letter, offset) {
    const template = `
      <span class="letter" style="transform: ${this.getTransform(offset)}">
        ${letter}
      </span>
    `

    const span = document.createElement('span')
    span.innerHTML = template

    return span
  }

  getTransform(offset) {
    return `${this.getTurn(offset)}`
  }

  getTurn(offset) {
    const ratio = offset / this.nrLetters
    return `rotate(${ratio}turn)`
  }
}

customElements.define('personal-details', PersonalDetails)
