import React, { useState, useEffect } from "react";

import Chat from "./components/Chat/Index";
import TestWidgets from "./components/TestWidgets/Index";
import headerIcon from "./assets/images/header/header-icon.png";

const DEFAULT_TEST_MODE = window.localStorage.getItem("TEST_MODE") || 1;
const DEFAULT_SAMPLE_SCHEMA =
  window.localStorage.getItem("sampleSchema") || "rate";

function App() {
  const [TEST_MODE, setTestMode] = useState(DEFAULT_TEST_MODE);
  const [sampleSchema, setSampleSchema] = useState(DEFAULT_SAMPLE_SCHEMA);

  useEffect(() => {
    window.localStorage.setItem("TEST_MODE", TEST_MODE);
    window.localStorage.setItem("sampleSchema", sampleSchema);
  }, [TEST_MODE, sampleSchema]);

  return (
    <div className="App">
      <Chat
        initPayload={window.location.href}
        title={"Norton customer care"}
        subtitle={"We reply immediately"}
        socketUrl={"http://localhost:5005"}
        profileAvatar={headerIcon}
        botAvatar={"N"}
        socketPath={"/socket.io/"}
        customData={{ language: "en" }}
        TEST_MODE={TEST_MODE}
        sampleSchema={sampleSchema}
        setSampleSchema={setSampleSchema}
        setTestMode={setTestMode}
      />

      <TestWidgets
        setSampleSchema={setSampleSchema}
        setTestMode={setTestMode}
        sampleSchema={sampleSchema}
        TEST_MODE={TEST_MODE}
      />
    </div>
  );
}

export default App;
