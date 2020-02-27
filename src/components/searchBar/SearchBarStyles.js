import styled from "styled-components";

const StyledWrapper = styled("div")(
  () => `
  
  input {
    width: 100%;
    height: 36px;
    box-shadow: 0 2px 0 0 rgba(216, 216, 216, 0.25);
    border: solid 1px #e9325e;
    background-color: #ffffff;
    padding: 0 12px;

    font-size: 16px;
    line-height: 1.5;
    color: #222222;

  }

  @media (max-width: 560px) {

  }
`
);

export default StyledWrapper;
