var user = {
  name: "Omokaro Faith",
  age: 25,
  location: "Lagos, Nigeria"
};

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer"
};

var template = (
  <div>
    <h2>{app.title}</h2>
    <p>{app.subtitle}</p>
  </div>
);

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>{user.age}</p>
    <p>{user.location}</p>

  </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);