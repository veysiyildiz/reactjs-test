import styled from "styled-components";

const StyledWrapper = styled("div")(
  () => `
  
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 560px) {

  }
`
);

export default StyledWrapper;
