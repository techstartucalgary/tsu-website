import styled from "styled-components/macro";

export const NavbarContainer = styled.header``;

export const NavbarPlaceholder = styled.div`
  content: "";
  height: 83.6px;
`;

export const Navbar = styled.div`
  background: #07080a;
  text-align: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 83.6px;
  padding-top: 2px;

  @media screen and (min-width: 1400px) {
    display: grid;
    grid-template-columns: 1fr auto minmax(600px, 12fr) 1fr;
  }
`;

export const NavbarLogo = styled.img`
  margin-top: 8px;
  height: 65px;

  @media screen and (min-width: 1400px) {
    margin-left: 20px;
    grid-column: 1 / 2;
  }
`;

export const Navbar_NavToggle = styled.input`
    position: absolute
    top: -9999px;
    left: -9999px;

    &:checked ~ nav {
        transform: scale(1, 1);
    }

    &:checked ~ nav a {
      opacity: 1;
      transition: opacity 150ms ease-in-out 150ms;
    }


`;

export const Navbar_NavToggle_Label = styled.label`
  position: absolute;
  top: 32px;
  left: 20px;
  height: 25%;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 1400px) {
    display: none;
  }

  & > span,
  span:before,
  span:after {
    display: block;
    background: rgb(255, 255, 255);
    height: 3px;
    width: 35px;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
  }

  & > span:before,
  & > span:after {
    content: "";
    position: absolute;
  }

  span:before {
    bottom: 7px;
  }

  span: after {
    top: 7px;
  }
`;

export const NavbarContent = styled.nav`
  position: absolute;
  text-align: left;
  top: 100%;
  left: 0;
  background: #07080a;
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform ease-in-out;

  & > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & > li {
    margin-bottom: 1em;
    margin-left: 1em;
  }

  & > a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    opacity: 0;
    transition: opacity 150ms ease-in-out;

    &: hover {
      color: var(--primary-green);
    }
  }

  @media screen and (min-width: 1400px) {
    all: unset;
    grid-column: 3 / 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 500px;

    $ > ul {
      display: flex;
    }

    & > li {
      margin-left: 3em;
      margin-bottom: 0;
    }

    & > a {
      opacity: 1;
      position: relative;
    }

    & > a:before {
      content: "";
      display: block;
      height: 5px;
      background: var(--primary-green);
      position: absolute;
      top: -0.75em;
      left: 0;
      right: 0;
      transform: scale(0, 1);
      transition: transform ease-in-out 250ms;
    }

    & > a:before,
    & > a:hover {
      transform: scale(1, 1);
    }
  }
`;
