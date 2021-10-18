import React from 'react'
import './index.less'
import { useGlobalStates, modifyGlobalStates } from './store/global-states'
import { GlobalStatesModificationType } from './store/global-states.type'

export default function () {
  const { currentCount } = useGlobalStates()
  return (
    <div>
      <p className="text">count: {currentCount}</p>
      <button
        onClick={() =>
          modifyGlobalStates(
            GlobalStatesModificationType.SET_CURRENT_COUNT,
            currentCount + 1
          )
        }
      >
        +1
      </button>
    </div>
  )
}
