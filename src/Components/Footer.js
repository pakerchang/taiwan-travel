import React from "react";
import { makeStyles } from "@mui/styles";

export default function Footer() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<p>Taiwan Tourguide © Code: Michael / Design: KT  </p>
		</div>
	);
}
const useStyles = makeStyles({
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		width: "100%",
		height: 32,
		padding: 10,
	},
});
