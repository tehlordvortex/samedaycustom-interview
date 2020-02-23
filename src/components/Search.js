import React from "react";
import styled from "styled-components";
import { ColorPalette } from "../utils/colors";
import { ReactComponent as SearchIcon } from "../icons/search.svg";

const SearchWrapper = styled.div`
  position: relative;
  width: 29.8rem;
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: ${ColorPalette.gray.background};
  border-radius: 0.5rem;
  border: none;
  opacity: 1;
  padding: 1.2rem 4rem;
  color: ${ColorPalette.black};
`;

const SearchCloseButton = styled.button`
  position: absolute;
  right: 2.5rem;
  top: 1.2rem;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  color: ${ColorPalette.black};
  border: none;
  background: transparent;
  cursor: pointer;
`;

const SearchIconWrapper = styled.span`
  position: absolute;
  left: 2.5rem;
  top: 1.2rem;
  width: 1rem;
  height: 1rem;
  color: ${ColorPalette.black};
  pointer-events: none;
`;

export const Search = ({ value, onChange, ...props }) => {
  const handleChange = event => {
    const { value } = event.target;
    if (typeof onChange === "function") onChange(value);
  };

  const handleClear = () => {
    if (typeof onChange === "function") onChange("");
  };

  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchInput value={value} onChange={handleChange} {...props} />
      <SearchCloseButton onClick={handleClear}>X</SearchCloseButton>
    </SearchWrapper>
  );
};
