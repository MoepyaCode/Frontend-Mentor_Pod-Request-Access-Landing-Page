import React from 'react'

type Props = {
    className?: string
    children: React.ReactNode
}

export default function Main(props: Props) {
    return (
        <main className={`min-h-screen ${props.className}`}>
            {props.children}
        </main>
    )
}
