import React, { useState } from 'react'
import Question from './question'
import { Style, Header, Button } from './style_front'

const Com = () => {
    const [show, setShow] = useState(true)

    return (

        <>
            {
                show ?
                    // <Image>
                    <Style>
                        <div className='start'>

                            <Header>Start the quiz</Header>
                            <Button type='button' onClick={(e) => setShow(false)}>Let's go</Button>

                        </div>
                    </Style>
                    // </Image>
                    : <Question />
            }
        </>
    )
}

export default Com