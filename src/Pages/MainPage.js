import React from "react";
import Header from "../Components/Header";
import SearchBanner from "../Components/SearchBanner";
import InfoCard from "../Components/InfoCard";
import { makeStyles } from "@mui/styles";
import EventCard from "../Components/EventCard";

export default function MainPage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Header />
			<SearchBanner />
			<div className="popularEvent">
				<EventCard />
			</div>
			<div className="popularFood">
				<InfoCard />
			</div>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyItems: "center",
		// height: "100vh",
		backgroundColor: "#f6f7fb",
	},
});
