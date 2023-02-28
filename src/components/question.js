import React, { useState } from 'react'
import { Style, Button } from './style_question'
import './ques.css'


const Component = () => {
    const [show, setShow] = useState(false)
    const [ques1, setQues1] = useState('')
    const [ques2, setQues2] = useState('')
    const [ques3, setQues3] = useState('')
    const [ques4, setQues4] = useState('')
    const ans1 = 'html'
    const ans2 = 'css'
    const ans3 = 'js'
    const ans4 = 'react'
    const [ans, setAns] = useState(0)
    const [dis1, setDis1] = useState(false)
    const [dis2, setDis2] = useState(false)
    const [dis3, setDis3] = useState(false)
    const [dis4, setDis4] = useState(false)

    //  let ans=0

    const handleQues1 = (e) => {
        setQues1(e.target.value);
        setDis1(p => !p)

    }

    const handleQues2 = (e) => {
        setQues2(e.target.value);
        setDis2(p => !p)


    }

    const handleQues3 = (e) => {
        setQues3(e.target.value);
        setDis3(p => !p)


    }

    const handleQues4 = (e) => {
        setQues4(e.target.value);
        setDis4(p => !p)


    }

    const handleRes = (e) => {
        e.preventDefault()
        if (ques1 === ans1)
            setAns(p => p + 1)
        if (ques2 === ans2)
            setAns(p => p + 1)
        if (ques3 === ans3)
            setAns(p => p + 1)
        if (ques4 === ans4)
            setAns(p => p + 1)
        // alert(`You get ${ans}`)
        setShow(true)

    }



    return (
        <>

            {

                show ?
                    <Style>
                        <div>
                            <h1 style={{ color: 'red' }}>You get {ans} out of 4</h1>
                        </div>
                    </Style>
                    :
                    <Style>
                        <div>
                            <h2> 1)  What is the main structure of a web page?</h2>
                            <form>
                                <input type="radio" id='html12' name='ans' value='html' disabled={dis1} onChange={handleQues1} />
                                <label htmlFor='html12'>HTML</label><br />
                                <input type="radio" id='css12' name='ans' value='css' disabled={dis1} onChange={(e) => handleQues1(e)} />
                                <label htmlFor='css12'>CSS</label><br />
                                <input type="radio" id='js12' name='ans' value='js' disabled={dis1} onChange={(e) => handleQues1(e)} />
                                <label htmlFor='js12'>JS</label><br />
                                <input type="radio" id='react12' name='ans' value='react' disabled={dis1} onChange={(e) => handleQues1(e)} />
                                <label htmlFor="react12">REACT</label><br />
                            </form>

                            <h2> 2)  What is used for styling in a web page?</h2>

                            <form>
                                <input type="radio" id='html2' name='ans' value='html' disabled={dis2} onChange={(e) => handleQues2(e)} />
                                <label htmlFor='html2'>HTML</label><br />
                                <input type="radio" id='css2' name='ans' value='css' disabled={dis2} onChange={(e) => handleQues2(e)} />
                                <label htmlFor='css2'>CSS</label><br />
                                <input type="radio" id='js2' name='ans' value='js' disabled={dis2} onChange={(e) => handleQues2(e)} />
                                <label htmlFor='js2'>JS</label><br />
                                <input type="radio" id='react2' name='ans' value='react' disabled={dis2} onChange={(e) => handleQues2(e)} />
                                <label htmlFor="react2">REACT</label><br />
                            </form>

                            <h2> 3)  What is the language used for web browsers?</h2>

                            <form>
                                <input type="radio" id='html3' name='ans' value='html' disabled={dis3} onChange={(e) => handleQues3(e)} />
                                <label htmlFor='html3'>HTML</label><br />
                                <input type="radio" id='css3' name='ans' value='css' disabled={dis3} onChange={(e) => handleQues3(e)} />
                                <label htmlFor='css3'>CSS</label><br />
                                <input type="radio" id='js3' name='ans' value='js' disabled={dis3} onChange={(e) => handleQues3(e)} />
                                <label htmlFor='js3'>JS</label><br />
                                <input type="radio" id='react3' name='ans' value='react' disabled={dis3} onChange={(e) => handleQues3(e)} />
                                <label htmlFor="react3">REACT</label><br />
                            </form>

                            <h2> 4)  What is one of a Javascript library</h2>

                            <form>
                                <input type="radio" id='html4' name='ans' value='html' disabled={dis4} onChange={(e) => handleQues4(e)} />
                                <label htmlFor='html4'>HTML</label><br />
                                <input type="radio" id='css4' name='ans' value='css' disabled={dis4} onChange={(e) => handleQues4(e)} />
                                <label htmlFor='css4'>CSS</label><br />
                                <input type="radio" id='js4' name='ans' value='js' disabled={dis4} onChange={(e) => handleQues4(e)} />
                                <label htmlFor='js4'>JS</label><br />
                                <input type="radio" id='react4' name='ans' value='react' disabled={dis4} onChange={(e) => handleQues4(e)} />
                                <label htmlFor="react4">REACT</label><br />


                            </form><br />
                            <Button type="submit" onClick={handleRes} >Submit</Button>
                        </div>
                    </Style>


            }
        </>
    )
}

export default Component