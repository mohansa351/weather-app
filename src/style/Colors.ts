export const graySteps = 8
// latest grey color to change all screens background and top bar
export function grayStep(step: number, alpha: number = 1.0): string {
  if (step > graySteps) {
    console.warn(
      `function getGray called with step greater than configured steps. Using ${graySteps} instead.`,
    )
    step = graySteps
  } else if (step < 0) {
    console.warn(
      'function getGray called with step less than zero. Using 0 instead.',
    )
    step = 0
  }
  return `hsla(0, 0%, ${(1 / graySteps) * 100 * (graySteps - step)}%, ${alpha})`
  // return latestGrey
}
export const grey54= '#545454'

export const offblack43 = '#434344'
export const grey92 = '#929292'
export const black = '#000000'
export const offblack = '#282A37'
export const white = '#FFFFFF'
export const offwhite = '#F8F7FC'
export const offgrey = '#F5F3F3'
export const blue = '#0F376F'
export const lightwhite = '#F7F7F9'
export const linearGradient = '#0F366C'
export const linearGradient2 = '#154484'
export const orange = '#F0B000'
export const lightorange = '#E99762'
export const offgreen = '#78B439'
export const darkgreen = '#0D3E51'
export const heartRed = '#fa324d'
export const darkBlue = '#0B2850'
export const darkerBlue = '#14347B'
export const semiDark = '#1B1E28'
export const green = '#22C4DC'
export const extraskyBlue = '#11B2DC'
export const lightBlue = '#25BAD0'
export const lightGreen = '#02242D'
export const buttonBlue = '#0373FF'
export const borderBlue = '#1E447A'
export const grey = '#272727'
export const lightgrey = '#D9D9D9'
export const lightBlack = '#383838'
export const blueGrey = '#5D6A83'
export const bluish = '#195BB6'
export const skyFade = '#246DD2'
export const fadeRrrorRed = '#A60014'
export const extraFadeRrrorRed = '#E93F33'
export const totalColour = '#304EB9'
export const pendingColour = '#DE5200'
export const redColour = '#DF3535'
export const silverColour = '#AC8F00'
export const inprocessolour = '#2FB900'
export const purple = '#762DBF'
export const lightpurple = '#EAE8FE'
export const extraERrrorRed = '#dc9aa2'

