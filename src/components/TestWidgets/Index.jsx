import React from "react";
import "./../../assets/scss/TestWidgets.scss";
import { widgets } from "../../assets/data/widgets";
import ColorsPicker from "./ColorsPicker";

const TestWidgets = ({
  TEST_MODE,
  setTestMode,
  sampleSchema,
  setSampleSchema,
}) => {
  return (
    <div id="TestWidgets">
      <h1>Customize Chat</h1>
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

        <h3>Select Colors</h3>
        <div>
          <label htmlFor="mainColor">Select Primary Color</label>
          <ColorsPicker
            variable="rasa-green"
            color={
              window.localStorage.getItem(`color-rasa-green`)
                ? window.localStorage.getItem(`color-rasa-green`)
                : "linear-gradient(270deg, #6ddda5 -14.81%, #4abdda 100%)"
            }
          />
        </div>
        <div>
          <label htmlFor="subPrimary">Select Secondary</label>
          <ColorsPicker
            variable="rasa-thirdly-bg"
            color={
              window.localStorage.getItem(`color-rasa-thirdly-bg`)
                ? window.localStorage.getItem(`color-rasa-thirdly-bg`)
                : "linear-gradient(89.2deg, #44aa61 0.54%, #b4e568 99.31%)"
            }
          />
        </div>
        <div>
          <label htmlFor="subPrimary">Select Button Color</label>
          <ColorsPicker
            variable="rasa-buttons-bg"
            color={
              window.localStorage.getItem(`color-rasa-buttons-bg`)
                ? window.localStorage.getItem(`color-rasa-buttons-bg`)
                : "linear-gradient(0deg, #b4e568 -3.57%, #44aa61 96.3%)"
            }
          />
        </div>
      </form>
    </div>
  );
};

export default TestWidgets;
