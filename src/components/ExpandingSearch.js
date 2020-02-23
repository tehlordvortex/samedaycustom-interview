import React from "react";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ColorPalette } from "../utils/colors";
import styled from "styled-components";

const ExpandingSearchWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const ExpandingSearchIcon = styled.span`
  position: absolute;
  width: 2.05rem;
  height: 2.06rem;
  pointer-events: none;
`;

const ExpandingSearchInput = styled.input`
  height: 2.2rem;
  border: none;
  padding: 0.1rem 1rem 0.1rem 2.5rem;
  transition: width 0.3s ease-out;
  width: 2.05rem;

  &:hover,
  &:focus {
    width: 16.5rem;
    border-bottom: 1px solid ${ColorPalette.gray.divider};
  }

  &::placeholder {
    color: ${ColorPalette.gray.divider};
    opacity: 0;
    transition: 0.1s ease-out;
    transition-delay: 0.3s;
  }

  &:hover::placeholder,
  &:focus::placeholder {
    opacity: 1;
  }
`;

export const ExpandingSearch = ({ value, onChange, ...props }) => {
  const handleChange = event => {
    const { value } = event.target;
    if (typeof onChange === "function") onChange(value);
  };
  return (
    <ExpandingSearchWrapper {...props}>
      <ExpandingSearchIcon>
        <SearchIcon />
      </ExpandingSearchIcon>
      <ExpandingSearchInput
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </ExpandingSearchWrapper>
  );
};
