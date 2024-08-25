import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export default function Wrapper(props: Props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}
