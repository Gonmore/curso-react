import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const About = ()=> {
    const product = useSelector((state) => state.product.initialValue)
    const dispatch = useDispatch()

    const [ nameComponent, setNameComponent ] = useState('About')
    return(
        <div>
            {product}
            <span>Component Name: {nameComponent}</span>
            <button onClick={() => {setNameComponent("Curso de react")}}> Press </button>
        </div>

    );
}

export default About