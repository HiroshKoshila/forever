import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background: ${props => props.theme.colors.background};
    color: linear-gradient(177.68deg, #818BE9 1.95%, #AF93FF 98.06%);;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 38px;
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    line-height: 48px;
    
    background: linear-gradient(177.68deg, #818BE9 1.95%, #AF93FF 98.06%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;