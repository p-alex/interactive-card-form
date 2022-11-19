import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import './Feedback.css';
interface ISuccess {
  title?: string;
  message?: string;
  handleReset: () => void;
}
const Feedback = ({
  title = 'Thank you!',
  message = "We've added your card details",
  handleReset,
}: ISuccess) => {
  return (
    <div className="feedback">
      <img
        src="/images/icon-complete.svg"
        className="feedback__icon"
        alt=""
        width="80"
        height="80"
      />
      <h2 className="feedback__title">{title}</h2>
      <p className="feedback__message">{message}</p>
      <PrimaryButton type="button" onClick={handleReset}>
        Continue
      </PrimaryButton>
    </div>
  );
};

export default Feedback;
