import React, { useEffect } from "react";
import Marked from "marked";

export function Preview(props) {
	let renderText = Marked(props.text);

	useEffect(() => {
		document.querySelector("#render").innerHTML = renderText;
	}, [renderText]);

	return (
		<div className="preview">
			<div className="header">
				<div>Preview</div>
				<div className="toggle">Try It!</div>
			</div>
			<div id="render"></div>
		</div>
	);
}

export default Preview;
