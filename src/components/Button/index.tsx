import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
interface IProps {
  children?: string;
  className?: string;
  to?: string;
  type?: string;
}
function Button({ children, className, to }: IProps) {
  // if (to) {
  //   return (
  //     <Link className={cx(`${className}`)} to={`${to}`}>
  //       {children}
  //     </Link>
  //   );
  // }
  // return <button className={cx(`${className}`)}>{children}</button>;
  return to ? (
    <Link className={cx(`${className}`)} to={`${to}`}>
      {children}
    </Link>
  ) : (
    <button className={cx(`${className}`)}>{children}</button>
  );
}

export default Button;
