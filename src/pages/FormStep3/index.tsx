import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { UseForm, FormActions } from '../../contexts/FormContext'
import {Theme} from '../../components/Theme/index'
import { ChangeEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const FormStep3 = () =>{
    const navigate = useNavigate();

    const handleNextStep = ()=>{
        if (state.email !== '' && state.github !== '') {
            console.log(state);
        }else{
            alert('Preencha os campos')
        }
    }


    useEffect(() => {
        if (state.name == '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }

    }, [])

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement> /* evento de mudança de um input */ ) =>{ /* Typamos o evento com a fcn do proprio react  */
    /*fnc*/ dispatch({
    /*obj*/ type: FormActions.setEmail,
            payload: e.target.value
        })
    }
    
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement> /* evento de mudança de um input */) => { /* Typamos o evento com a fcn do proprio react  */
    /*fnc*/ dispatch({
    /*obj*/ type: FormActions.setGithub,
        payload: e.target.value
    })
    }
    /* Using de Hook we've made */
    const { state, dispatch } = UseForm(); 
    return(
        <Theme>
            <S.Container>
                <div>
                    <p>Passo 3/3  </p>
                    <h1>Okay {state.name}, onde podemos te achar?</h1>
                    <p>Preencha os campos abaixo para entrarmos em contacto!</p>

                    <hr />

                    <label htmlFor="">
                        Qual é o seu e-mail?
                        <input 
                            type="email"
                            value={state.email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <label htmlFor="">
                        Qual é o seu GitHub?
                        <input
                            type="url"
                            value={state.github}
                            onChange={handleGithubChange}
                        />
                    </label>

                    <Link to={'/passo2'} className='backB' >Voltar</Link>
                    <button onClick={handleNextStep}>Finalizar</button>
                </div>
            </S.Container>            
        </Theme>
    );
}