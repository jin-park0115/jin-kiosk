interface PropType {
  title: string;
  price: string;
}

const Items = (props: PropType) => {
  return (
    <>
      <div className="border text-center" style={{ cursor: "pointer" }}>
        <p className="fw-bold">{props.title}</p>
        <p className="fw-light">{props.price}</p>
      </div>
    </>
  );
};

export default Items;
