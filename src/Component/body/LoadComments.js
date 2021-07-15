import React from 'react';
import dateFormat from "dateformat"

const LoadComments = (props) => {
    return (
        props.comments.map(res=>{
           return (
                  <div key={res.id}>
                      <h5>{res.author}</h5>
                      <p>{res.comment}</p>
                      <p> Rating : {res.rating}</p>
                      <p>{dateFormat(res.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                  </div>

           )
        })

    );
};

export default LoadComments;