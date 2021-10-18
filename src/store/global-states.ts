import { useState, useEffect } from 'react'
import {
  GlobalStates,
  GlobalStatesModificationType
} from './global-states.type'

let listeners = []

let globalState: GlobalStates = {
  currentCount: 0
}

const broadcast = () => {
  listeners.forEach((listener) => {
    listener(globalState)
  })
}

export const modifyGlobalStates = (
  operation: GlobalStatesModificationType,
  payload: any
) => {
  switch (operation) {
    case GlobalStatesModificationType.SET_CURRENT_COUNT:
      globalState = Object.assign({}, globalState, { currentCount: payload })
  }
  broadcast()
}

export const useGlobalStates = () => {
  const [value, newListener] = useState(globalState)

  useEffect(() => {
    listeners.push(newListener)
    return () => {
      listeners = listeners.filter((listener) => listener !== newListener)
    }
  })

  return value
}
