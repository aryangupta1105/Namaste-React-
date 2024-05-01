import { CURR_YEAR } from "../utils/Constants";

const Footer = () => {
    return (
      <footer className="footer">
        <p>
          Copyright &copy; {CURR_YEAR}, Made with 💗 by <strong>Vasu</strong>
        </p>
      </footer>
    );
  };

export default Footer;