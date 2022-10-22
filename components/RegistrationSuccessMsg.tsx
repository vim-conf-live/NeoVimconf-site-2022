interface Props {
  show: boolean;
}

const RegistrationSuccessMsg = (props: Props) => {
  const { show } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="text-sm text-green-500">
      <p>{`Thanks! You have registered as a speaker. We will contact you shortly.`}</p>
    </div>
  );
};

export default RegistrationSuccessMsg;
