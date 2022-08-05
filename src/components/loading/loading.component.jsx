import { Loader as LoaderIcon } from "react-feather";
import { HeadingMain } from "../universal-styles";
import { LoadingContainer } from "./loading.style";

const Loader = () => (
  <LoadingContainer>
    <div className="loading-box">
      <HeadingMain>Loading</HeadingMain>
      <LoaderIcon />
    </div>
  </LoadingContainer>
);

export default Loader;
