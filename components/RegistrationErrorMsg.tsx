const genericErrorMsg = `There has been a problem with your registration.
Please try again or contact us on our Discord channel`;

interface Props {
  message?: string;
  show: boolean;
}

const RegistrationErrorMsg = (props: Props) => {
  const { show, message = genericErrorMsg } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="text-sm text-red-400">
      <p>{message}</p>
    </div>
  );
};

export default RegistrationErrorMsg;
