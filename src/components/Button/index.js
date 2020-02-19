import React from 'react'

export default function Button({children, type, handleAction}) {
    return (
        <button  onClick={handleAction}>
            {children}
        </button>
    )
}

