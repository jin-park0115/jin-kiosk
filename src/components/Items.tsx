interface PropType {
  title: string;
  price: string;
}

const Items = (props: PropType) => {
  return (
    <>
      <div className="border text-center" style={{ cursor: "pointer" }}>
        <p className="fw-bold responsive-title">{props.title}</p>
        <p className="fw-light responsive-price">{props.price}</p>
      </div>
    </>
  );
};

export default Items;
