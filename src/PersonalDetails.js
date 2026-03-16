import items from './items.json'

const template = `
  <div class="personal-details">
    <img class="personal-details__face" alt="Profile picture" src="/profile-picture.webp" />
    <div class="personal-details__info js-personal-details-info">
    </div>
  </div>
`

export default class PersonalDetails extends HTMLElement {
  #cachedItemsWithOffset = null
  #cachedNrLetters = null

  connectedCallback() {
    this.innerHTML = template
    const personalDetailsInfo = this.querySelector('.js-personal-details-info')

    this.itemsWithOffset
      .forEach((item) => {
        let containerEl
        if (item.href) {
          containerEl = document.createElement('a')
          containerEl.setAttribute('href', item.href)
          containerEl.setAttribute('target', '_blank')
          containerEl.setAttribute('rel', 'noopener noreferrer')
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
    if (this.#cachedItemsWithOffset !== null) {
      return this.#cachedItemsWithOffset
    }

    let offset = 0

    this.#cachedItemsWithOffset = items.map((item) => {
      const formatted = {
        ...item,
        offset,
      }
      offset += item.name.length
      return formatted
    })

    return this.#cachedItemsWithOffset
  }

  get nrLetters() {
    if (this.#cachedNrLetters !== null) {
      return this.#cachedNrLetters
    }

    this.#cachedNrLetters = items.reduce((counter, item) => counter + item.name.length, 0)
    return this.#cachedNrLetters
  }

  getSpan(letter, offset) {
    const span = document.createElement('span')
    span.className = 'personal-details__letter'
    span.textContent = letter
    span.style.transform = this.getTurn(offset)
    return span
  }

  getTurn(offset) {
    const ratio = offset / this.nrLetters
    return `rotate(${ratio}turn)`
  }
}

customElements.define('personal-details', PersonalDetails)
