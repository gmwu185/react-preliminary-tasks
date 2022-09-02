import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDatasContext, useAuth } from '../../controllers/contexts';
import { api_register } from '../../controllers/user';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { setToken } = useAuth();
  const { singUpData, setNickname } = useDatasContext();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const registerRes = await api_register(data);
    console.log('registerRes', registerRes);
    const registerResJson = await registerRes.json();
    console.log('registerResJson', registerResJson);
    if (registerRes.status === 201) {
      console.log(registerResJson.message);
      localStorage.setItem('token', registerRes.headers.get('authorization'));
      setToken(
        localStorage.getItem('token') ||
          registerRes.headers.get('authorization')
      );
      localStorage.setItem('nickname', registerResJson.nickname);
      setNickname(localStorage.getItem('nickname') || registerResJson.nickname);
      navigate('/todolist');
    } else {
      alert(`${registerResJson.message} ${registerResJson.error.join()}`);
    }
  };

  return (
    <form className="formControls" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="formControls_txt">註冊帳號</h2>
      <label className="formControls_label" htmlFor="email">
        Email
      </label>
      <input
        className="formControls_input"
        type="text"
        id="email"
        name="email"
        placeholder="請輸入 email"
        defaultValue={singUpData.email}
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
      <label className="formControls_label" htmlFor="nickname">
        您的暱稱
      </label>
      <input
        className="formControls_input"
        type="text"
        name="nickname"
        id="nickname"
        placeholder="請輸入您的暱稱"
        {...register('nickname', {
          required: {
            value: true,
            message: '此欄位必填',
          },
        })}
      />
      {errors.nickname && (
        <span>{errors.nickname && errors.nickname?.message}</span>
      )}
      <label className="formControls_label" htmlFor="pwd">
        密碼
      </label>
      <input
        className="formControls_input"
        type="password"
        name="pwd"
        id="pwd"
        placeholder="請輸入密碼"
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
      <label className="formControls_label" htmlFor="pwd">
        再次輸入密碼
      </label>
      <input
        className="formControls_input"
        type="password"
        name="pwd"
        id="pwd"
        placeholder="請再次輸入密碼"
        {...register('confirmPassword', {
          required: {
            value: true,
            message: '此欄位必填',
          },
          validate: (value) => {
            if (watch('password') !== value) {
              return '密碼與再次輸入不同';
            }
          },
        })}
      />
      {errors.confirmPassword && (
        <span>{errors.confirmPassword && errors.confirmPassword?.message}</span>
      )}
      <input
        className="formControls_btnSubmit"
        type="submit"
        value="註冊帳號"
      />
      <Link className="formControls_btnLink" to="/">
        登入
      </Link>
    </form>
  );
};

export default SignUp;
