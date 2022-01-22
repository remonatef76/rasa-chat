import React, { useState } from "react";

import Chat from "./components/Chat/Index";
import headerIcon from "./assets/images/header/header-icon.png";

function App() {
  const [TEST_MODE, setTestMode] = useState(true);
  const [sampleSchema, setSampleSchema] = useState("rate");

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
    </div>
  );
}

export default App;
