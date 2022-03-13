import React from "react";

const Icon = ({icon, cc = ''}) => {
    let content;
    let c;

    if(typeof icon === "string") {
        if(icon.split("http").length > 1 || icon.length > 2) {
            content = <img src={icon} alt="icon" />;
            c = "single-image";
        }else{
            content = <span>{icon}</span>
            c = "letter";
        }
    }else if(typeof icon === "object") {
        content = [];
        for(let i of icon){
            content.push(<img src={i} alt="icon" />);
        }
        if(content.length > 1){
            c = "multi-images images-"+content.length;
        }else{
            c = "single-image";
        }
    }

    return <div className={`avatar-container ${cc} ${c}`}>{content}</div>;
}

export default Icon;