import { ReactNode } from 'react';
import * as S from './style';
import {Header} from '../Header/index'
import { SidebarItem } from '../SidebarItem';

type Props={
    children: ReactNode;
}
export const Theme = ({children}: Props) => {
    return(
        <S.Container>
            <S.Area>
                <Header/>

                <S.Steps>
                    <S.Sidebar>
                        <SidebarItem
                            title= 'Pessoal'
                            description= 'Se identifique'
                            icon='profile'
                            path='/'
                        />
                        <SidebarItem
                            title='Nível'
                            description='Seu nível'
                            icon='book'
                            path='/passo2'
                        />
                        <SidebarItem
                            title='Pessoal'
                            description='Como te achar'
                            icon='mail'
                            path='/passo3'
                        />
                    </S.Sidebar>
                    <S.Page>
                        {children}
                    </S.Page>
                </S.Steps>
            </S.Area>
        </S.Container>
    )
}