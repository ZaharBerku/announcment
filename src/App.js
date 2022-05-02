import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Main, Header, FormCreateAnnouncment } from "./components";
import createActions from "./store/createActions";

const App = () => {
  const { getData, setIsHide} = createActions;
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.form);


  useEffect(() => {
    const search = localStorage.getItem("search");
    dispatch(getData());
    dispatch(setIsHide("", JSON.parse(search)));
  }, []);

  return (
    <div className="container">
      <Header/>
      <Main/>
      {isOpen && <FormCreateAnnouncment/>}
    </div>
  );
};

export default App;
