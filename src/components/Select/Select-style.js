import styled from "styled-components"
import { Wrapper } from "../reuse/Wrapper"
import { Container } from "../reuse/Container"

export const SelectPage = styled(Container)`
justify-content: center;
@media only screen and (min-width: 360px){
    bottom: 5%;
}
@media only screen and (min-width: 1024px){
    bottom: 0
}
`

export const ButtonsWrapper = styled(Wrapper)`
    justify-content: center;
    width: 100%;
    @media only screen and(min-width: 1024px) and (orientation: landscape){
        display: grid;
        grid-template-columns: 1fr 1fr
    }
`