import InputRangeCost from "./components/inputRangeCost/InputRangeCost";
import Header from "./pages/header/Header";

const Content = () => {
  return (
    <>
      <Header />
      <div className="flex flex-[1_0_auto] text-3xl items-center justify-center">
        Будущая главная страница
        <InputRangeCost />
      </div>
    </>
  );
};
export default Content;
