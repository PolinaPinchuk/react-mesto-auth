function Login() {

  return (
      <section className='auth'>
        <div className='auth__container'>
        <h2 className="auth__title">Вход</h2>
            <form className='auth__form' >
              <div className='auth__form-wrap'>
                <input className='auth__input' id="email-input" type="email" placeholder="Email" name="email" minLength="2" maxLength="200" autoComplete="on" required />
                <span className="auth__input-error name-input-error"></span>
              </div>
              <div className='auth__form-wrap'>
                <input className='auth__input' id="password-input" type="password" placeholder="Пароль" name="password" minLength="2" maxLength="200" autoComplete="on" required />
                <span className="auth__input-error name-input-error"></span>
              </div>
              <button className="auth__save-button save-button" type="submit">
              <span className="auth__button-span">Войти</span></button>
            </form>
        </div>
      </section>
  )
}

export default Login