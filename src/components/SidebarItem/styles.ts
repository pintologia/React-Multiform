import styled from "styled-components";

export const Container = styled.div`
    margin: 30px;
    cursor: pointer;
    a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const title = styled.div`
    text-align: right;
    font-weight: bold;
    font-size: 15px;
    color: #FFF;
    margin-bottom: 5px;
`;

export const description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #b8b8d4;
`;

export const IconArea = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #494a7c;

`;

export const point = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 3px solid #494a7c;
    margin-left: 30px;
    margin-right: -6px;
    background-color: #02044a;
`;