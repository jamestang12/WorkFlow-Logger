import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./compoments/layout/Searchbar";
import Logs from "./compoments/Logs/Logs";
import AddBtn from "./compoments/layout/AddBtn";
import AddLogModal from "./compoments/Logs/AddLogModal";
import EditLogModal from "./compoments/Logs/EditLogModal";
import AddTechModal from "./compoments/techs/AddTechModal";
import TechListModal from "./compoments/techs/TechListModel";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <EditLogModal />
          <AddLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
