import Header from "../pages/header/Header";

function MainContainer({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainContainer;
