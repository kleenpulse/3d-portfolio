import "./DotRing.scss";
import useMousePosition from "../../useMousePos";
import { useContext } from "react";
import { MouseContext } from "../../hoc/mouse-context";

const DotRing = () => {
	// 1.
	const { cursorType, cursorChangeHandler } = useContext(MouseContext);

	const { x, y } = useMousePosition();
	return (
		<>
			{/* 2. */}
			<div
				style={{ left: `${x}px`, top: `${y}px` }}
				className={"ring " + cursorType}
			></div>
			<div
				className={"dot " + cursorType}
				style={{ left: `${x}px`, top: `${y}px` }}
			></div>
		</>
	);
};
