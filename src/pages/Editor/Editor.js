import React, { useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

// import "codemirror/lib/codemirror.css";
// import "codemirror/theme/material.css";
// import "codemirror/mode/javascript/javascript";

// import "codemirror/mode/css/css";


function Editor() {

    // useEffect(()=> {
    //     async function init() {
    //         CodeMirror.fromTextArea(document.getElementById("realTimeEditor"),{
    //             mode : {name : 'javascript',json:true}
    //         })
    //     }

    //     init();
    // }, []);

    return(
        <CodeMirror
        // onBeforeChange={handleChange}
        // value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
        }}
      />
    )
}

export default Editor;