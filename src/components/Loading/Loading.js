import { LineWave } from "react-loader-spinner";
import { createPortal } from "react-dom";
import { LoaderWrapper, Overlay } from "./Loading.styled";

const loaderRoot = document.querySelector("#loader-root");

export const Loader = () => {
  return createPortal(
    <Overlay>
      <LoaderWrapper>
        <LineWave
          height="200"
          width="200"
          color="#4fa94d"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </LoaderWrapper>
    </Overlay>,
    loaderRoot
  );
};
