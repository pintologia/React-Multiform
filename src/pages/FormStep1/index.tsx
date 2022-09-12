import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { UseForm, FormActions } from '../../contexts/FormContext'
import {Theme} from '../../components/Theme/index'
import { ChangeEvent, useEffect } from 'react'

export const FormStep1 = () =>{
    const navigate = useNavigate();
    const handleNextStep = ()=>{
        if (state.name !== '') {
            navigate('/passo2')
        }else{
            alert('Digite o seu nome')
        }
    }
    

    useEffect(()=> {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNameChange = (e: ChangeEvent<HTMLInputElement> /* evento de mudança de um input */ ) =>{ /* Typamos o evento com a fcn do proprio react  */
    /*fnc*/ dispatch({
    /*obj*/ type: FormActions.setName,
            payload: e.target.value
        })
    }

    /* Using de Hook we've made */
    const { state, dispatch } = UseForm(); 
    return(
        <Theme>
            <S.Container>
                <div>
                    <p>Passo 1/3 - {state.name}</p>
                    <h1>Vamos começar com o seu nome.</h1>
                    <p>Preencha o campo abaixo com o seu nome completo</p>

                    <hr />

                    <label htmlFor="">
                        Nome completo
                        <input 
                            type="text"
                            autoFocus
                            value={state.name}
                            onChange={handleNameChange}
                        />
                    </label>

                    <button onClick={handleNextStep}>Próximo</button>
                </div>
            </S.Container>            
        </Theme>
    );
}