import './App.css'
import { Router } from './router'
import { FormProvider }  from './contexts/FormContext';

function App() {

  return (
    <div className="App">
      <FormProvider>  {/* Um ambiente onde todo o sistema está dentro do provider */}
        <Router />
      </FormProvider>
      
    </div>
  )
}

export default App
