import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form className="formControls" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="formControls_txt">最實用的線上代辦事項服務</h2>
      <label className="formControls_label" htmlFor="email">
        Email
      </label>
      <input
        className="formControls_input"
        type="text"
        id="email"
        name="email"
        placeholder="請輸入 email"
        defaultValue={loginData.email}
        {...register('email', {
          required: {
            value: true,
            message: '此欄位必填',
          },
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: '不符合 Email 格式',
          },
        })}
      />
      {errors.email && <span>{errors.email && errors.email?.message}</span>}
      <label className="formControls_label" htmlFor="pwd">
        密碼
      </label>
      <input
        className="formControls_input"
        type="password"
        name="pwd"
        id="pwd"
        placeholder="請輸入密碼"
        defaultValue={loginData.password}
        {...register('password', {
          required: {
            value: true,
            message: '此欄位必填',
          },
          minLength: {
            value: 6,
            message: '密碼長度至少 6 位數',
          },
        })}
      />
      {errors.password && (
        <span>{errors.password && errors.password?.message}</span>
      )}
      <input
        className="formControls_btnSubmit"
        type="button"
        type="submit"
        value="登入"
      />
      <Link className="formControls_btnLink" to="/sign_up">
        註冊帳號
      </Link>
    </form>
  );
};

export default LoginPage;
