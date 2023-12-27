import styled from "styled-components";

type SeparatorProps = {
  marginTop?: string;
  marginBottom?: string;
  height?: string;
};

const Separator = styled.div<{
  $marginTop?: string;
  $marginBottom?: string;
  $height?: string;
}>`
  height: ${(props) => props.$height || "0.0625rem"};
  width: 100%;
  background-color: #fff;
  margin-top: ${(props) => props.$marginTop};
  margin-bottom: ${(props) => props.$marginBottom};
`;

export function Divider({ marginTop, marginBottom, height }: SeparatorProps) {
  return (
    <Separator
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      $height={height}
    />
  );
}
