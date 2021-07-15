import "./App.css"
import _ from "lodash";
const App = ({ name }) => {
    return `
    <h2> ${_.join(["Welcome", name])} </h2>
    `;
};

export default App;
