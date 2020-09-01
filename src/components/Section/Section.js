import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Start from "../Start/Start";
import Select from "../Select/Select";
import Result from "../Result/Result";
import Loading from "../Loading/Loading";

const StyledSection = styled.section`
height: 81vh
`

function Section() {
    return (
        <Router>
            <StyledSection>
                <Route path="/"> <Redirect to="/movie-app/" /> </Route>
                <Route path="/movie-app/" exact render={() => <Start />} />
                <Route path="/movie-app/customize" exact render={() => <Select />} />
                <Route path="/movie-app/loading" exact render={() => <Loading />} />
                <Route path="/movie-app/result" exact render={() => <Result />} />
            </StyledSection>
        </ Router>

    )
}
export default Section