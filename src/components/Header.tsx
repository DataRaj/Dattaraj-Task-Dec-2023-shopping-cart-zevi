import Logo from '../styles/logo.svg';
import "./header.scss";
const Header = () => {
    return (
      <div className="header">
        <img src={Logo} alt="Logo" />
      </div>
    );
  };
  
  export default Header;
  