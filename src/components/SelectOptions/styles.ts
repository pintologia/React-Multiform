import styled from 'styled-components';

export const Container = styled.div<{selected: boolean;}>`
    display: flex;
    border: 2px solid ${props => props.selected ? '#25cd89' : '#16195c'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 2px solid #496459;
    }


`;

export const icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    background-color: #191a59;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export const info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const title = styled.div`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 7px;
`;

export const description = styled.div`
    color: #b8b8d4;
    font-size: 14px;
`;