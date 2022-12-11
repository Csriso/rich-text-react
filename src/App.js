import "./App.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

function App() {
	const [value, setValue] = useState("");

	const quillModules = {
		toolbar: [
			[{ header: "1" }, { header: "2" }, { font: [] }],
			[{ size: [] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[
				{ list: "ordered" },
				{ list: "bullet" },
				{ indent: "-1" },
				{ indent: "+1" },
			],
			["link", "image", "video"],
			["clean"],
		],
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false,
		},
	};
	return (
		<div className="App w-full">
			<div className="flex flex-col justify-center items-center">
				<ReactQuill
					theme="snow"
					value={value}
					modules={quillModules}
					onChange={setValue}
					style={{
						width: "80%",
						backgroundColor: "white",
						marginTop: "20px",
						height: "400px",
					}}
				/>

				<div className="pt-24 w-8/12 pb-24 break-all whitespace-pre-wrap">
					{value}
				</div>
			</div>
		</div>
	);
}

export default App;
