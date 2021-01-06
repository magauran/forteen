/* eslint-disable */
export const KEYBOARD_DID_OPEN = 'keyboardDidShow'
export const KEYBOARD_DID_CLOSE = 'keyboardDidHide'
const KEYBOARD_THRESHOLD = 150

let previousVisualViewport: any = {}
let currentVisualViewport: any = {}

let previousLayoutViewport: any = {}
let currentLayoutViewport: any = {}

let keyboardOpen = false

export const startKeyboardAssist = (win: Window) => {
  if (!win.visualViewport) { return }

  currentVisualViewport = copyVisualViewport(win).visualViewport
  currentLayoutViewport = copyLayoutViewport(win)

  win.visualViewport.onresize = () => {
    trackViewportChanges(win)

    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win)
    } else if (keyboardDidClose(win)) {
      setKeyboardClose(win)
    }
  }
}

export const setKeyboardOpen = (win: Window, ev?: any) => {
  fireKeyboardOpenEvent(win, ev)
  keyboardOpen = true
}

export const setKeyboardClose = (win: Window) => {
  fireKeyboardCloseEvent(win)
  keyboardOpen = false
}

export const keyboardDidOpen = (): boolean => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale
  return (
    !keyboardOpen &&
    previousVisualViewport.width === currentVisualViewport.width &&
    scaledHeightDifference > KEYBOARD_THRESHOLD
  )
}

export const keyboardDidResize = (win: Window): boolean => {
  return keyboardOpen && !keyboardDidClose(win)
}

export const keyboardDidClose = (win: Window): boolean => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight
}

const fireKeyboardOpenEvent = (win: Window, nativeEv?: any): void => {
  const keyboardHeight: number = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: keyboardHeight
  })

  win.dispatchEvent(ev)
}

const fireKeyboardCloseEvent = (win: Window): void => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE)
  win.dispatchEvent(ev)
}

export const trackViewportChanges = (win: Window) => {
  previousVisualViewport = { ...currentVisualViewport }
  currentVisualViewport = copyVisualViewport(win.visualViewport)

  previousLayoutViewport = { ...currentLayoutViewport }
  currentLayoutViewport = copyLayoutViewport(win)
}

export const copyVisualViewport = (visualViewport: any): any => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  }
}

export const copyLayoutViewport = (win: Window): any => {
  return {
    width: win.innerWidth,
    height: win.innerHeight
  }
}
