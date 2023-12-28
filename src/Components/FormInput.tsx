import styled from "styled-components";

type FormInputProps = {
  inputProps: React.ComponentProps<"input">;
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

const Input = styled.input`
  padding-left: 1.5rem;
  padding-bottom: 1.06rem;
  font-weight: 500;
  line-height: 1.625rem;
  text-transform: uppercase;
  letter-spacing: -0.01388rem;
  opacity: 0.5;

  &:focus {
    outline: none;
    opacity: 1;
  }
`;

export function FormInput({ inputProps, showError }: FormInputProps) {
  return (
    <InputContainer $showError={showError}>
      <InputErrorContainer>
        <Input {...inputProps} autoComplete="off" />
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
