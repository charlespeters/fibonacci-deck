import * as React from "react";
import styled from "styled-components";

const ChevronContainer = styled.div`
  display: block;
  cursor: pointer;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8px;
  text-align: right;
`;

interface OpenCloseProps {
  open: boolean;
  onClick: (x: any) => void;
}

const OpenClose: React.FC<OpenCloseProps> = ({ open, onClick }) => (
  <ChevronContainer onClick={onClick}>
    <img
      src={
        open
          ? "https://icon.now.sh/chevronDown/CCC"
          : "https://icon.now.sh/chevronUp/CCC"
      }
      alt="down icon"
    />
  </ChevronContainer>
);

export default OpenClose;