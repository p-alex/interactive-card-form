import './PrimaryButton.css';
interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset' | undefined;
}
const PrimaryButton = (props: Props) => {
  return (
    <button {...props} className="primaryButton">
      {props.children}
    </button>
  );
};

export default PrimaryButton;
