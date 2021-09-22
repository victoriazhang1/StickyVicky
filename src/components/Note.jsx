import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";

export default function Note(props) {
	const { id, btnColor, color, removeNote, isSelected, selected } = props;
	const [text, setText] = useState("");
	const [showNoteInput, setShowNoteInput] = useState(false);

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	const editNote = () => {
		setShowNoteInput(!showNoteInput);
	};
	const noteStyles = {
		backgroundColor: color,
		border: isSelected ? "3px solid #0198E1" : "none",
		width: "100%",
		minHeight: "18rem",
		backgroundClip: "content-box",
		padding: "4px",
		display: "flex",
		flexDirection: "column",
	};

	const buttonGroupStyle = {
		backgroundColor: btnColor,
	};

	return (
		<div datatype={id} onClick={selected} className="note" style={noteStyles}>
			<article style={buttonGroupStyle} className="button_group">
				<span className="button left_button_group">
					<Button
						variant="text"
						datatype={id}
						onClick={editNote}>
						<FontAwesomeIcon icon={faEdit} />
					</Button>
					{/* <span className="button btn_edit" datatype={id} onClick={editNote} onTouchStart={editNote}>
						<FontAwesomeIcon icon={faEdit} />
					</span> */}
				</span>
				<span className="button btn_delete" datatype={id} onClick={removeNote}>
					<FontAwesomeIcon icon={faTimes} />
				</span>
			</article>
			<div className="text_body">
				{showNoteInput ? (
					<textarea
						type="text"
						maxLength={255}
						autoFocus
						datatype={id}
						value={text}
						rows={10}
						onChange={handleTextChange}
					/>
				) : (
					<div className="text" datatype={id}>
						{text}
					</div>
				)}
			</div>
		</div>
	);
}
