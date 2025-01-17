import { Link } from "react-router-dom";

const LoginPage = () => {
   // This is for the login Image
  const LoginImage = [
    "https://s3-alpha-sig.figma.com/img/9c78/c207/552fc98b77c1e3551faa847116459330?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OX1k2kyHaFfGgcSp474bJNyefAID295X2nBg~KDZ5BX2El1t3pMP6e4WZYcU5y5I-KS71Wv5Hnik1Ude4SJjbdnZsrv88vNIfKC2MnaxurwWkiDnHLU8ZwAyyFTv5uAFUbPCiqv5zn8K69Rs0oYpnzW3skBHrlWkARbOxu~I2WpYnQBEAWK-BHEw9PiwNOPCL1CWvoSRndS~onM2inCGqcObhvu~U-L7CVfQ~EOfZxC-z1K6Wkvw2LT0keDgmXU4qTY5ITEDS7Gnq9hAIXNmb9pZSxbT9mXgFfux2I76QAzZhSHfeDKh0XYZE2Zq3R0AgV1YE6uuLgenNuxfjqODkQ__",
  ];
  return (
    <>
      <div className="login__container">
        <div className="image__container">
          <div className="image">
            <img src="" alt="" />
          </div>
        </div>

        <div className="form__container">
          <h1>Welcome back</h1>
          <h3>Sign in to continue</h3>

          <form
            // onClick={() => onSubmit}
          >
            <div className="input">
              
            <input className='mb-5' type="email" placeholder='Email Address'
              required
              />
              </div>

            <div className="input">

            <input type="password"
              placeholder='Password'
              required
              />
            </div>
            
            <div className="forget__password">
              <a href="">Forgot password?</a>
            </div>

            <div className="create__account">
              <span>New user? 
                <Link to="/sign-in">
                  Create account
                </Link>
              </span>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage