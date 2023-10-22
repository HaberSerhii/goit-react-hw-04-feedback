import { ButtonContainer, ButtonFeedback } from "./Feedback.styled";

const Feedback = ({ values, countFeedbacks }) => {
  return (
    <ButtonContainer>
      {values.map(value => (
        <ButtonFeedback
          key={value}
          onClick={() => countFeedbacks(value)}
        >
          {value}
        </ButtonFeedback>
      ))}
    </ButtonContainer>
  );
};

export default Feedback;
