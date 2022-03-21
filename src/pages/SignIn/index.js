import { React } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import DefaultFooter from '../../components/DefaultFooter';
import Logo from '../../assets/logo.png';

import './style.css';

function Signin() {
  const valoresIniciais = {
    email: '',
    password: ''
  };

  // const [user, setUser] = useState(valoresIniciais);

  function requestLogin() {
    console.log(values);
    clearForm();
  }

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  return (
    <div className="signin-container">
      <div className="signin-logo-container">
        <Link className="logo-link" to="/">
          <img className="health-logo" src={Logo} alt="" />
        </Link>
      </div>
      <div className="form-container">
        <div className="form-comum">
          <h1>Login</h1>
          <form onSubmit={e => e.preventDefault()}>
            <p>
              <input
                type="text"
                id="email"
                value={values.email}
                placeholder="E-mail"
                name="email"
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                placeholder="Senha"
                onChange={handleChange}
              />
            </p>
            <p className="submit">
              <button
                type="submit"
                id="commit"
                className="submitBtn"
                onClick={requestLogin}
              >
                Entrar
              </button>
            </p>
          </form>
        </div>
        <div id="footer">
          <p>
            Ainda não é cadastrado? <Link to="/sign-up">Cadastrar</Link>
          </p>
          <p style={{ 'font-size': '10px' }}>
            Esqueceu a senha? <Link to="/forgot-password">Recuperar senha</Link>
          </p>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}

export default Signin;
