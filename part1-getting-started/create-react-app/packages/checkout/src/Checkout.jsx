import React from "react";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 3px dashed blue;
  border-radius: 0.5rem;
  background-color: #eee;
`;

export default () => <CheckoutContainer>Checkout widget</CheckoutContainer>;
