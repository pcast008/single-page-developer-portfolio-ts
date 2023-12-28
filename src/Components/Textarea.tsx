import styled from "styled-components";

type TextareaProps = {
  textareaProps: React.ComponentProps<"textarea">;
  showError: boolean;
};

const InputContainer = styled.div<{ $showError?: boolean }>`
  display: flex;
  flex-direction: column;
  border-bottom: 0.0625rem solid
    ${(props) => (props.$showError ? "#ff6f5b" : "#fff")};
  margin-bottom: 0.31rem;
`;

const InputErrorContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTextarea = styled.textarea`
  font-weight: 500;
  line-height: 1.625rem;
  letter-spacing: -0.01388rem;
  text-transform: uppercase;
  opacity: 0.5;
  text-align: left;
  padding-left: 1.5rem;

  &:focus {
    outline: none;
    opacity: 1;
  }
`;

export function Textarea({ textareaProps, showError }: TextareaProps) {
  return (
    <InputContainer $showError={showError}>
      <InputErrorContainer>
        <StyledTextarea {...textareaProps} autoComplete="off" />
        {showError && (
          <i
            className="fa-solid fa-circle-exclamation fa-fade"
            style={{ paddingTop: ".3rem", color: "#ff6f5b" }}
          ></i>
        )}
      </InputErrorContainer>
    </InputContainer>
  );
}
