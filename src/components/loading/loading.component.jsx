import { RefreshCw } from "react-feather";
import { HeadingMain } from "../universal-styles";
import { LoadingContainer } from "./loading.style";

const Loader = () => (
  <LoadingContainer>
    <div className="loading-box">
      <HeadingMain>Loading</HeadingMain>
      <RefreshCw />
    </div>
  </LoadingContainer>
);

export default Loader;
