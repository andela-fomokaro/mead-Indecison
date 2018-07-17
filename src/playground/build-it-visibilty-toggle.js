console.log("Visibilty app is running");
let buttonDetails = "Show details"
let showDetails = false;
const toggleDetails = () => {
  buttonDetails = "Hide details";
  showDetails = !showDetails;
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>VISIBILITY TOGGLE</h1>
      <button onClick={toggleDetails}>{buttonDetails}</button>
       { showDetails && 
        <p>Hey. These are some details you can now see!</p>
      }
    </div>
  )
  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById("app");

renderApp();