import React from "react";
import List from "./Widgets/Global/List";
import Form from "./Widgets/Global/Form";
import Map from "./Widgets/Global/Map";

import size from "./Widgets/Samples/SizeWidget.json";
import typeWidget from "./Widgets/Samples/TypeWidget.json";
import brand from "./Widgets/Samples/BrandWidget.json";
import cart from "./Widgets/Samples/CartWidget.json";
import payment from "./Widgets/Samples/PaymentWidget.json";
import rate from "./Widgets/Samples/RateWidget.json";
import returnTemplate from "./Widgets/Samples/ReturnWidget.json";
import returnConfirm from "./Widgets/Samples/ReturnConfirmWidget.json";
import reason from "./Widgets/Samples/ReasonWidget.json";
import productList from "./Widgets/Samples/ProductListWidget.json";
import feedback from "./Widgets/Samples/FeedbackWidget.json";
import otp from "./Widgets/Samples/OTPWidget.json";
import location from "./Widgets/Samples/LocationWidget.json";
import userLocation from "./Widgets/Samples/UserLocationWidget.json";
import addressInfo from "./Widgets/Samples/AddreessInfoWidget.json";
import citySelect from "./Widgets/Samples/CitySelectWidget.json";
import personalInfo from "./Widgets/Samples/PersonalInfoWidget.json";
import maps from "./Widgets/Samples/MapPopupWidget.json";
import personalInfoOutline from "./Widgets/Samples/PersonalInfoOutlineWidget.json";
import addressInfoOutline from "./Widgets/Samples/AddreessInfoOutlineWidget.json";
import citySelectOutline from "./Widgets/Samples/CitySelectOutlineWidget.json";
import locationOutline from "./Widgets/Samples/LocationOutlineWidget.json";
import OrderStatus from "./Widgets/Samples/OrderStatus.json";
import OrderStatusMapWidget from "./Widgets/Samples/OrderStatusMapWidget.json";
import article from "./Widgets/Samples/Article.json";
import video from "./Widgets/Samples/Video.json";
import general from "./Widgets/Samples/GeneralWidget.json";

/**
 * Sample Widgets Payloads
 */
const widgetsPayloads = {
  size,
  typeWidget,
  brand,
  cart,
  payment,
  rate,
  reason,
  productList,
  returnTemplate,
  returnConfirm,
  feedback,
  otp,
  location,
  userLocation,
  addressInfo,
  citySelect,
  personalInfo,
  maps,
  personalInfoOutline,
  addressInfoOutline,
  citySelectOutline,
  locationOutline,
  general,
  OrderStatus,
  OrderStatusMapWidget,
  article,
  video,
};

const ComponentsManager = (props) => {
  const { data, TEST_MODE, sampleSchema } = props;

  if (TEST_MODE && widgetsPayloads[sampleSchema]) {
    data.attachment.payload = widgetsPayloads[sampleSchema].payload;
  }

  if (
    data.attachment.payload.template_type === "general" &&
    data.attachment.payload?.elements?.length
  ) {
    let WigetsContent = [];
    let newProps = [];
    let len = data.attachment.payload.elements.length;
    for (let x = 0; x < len; x++) {
      let widgetData = data.attachment.payload.elements[x];
      newProps[x] = JSON.parse(JSON.stringify(props));
      newProps[x].data.attachment.payload = widgetData;

      let WidgetContent;

      if (widgetData.template_type === "list") {
        WidgetContent = <List {...newProps[x]} />;
      } else if (widgetData.template_type === "form") {
        WidgetContent = <Form {...newProps[x]} />;
      } else if (widgetData.template_type === "map") {
        WidgetContent = <Map {...newProps[x]} />;
      }

      let content = WidgetContent ? WidgetContent : "";

      WigetsContent.push(
        <div
          className="custom-rasa-widget-container"
          style={{ marginBottom: 20, paddingLeft: x > 0 ? 40 : 0 }}
        >
          {content}
        </div>
      );
    }

    return WigetsContent;
  } else {
    let widgetData = data.attachment.payload;
    let WidgetContent;

    if (widgetData.template_type === "list") {
      WidgetContent = <List {...props} />;
    } else if (widgetData.template_type === "form") {
      WidgetContent = <Form {...props} />;
    } else if (widgetData.template_type === "map") {
      WidgetContent = <Map {...props} />;
    }
    return (
      <div className="custom-rasa-widget-container">
        {WidgetContent ? WidgetContent : ""}
      </div>
    );
  }
};

export default ComponentsManager;
