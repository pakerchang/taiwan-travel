import React from "react";
import { makeStyles } from "@mui/styles";
import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";
import Footer from "../Components/Footer";
import SearchBanner from "../Components/SearchBanner";

export default function FoodHotel() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<SearchBanner />
			<InfoCard />
			<Footer />
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		bgcolor: "#F6F7FB",
	},
});
