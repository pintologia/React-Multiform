import { createContext, ReactNode, useContext, useReducer } from "react";


const initialData = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

// Types
type State= {
    currentStep: number,
    name: string,
    level: 0 | 1,
    email:string,
    github: string
}
type Action ={
    type:FormActions,
    payload: any
}
type ContextType ={
    state: State,
    dispatch: (action: Action)=> void;  /* function */
}
type FormProviderProps ={
    children: ReactNode
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions{  /* precisaremos para realizar as acções fora */
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const formReducer = (state: State, action: Action) =>{
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentSet: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setLevel:
            return { ...state, level: action.payload };
        case FormActions.setEmail:
            return { ...state, email: action.payload };
        case FormActions.setGithub:
            return { ...state, github: action.payload };
        default:
            return state;
    }
}

// Provider {gerenciar os dados}
export const FormProvider = ({children}: FormProviderProps) =>{
    // Uso padrão de um reducer
    const [state, dispatch] = useReducer(formReducer, initialData)    /* initialData {obj} que são os dados iniciais a primeira vez que ele vai rodar */
    const value = { state, dispatch };
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}


// Context Hook {Vamos usar para ter acesso aos dados do context}
export const UseForm = () =>{
    const context = useContext(FormContext);
    if(context === undefined){ /* Se estiver undefined que dizer que estamos a uasr esse hook, em Component fora do provider */
        /* Um hook fora do provider n pode ter acesso */
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}




/* Context {Acesso a dados de forma global}, Reducer {Executa actions específicas}, Provider{Ambiente, onde dentro temos acesso aos dados do context, Hook{Simplfica ao acesso de informações e troca de informações, acesso e leitura}} */