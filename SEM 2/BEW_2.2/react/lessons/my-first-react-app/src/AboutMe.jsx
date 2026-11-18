// XML behaves like HTML, but if you want to use multiline, you have to use brackets ()

/*
    React rules:
    id - same as HTML
    class - becomes className
    style - use double -> {{ }}, and become object (have key: value)
    style={{ key: value }}
*/

const name = "Selfi";
const element = (
  <div className="myDiv" style={{ paddingTop: 10 }}>
    <h1 id="my-heading">This is my XML element</h1>
    <h2>Hi {name}</h2>
  </div>
);

const secondElement = <div>{element}</div>;

const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>Hello! My name is {name}</p>
    </div>
  );
};

export default AboutMe;
