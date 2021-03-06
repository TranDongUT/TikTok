import style from "./AccountItem.module.scss";
import classNames from "classnames/bind";
//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
//component
import PropTypes from "prop-types";
import Image from "../Image/Image";

import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`}>
      <div className={cx("wrapper")}>
        <Image className={cx("avata")} src={data.avatar} alt={data.full_name} />
        <div className={cx("infor")}>
          <h4 className={cx("name")}>
            <span>{data.full_name}</span>
            {data.tick && (
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            )}
          </h4>
          <span className={cx("username")}>{data.nickname}</span>
        </div>
      </div>
    </Link>
  );
}

///validate propstype
AccountItem.propTypes = {
  data: PropTypes.object,
};

export default AccountItem;
