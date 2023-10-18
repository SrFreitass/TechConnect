import { PasswordRecovery } from '../../components/Auth/PasswordRecovery';
import { Background } from '../../Styles/Background';
import bg2 from '../../assets/images/bg2.png';

export function PasswordRecoveryPage() {
  return (
    <>
      <Background bg={bg2} />
      <PasswordRecovery />
    </>
  );
}
