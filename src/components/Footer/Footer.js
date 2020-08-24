import React from 'react';
import styled from 'styled-components';
const StyledFooter = styled.footer`
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 4vh;
display: flex;
justify-content: center;
align-items: center;
font-size: 10px;
background-color: rgba(0,0,0,.3);
p{
    font-weight: 400;
}
@media (orientation: landscape)  and (max-width: 1023px) {
    min-height: 20px

}

`

function Footer() {
    return (
        <StyledFooter>
            <p>© 2020 Natalia Dziedzic</p>
        </StyledFooter>
    )
}

export default Footer