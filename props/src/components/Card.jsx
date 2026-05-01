const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.imgS} alt="" />
        <h1>
          {props.user},{props.age}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          possimus.
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
