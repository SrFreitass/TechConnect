import { Background } from '../../Styles/Background';
import { Register } from '../../components/Auth/Register';
import bg2 from '../../assets/images/bg2.png';

export function RegisterPage() {
  return (
    <>
      <Background bg={bg2} />
      <Register />
    </>
  );
}
