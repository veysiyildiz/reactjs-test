import styled from "styled-components";

const StyledWrapper = styled("header")(
  () => `
  position: relative;
  background-color: #e9325e;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: flex-end;
  padding: 12px 20px;

  .logo-wrapper {
    width: 110px;
    height: 38px;
  }

  ul.navbar {
    list-style-type: none;
    display: flex;

    li {
      margin: 0 25px;

      a{
        color: #fff;
        font-size: 18px;
      }
    }
  }
  
  .hamburger-menu {
    padding: 10px;
    background-color: transparent;
    background-image: none;
    border: none;
    border-radius: 0;
    display: none;
    flex-direction: column;
    height: 36px;
    justify-content: space-between;

    .bar {
      background-color: #fff;
      display: block;
      width: 22px;
      height: 2px;
      border-radius: 1px;
    }
  }


  
  @media (max-width: 560px) {
    justify-content: space-between;

    .hamburger-menu {
      display: flex;
    }
    
    ul.navbar.open {
      display: flex;
    }

    ul.navbar {
      position: absolute;
      display: none;
      background: #e9325e;
      bottom: -50px;
      width: 100%;
      left: 0;
      height: 50px;
      align-items: center;
    }
  }
`
);

export default StyledWrapper;
