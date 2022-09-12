import * as S from './styles'


type Props={
    title: string,
    description: string,
    icon: string,
    selected: boolean,
    onClick: () => void,
}
export const SelectOption = ({title, description, icon, selected, onClick}: Props) =>{
    return (
        <S.Container onClick={onClick} selected={selected}>
            <S.icon>{icon}</S.icon>
            <S.info>
                <S.title>{title}</S.title>
                <S.description>{description}</S.description>
            </S.info>
        </S.Container>
    )
}