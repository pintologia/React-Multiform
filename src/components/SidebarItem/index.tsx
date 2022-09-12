import { Link } from 'react-router-dom'
import * as S from './styles'
import { ReactComponent as ProfileIcon} from '../../svgs/profile.svg';



type Props={
    title: string,
    description: string,
    icon: string,
    path: string
}
export const SidebarItem = ({title, description, icon, path}: Props) =>{
    return(
        <S.Container>
            <Link to={path}>
                <S.Info>
                    <S.title>{title}</S.title>
                    <S.description>{description}</S.description>
                </S.Info>
                <S.IconArea>
                    <ProfileIcon fill='white' width={24} height={24} /> 
                </S.IconArea>
                <S.point>

                </S.point>
            </Link>
        </S.Container>
    )
}