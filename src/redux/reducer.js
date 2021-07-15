import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

const initialState={
    dishes: DISHES,
    comments:COMMENTS,


}

 export const Reducer =(state =initialState ,action)=>{

    if (action.type === "Add_Comment"){
        let comment =action.payload ;
        comment.id=state.comments.length
        comment.date =new Date().toDateString();

        console.log("Comment",comment)

        return {
            ...state,
            comments:state.comments.concat(comment)
        }
    }

    return state
}