import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from 'styled-components';
import logo from '../Home/logo.png';

import { Container } from './styles';

interface Props{
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            {/* <img src={logo} alt="logo" className="header-image"/> */}
            <div>Together We</div>

            <Switch
            onChange={toggleTheme}
            checked={title === 'dark'} 
            checkedIcon={true}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={colors.secondary}
            offColor={colors.primary}
            />
        </Container>
    );
}

export default Header;