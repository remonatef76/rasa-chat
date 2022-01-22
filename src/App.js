import Chat from "./components/Chat/Index";
import headerIcon from "./assets/images/header/header-icon.png";

function App() {
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
      />
    </div>
  );
}

export default App;
