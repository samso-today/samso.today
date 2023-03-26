import * as React from 'react'

import './TwoColumns.css'

export default function TwoColumns({ leftContext, rightContext }) {
    return (
        <div class="two-columns">
            <div class="column">{leftContext}</div>
            <div class="column">{rightContext}</div>
        </div>
    )
}