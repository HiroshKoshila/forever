import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from 'styled-components';
 
import { Container } from './styles';

interface Props{
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <div className="">Together We</div>

            <Switch
            onChange={toggleTheme}
            checked={title === 'dark'} 
            checkedIcon={true}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={colors.text}
            onColor={colors.secondary}
            />
        </Container>
    );
}

export default Header;