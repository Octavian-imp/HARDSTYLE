import MainContainer from "../../components/MainContainer";
import InputRangeCost from "../../components/inputRangeCost/InputRangeCost";

function New() {
  return (
    <>
      <MainContainer>
        <div className="flex-[1_0_auto] flex items-center justify-center text-3xl">
          Новинки
          <InputRangeCost min={0} max={10000} step={1000} />
        </div>
      </MainContainer>
    </>
  );
}

export default New;
