import styled from "styled-components";

type ButtonProps = {
  text: string;
  alignSelf?: string;
  href?: string;
};

const StyledAnchor = styled.a<{ $alignSelf?: string }>`
  align-self: ${(props) => props.$alignSelf || "initial"};
`;

const StyledButton = styled.button`
  color: #fff;
  font-weight: 700;
  line-height: 1.625rem;
  font-size: 1rem;
  letter-spacing: 0.14288rem;
  border-bottom: 0.125rem solid #4ee1a0;
  cursor: pointer;
  padding-bottom: 0.62rem;
  text-transform: uppercase;

  &:hover {
    color: #4ee1a0;
  }
`;

export function Button({ text, alignSelf, href }: ButtonProps) {
  return (
    <StyledAnchor href={href} $alignSelf={alignSelf}>
      <StyledButton>{text}</StyledButton>
    </StyledAnchor>
  );
}
