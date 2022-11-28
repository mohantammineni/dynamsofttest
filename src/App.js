import logo from './logo.svg';
import './App.css';
import DWT from './DynamsoftSDK';

function App() {
  return (
    <div className="App">
      <DWT
          features={[
            "scan",
            "camera",
            "load",
            "save",
            "upload",
            "barcode",
            "ocr",
            "uploader"
          ]}
        />
    </div>
  );
}

export default App;
