import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
  const [showMap, setShowMap] = useState();
  const [showUpload, setShowUpload] = useState();
  const [showText, setShowText] = useState();

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <div>
          <h4 onClick={() => setShowText(!showText)}>
            {showText ? "Remove Text" : "Add Text"}
          </h4>
          {showText && (

          <div>
            <label htmlFor="text">Text:</label>
            <input id="text" name="text" onChange={onChange} />
          </div>
          )}
        </div>
        <br />
        <div>
          <h4 onClick={() => setShowUpload(!showUpload)}>
            {showUpload ? "Remove Image" : "Add Image"}
          </h4>
          {showUpload && (
            <div>
              <label for="img">Select image:</label>
              <input type="file" id="img" name="img" accept="image/*" />
              <input type="submit"></input>
            </div>
          )}
        </div>
        <br />
        <div>
          <h4 onClick={() => setShowMap(!showMap)}>
            {showUpload ? "Remove Map" : "Add Map"}
          </h4>
          {showMap && (
            <iframe
              src="https://maps.google.com/maps?q=Belfast&t=k&z=19&ie=UTF8&iwloc=&output=embed"
              width="300"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          )}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default TextUpdaterNode;
