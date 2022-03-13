import React from "react";
import { ReactComponent as Dash } from "./../../../assets/images/header/dash.svg";
import { ReactComponent as ArrowDown } from "./../../../assets/images/header/arrow-down.svg";
import { ReactComponent as List } from "./../../../assets/images/header/list.svg";
import Icon from "./Icon";
const Header = ({ title, subTitle, icon, hide }) => {
  return (
    <div className="rw-header d-flex">
      <div className="icon">
        <Icon icon={icon}></Icon>
      </div>
      <div className="title-container">
        <div className="title">{title}</div>
        <div className="subtitle">{subTitle}</div>
      </div>
      <div className="actions-container">
        <div className="dash" onClick={hide}>
          <Dash />
        </div>
        <div className="arrow-down">
          <ArrowDown />
        </div>
        <div className="list">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Header;
