import "./App.css";
import { useState } from "react";
import Note from "./components/Note";
import nextId from "react-id-generator";
import { reset, swap } from "./helpers/swap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ChromePicker } from "react-color";
import { formatColors } from "./helpers/formatColors";

function App() {
	const [color, setColor] = useState("rgba(252,254,125,.3)");
	const [limit, setLimit] = useState([]);
	const [singleNote, setSingleNote] = useState({});
	const [notes, setNotes] = useState([
		{
			id: nextId(),
			selected: false,
			color: color,
			btnColor: " #FCFE7D",
		},

		{
			id: nextId(),
			selected: false,
			color: color,
			btnColor: " #FCFE7D",
		},

		{
			id: nextId(),
			selected: false,
			color: color,
			btnColor: " #FCFE7D",
		},

		{
			id: nextId(),
			selected: false,
			color: color,
			btnColor: " #FCFE7D",
		},
		{
			id: nextId(),
			selected: false,
			color: color,
			btnColor: " #FCFE7D",
		},
		{
			id: nextId(),
			selected: false,
			color: color,
			btnColor: " #FCFE7D",
		},
		{
			id: nextId(),
			selected: false,
			color: color,
			btnColor: " #FCFE7D",
		},
	]);

	const removeNote = (e) => {
		if (e.target.className.includes("button")) {
			const currId = e.target.attributes.datatype.value;
			const filteredNotes = notes.filter((note) => note.id !== currId);
			setNotes(filteredNotes);
		}
	};

	const createNotes = () => {
		let id = nextId();
		if (notes.length !== 36) {
			setNotes([
				...notes,
				{
					id,
					selected: false,
					color: "rgba(252,254,125,.3)",
					btnColor: "rgba(252, 254, 125, 1)",
					text: "",
				},
			]);
		}
	};

	const selected = (e) => {
		const noteClass = e.target.className;
		if (
			noteClass === "button" ||
			noteClass === "note" ||
			noteClass === "text"
		) {
			const currId = e.target.attributes.datatype.value;
			const post = notes.find((note) => note.id === currId);
			setSingleNote(post);
			if (limit.length < 2) {
				const updatedNote = notes.map((note) => {
					if (note.id === currId) {
						note.selected = !note.selected;
					}
					return note;
				});

				for (let note of updatedNote) {
					if (note.selected === true) {
						setLimit([...limit, note]);
					}
				}
				setNotes(updatedNote);
			}

			if (limit.length === 1) {
				const indexes = [];
				for (let i = 0; i < notes.length; i++) {
					if (notes[i].selected === true) {
						indexes.push(i);
					}
				}
				const swapped = swap(notes, indexes[0], indexes[1]);
				setNotes(swapped);
				setNotes(reset(notes));
				setLimit([]);
			}
		}
	};

	const renderNotes = () => {
		return notes.map((note) => {
			return (
				<Note
					id={note.id}
					key={note.id}
					color={note.color}
					isSelected={note.selected}
					text={note.text}
					btnColor={note.btnColor}
					selected={selected}
					removeNote={removeNote}
				/>
			);
		});
	};

	const updateNoteColor = (c) => {
		setColor(c.rgb);
		if (singleNote.length !== 0) {
			const updatedColors = notes.map((note) => {
				if (note.id === singleNote.id) {
					note.color = formatColors(color);
					note.btnColor = c.hex;
				}
				return note;
			});
			setNotes(updatedColors);
		}
	};

	return (
		<div className="App">
			<ChromePicker color={color} onChange={updateNoteColor} />
			<section className="note_group">
				{" "}
				{renderNotes()}
				<div id="note_new_ca" onClick={createNotes}>
					<FontAwesomeIcon icon={faPlus} />
				</div>
			</section>
		</div>
	);
}

export default App;
