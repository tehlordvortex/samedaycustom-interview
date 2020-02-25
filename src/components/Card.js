import styled from "styled-components";
import { ColorPalette } from "../utils/colors";

export const Card = styled.div`
  border-radius: 0.5rem;
  background-color: ${ColorPalette.white};
  box-shadow: 0px 3px 50px ${props => (props.soft ? "#00000007" : "#0000000f")};
`;
