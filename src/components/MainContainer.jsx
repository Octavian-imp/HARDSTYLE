import Header from "./header/Header";

function MainContainer({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainContainer;
