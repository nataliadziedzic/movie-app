import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "../Header/Header";
import Start from "../Start/Start";
import Select from "../Select/Select";
import Result from "../Result/Result";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";

function App() {
  return (
    <Router>
      <Header />
      <Section>
        <Route path="/movie-app/" exact render={() => <Start />} />
        <Route path="/movie-app/customize" exact render={() => <Select />} />
        <Route path="/movie-app/result" exact render={() => <Result />} />
      </Section>
      <Footer />
    </Router>
  );
}

export default App;