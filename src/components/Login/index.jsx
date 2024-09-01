import { signInWithEmailAndPassword } from "@firebase/auth";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";
import { auth } from "../../services/firebase";
import { ButtonStyled } from "../IntroSection/style";
import { FormStyled, PasswordStyled } from "./style";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const onLogin = async (e) => {
    console.log(e);
    e.preventDefault();

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user.uid;
    localStorage.setItem("token", user);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <FormStyled>
      <form onSubmit={onLogin}>
        <h1>LOGIN</h1>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <PasswordStyled>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handlePasswordChange}>
              {showPassword ? <Eye size={25} /> : <EyeSlash size={25} />}
            </button>
          </PasswordStyled>
        </div>

        <ButtonStyled type="submit">ENTRAR</ButtonStyled>
      </form>
    </FormStyled>
  );
}
