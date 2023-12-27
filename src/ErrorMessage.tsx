import styled from "styled-components";

const ErrorMessageContainer = styled.div`
  color: #ff6f5b;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: -0.01044rem;
  text-align: right;
  padding-bottom: 1.69rem;
`;

const PlaceholderDiv = styled.div`
  height: 2rem;
`;

export const ErrorMessage = ({
  message,
  show,
}: {
  message: string;
  show: boolean;
}) => {
  return show ? (
    <ErrorMessageContainer>{message}</ErrorMessageContainer>
  ) : (
    <PlaceholderDiv />
  );
};
