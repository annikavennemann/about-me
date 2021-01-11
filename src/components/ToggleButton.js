import React from 'react'

export default function ToggleButton({hideMenu, showMenu, isActive, onClick}) {
    return <button onClick={onClick}>{isActive ? showMenu : hideMenu}</button>
   }
