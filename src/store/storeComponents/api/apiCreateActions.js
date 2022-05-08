import {
  GET_DATA,
  POST_DATA,
  PUT_DATA,
  DELETE_DATA,
  SET_IS_HIDE
} from "./apiActions";


export const getData = () => async dispatch => {
  try {
    const data = await fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 24371637-dab7-4d80-9650-20625be7689c"
      },
    }).then(res =>{
      return res.json();
    });
    localStorage.setItem("search", JSON.stringify(data));
    dispatch({ type: GET_DATA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const setData = (body) => async dispatch => {
  try {
    const postData = await fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 24371637-dab7-4d80-9650-20625be7689c"
      },
      body: JSON.stringify(body)
    }).then(response => response.json());
    dispatch({ type: POST_DATA, payload: postData });
  } catch (error) {
    console.log(error);
  }
};


export const editData = (body, id) => async dispatch => {
  try {
    const putData = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 24371637-dab7-4d80-9650-20625be7689c"
      },
      body: JSON.stringify(body)
    }).then(response => response.json());
    dispatch({ type: PUT_DATA, payload: putData });
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = (id) => async dispatch =>{
  try{
     await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer 24371637-dab7-4d80-9650-20625be7689c"
      },
    });
    dispatch({ type: DELETE_DATA, payload:id });
  }catch(error){
    console.log(error);
  }
};

export const setIsHide = (value, data) => {
   const newData = data.map(element => {
        if(element.name.toLowerCase().includes(value.toLowerCase()) || element.description.toLowerCase().includes(value.toLowerCase())){
          element.isHide = true;

        }else{
          element.isHide = false;
        }
        return element;
    });
    return ({type:SET_IS_HIDE, payload:newData});
};