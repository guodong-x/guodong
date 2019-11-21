import {createStore} from "redux"

let reducer=(state,active)=>{
    state=JSON.parse(JSON.stringify(state));

    switch(active.type){


    }
    return state;
}

let initialState={

}

export default createStore(reducer,initialState);
