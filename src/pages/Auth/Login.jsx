import { Login } from '../../components/Auth/Login';
import bg from '../../assets/images/bg2.png';
import { Background } from '../../Styles/Background';

export function LoginPage() {
  return (
    <>
      <Background bg={bg} />
      <Login />
    </>
  );
}
