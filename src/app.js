const user = {
  name: "Omokaro Faith",
  age: 25,
  location: "Lagos, Nigeria"
};

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ['One', 'Two']
};

const getLocation = ( (location) => {
  return (location ? <p>Location: {location}</p> : "");
})

const template = (
  <div>
    <h2>{app.title}</h2>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? "Here are your options" : "No options"}
  </div>
);

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);