import React from 'react'

export default function tag({pageContext}) {
    const {tags}=pageContext
    return (
        <div>
            <ul>
                {tags.map(tag=>{
                    <li key={tag}>
                        {tag}
                    </li>
                })}
            </ul>
        </div>
    )
}
