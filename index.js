import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTML(DOM)

// const heading = React.createElement("h1", {id:"title",key : "heading"}, "sushil jadhav");
// const heading1 = React.createElement("h2", {id:"subtitle",key : "subheading"}, "software developer");
// const container = React.createElement("div", {className:"container"}, [heading, heading1]);


const Heading  = function () {
    return (<h1 id="title" key="h1">sushil jadhav</h1>) 
}

const SubHeading = function() { 
     return (<h2 id="subtitle" key="h2">software developer</h2>)
}


const Container = function () {
    return (
        <div className="container">
            <Heading />
            <SubHeading />
        </div>
    )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Container />);