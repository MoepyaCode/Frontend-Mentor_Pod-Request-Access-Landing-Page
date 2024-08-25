import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export default function Container(props: Props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}
