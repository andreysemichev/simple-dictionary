import { Switch, Route } from "react-router-dom";

import Root from "pages/Root";
import Starred from "pages/Starred";
import Header from "components/Header";

import "styles/core.scss";

const App: React.FC = () => {
    return (<>
        <Header />
        <Switch>
            <Route exact path="/" component={Root} />
            <Route exact path="/starred" component={Starred} />
        </Switch>
    </>);
};

export default App;
