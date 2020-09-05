import React from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import styled from 'styled-components';
import Start from "../Start/Start";
import Select from "../Select/Select";
import Result from "../Result/Result";
import Loading from "../Loading/Loading";

const StyledSection = styled.section`
height: 80vh
`

function Section() {
    return (
        <Router basename="/">
            <StyledSection>
                <Route path="/" exact render={() => <Start />} />
                <Route path="/customize" exact render={() => <Select />} />
                <Route path="/loading" exact render={() => <Loading />} />
                <Route path="/result" exact render={() => <Result />} />
            </StyledSection>
        </ Router>

    )
}
export default Section