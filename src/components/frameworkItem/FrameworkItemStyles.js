import styled from "styled-components";

const StyledWrapper = styled("div")(
  () => `
  width: 49.5%;
  border: 1px solid #222222;
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: 0 -3px 4px 0 rgba(0, 0, 0, 0.16);

  h4 {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.15px;
    color: #222222;
  }

  p {
    font-size: 13px;
    line-height: 1.5;
    color: #68717e;
  }
  
  @media (max-width: 560px) {
    width: 100%;
  }
`
);

export default StyledWrapper;
