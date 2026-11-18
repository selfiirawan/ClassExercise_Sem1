const Hobbies = () => {
  const hobbiesList = ["Badminton", "Gaming", "Building Lego"];

//   const hobby = hobbiesList.map((hobby, index) => <li key={index}>{hobby}</li>);
//   const hobbies = <ul>{hobby}</ul>;

    const hobbies = (
        <ul>
            {hobbiesList.map((hobby, index) => (
                <li key={index}>{hobby}</li>
            ))}
        </ul>
    )

  return hobbies;
};

export default Hobbies;
