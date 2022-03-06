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

        <ColorsPicker />
      </form>
    </div>
  );
};

export default TestWidgets;
