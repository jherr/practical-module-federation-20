import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 3px dashed red;
  border-radius: 0.5rem;
  background-color: #eee;
`;

export default () => <SearchContainer>Search widget</SearchContainer>;
