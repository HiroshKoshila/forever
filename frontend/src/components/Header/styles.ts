import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    background: ${props => props.theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 38px;
    font-style: normal;
    font-weight: 900;
    font-size: 38px;
    line-height: 48px;
    
    background: linear-gradient(177.68deg, #818BE9 1.95%, #AF93FF 98.06%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;