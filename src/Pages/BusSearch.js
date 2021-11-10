import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { makeStyles } from "@mui/styles";

export default function BusSearch() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			
			<Footer />
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		bgcolor: "#F6F7FB",
	},
});
