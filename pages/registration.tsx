import { ReactNode, MouseEvent } from 'react';
import NavbarLayout from 'components/NavbarLayout';
import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import userbase from 'userbase-js';
import RegistrationSuccessMsg from 'components/RegistrationSuccessMsg';
import RegistrationErrorMsg from 'components/RegistrationErrorMsg';

const USERBASE_APP_ID = process.env.NEXT_PUBLIC_USERBASE_APP_ID;

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (USERBASE_APP_ID) {
      userbase.init({ appId: USERBASE_APP_ID });
    }
  }, []);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handleSubmitRegistration = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setError(false);
      setSuccess(false);
      try {
        await userbase.signUp({
          email,
          username: email,
          password: 'vimconf2',
          rememberMe: 'none',
        });
        setSuccess(true);
      } catch (err) {
        setError(true);
      }
    },
    [email]
  );

  return (
    <div
      className={`mx-auto mt-20 min-h-screen max-w-screen-sm text-center
       sm:mt-40 
    `}
    >
      <h1 className="mb-16 text-4xl">Register as a speaker</h1>
      <form className="mb-4 flex items-center justify-center">
        <input
          className="w-72 rounded-l p-2 text-gray-800"
          type="text"
          placeholder="Your email address"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className={`rounded-r bg-gray-300 px-4 py-2 text-blue-900 shadow 
            transition hover:bg-gray-400`}
          onClick={handleSubmitRegistration}
        >
          Register
        </button>
      </form>
      <RegistrationErrorMsg show={Boolean(error)} />
      <RegistrationSuccessMsg show={Boolean(success)} />
    </div>
  );
}

RegistrationPage.getLayout = (page: ReactNode) => {
  return <NavbarLayout>{page}</NavbarLayout>;
};

export default RegistrationPage;
