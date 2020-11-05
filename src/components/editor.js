import React from "react";

export function Editor(props) {
	let handleChange = (e) => {
		props.handleChange(e.target.value);
	};
	return (
		<div className="editor">
			<div className="header">
				<div>Editor</div>
				<div className="toggle">Try It!</div>
			</div>
			<div>
				<textarea onChange={handleChange} value={props.value}></textarea>
			</div>
		</div>
	);
}

export default Editor;
