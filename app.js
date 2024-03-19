// const heading = React.createElement("h1", null, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


{/* <div id="root">
    <div id="child1">
        <h1>Hello World</h1>
        <h2>Hello React</h2>
    </div>
    <div id="child2">
        <h1>Hello World</h1>
        <h2>Hello React</h2>
    </div>
</div> */}

const content = React.createElement("div", {id: "parent"}, 
    [
    React.createElement("div", {id: "child1"},
    [
        React.createElement("h1", null, "Hello World"),
        React.createElement("h2", null, "Hello React")
    ]),
    React.createElement("div", {id: "child1"},
    [
        React.createElement("h1", null, "Hello World"),
        React.createElement("h2", null, "Hello React")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
