import {$} from '@core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }
  getRoot() {
    const $root = $.create('div', 'excel')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      // eslint-disable-next-line no-unused-vars
      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
}