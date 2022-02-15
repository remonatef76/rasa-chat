import React from "react";
import "./../../assets/scss/TestWidgets.scss";

const widgets = [
  {
    label: "Size",
    value: "size",
  },
  {
    label: "Type Widget",
    value: "typeWidget",
  },
  {
    label: "Brand",
    value: "brand",
  },
  {
    label: "Cart",
    value: "cart",
  },
  {
    label: "Payment",
    value: "payment",
  },
  {
    label: "Rate",
    value: "rate",
  },
  {
    label: "Reason",
    value: "reason",
  },
  {
    label: "Product List",
    value: "productList",
  },
  {
    label: "Return Template",
    value: "returnTemplate",
  },
  {
    label: "Return Confirm",
    value: "returnConfirm",
  },
  {
    label: "Feedback",
    value: "feedback",
  },
  {
    label: "OTP",
    value: "otp",
  },
  {
    label: "Location",
    value: "location",
  },
  {
    label: "User Location",
    value: "userLocation",
  },
  {
    label: "Address Info",
    value: "addressInfo",
  },
  {
    label: "City Select",
    value: "citySelect",
  },
  {
    label: "Personal Info",
    value: "personalInfo",
  },
  {
    label: "Maps",
    value: "maps",
  },
  {
    label: "Personal Info Outline",
    value: "personalInfoOutline",
  },
  {
    label: "Address Info Outline",
    value: "addressInfoOutline",
  },
  {
    label: "City Select Outline",
    value: "citySelectOutline",
  },
  {
    label: "Location Outline",
    value: "locationOutline",
  },
  {
    label: "General",
    value: "general",
  },
  {
    label: "Order Status",
    value: "OrderStatus",
  },
  {
    label: "Order Status Map Widget",
    value: "OrderStatusMapWidget",
  },
  {
    label: "Article",
    value: "article",
  },
  {
    label: "Video",
    value: "video",
  },
  {
    label: "Products Slider",
    value: "productsSlider",
  },
];

const TestWidgets = ({
  TEST_MODE,
  setTestMode,
  sampleSchema,
  setSampleSchema,
}) => {
  return (
    <div id="TestWidgets">
      <h1>Test Widgets</h1>
      <form>
        <div>
          <label htmlFor="mode">Select Mode</label>
          <select
            name="mode"
            id="mode"
            value={TEST_MODE}
            onChange={(e) => setTestMode(e.target.value)}
          >
            <option value={1}>Test Mode</option>
            <option value={0}>Production Mode</option>
          </select>
        </div>

        <div>
          <label htmlFor="widget">Select Widget</label>
          <select
            name="widget"
            id="widget"
            value={sampleSchema}
            onChange={(e) => setSampleSchema(e.target.value)}
          >
            {widgets.map((widget, i) => (
              <option value={widget.value} key={i}>
                {widget.label}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default TestWidgets;
