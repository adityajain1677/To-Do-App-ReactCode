import React from 'react';
import "./DisplayItems.css";
import { CSSTransitionGroup } from 'react-transition-group'
function DisplayItems(props) {
    var itemsList = props.items.map((item) => {
        return(
            <div className = "listBox" key = {item.key}>
            
                <p className="Add">
                    {item.text} <button className="remove" onClick ={() => props.handleRemove(item.key)}>Remove</button>
                </p>
               
                
            </div>
            
        )
    })
    //return <h1>hello</h1>
    
    return(
        <div>
            <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {itemsList}
            </CSSTransitionGroup>
        </div>
    )
    

}

export default DisplayItems;
