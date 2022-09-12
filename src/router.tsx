import { BrowserRouter, Route, Routes } from "react-router-dom";

import {FormStep1} from './pages/FormStep1'
import {FormStep2 } from './pages/FormStep2'
import { FormStep3} from './pages/FormStep3'

export const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes> {/* Container geral, tudo dentro pode trabalhar com as rotas */}
                    <Route path="/" element={<FormStep1 />} />
                    <Route path="/passo2" element={<FormStep2 />} />
                    <Route path="/passo3" element={<FormStep3 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}