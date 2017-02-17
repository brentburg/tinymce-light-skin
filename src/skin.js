import skin from '../vendor/light/skin.min.css'
import content from '../vendor/light/content.min.css'
import inline from '../vendor/light/content.inline.min.css'

export function use () {
  skin.use()
}

export function unuse () {
  skin.unuse()
}

export const contentStyle = content.toString()

export const inlineStyle = inline.toString()

export default {
  use: use,
  unuse: unuse,
  contentStyle: contentStyle,
  inlineStyle: inlineStyle
}
