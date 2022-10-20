import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = true;
  return (
    <div>
      <h2 className={"title"}>
        <span>this is </span>haeder titile
      </h2>

      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
