import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { UseForm, FormActions } from '../../contexts/FormContext'
import {Theme} from '../../components/Theme/index'
import { useEffect } from 'react'
import { SelectOption } from '../../components/SelectOptions'
import { Link } from 'react-router-dom'


export const FormStep2 = () =>{
    const navigate = useNavigate();
    const handleNextStep = ()=>{
        if (state.name !== '') {
            navigate('/passo3')
        }else{
            alert('Digite o seu nome')
        }
    }
    
    useEffect(()=> {
        if (state.name == '') {
            navigate('/')
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
        
    }, [])

    const setLevel = (level: number)=>{
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    /* Using de Hook we've made */
    const { state, dispatch } = UseForm(); 
    return(
        <Theme>
            <S.Container>
                <div>
                    <p>Passo 2/3 </p>
                    <h1>{state.name}, O que melhor descreve você?</h1>
                    <p>Selecione a opção que mais se adequa à vocẽ.</p>

                    <hr />
                    <SelectOption
                        title='Sou Iniciante'
                        description='Comecei a programar há menos de 2 anos.'
                        icon='🐑'
                        selected={state.level ===0}
                        onClick={()=> setLevel(0)}
                    />
                    <SelectOption
                        title='Sou Programador'
                        description='Já programo há de 2 anos ou mais...'
                        icon='🧐'
                        selected={state.level === 1}
                        onClick={() => setLevel(1)}
                    />
                    
                    <Link to={'/'} className='backB' >Voltar</Link>
                    <button onClick={handleNextStep}>Próximo</button>
                </div>
            </S.Container>            
        </Theme>
    );
}