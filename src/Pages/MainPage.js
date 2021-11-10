import React from "react";
import Header from "../Components/Header";
import SearchBanner from "../Components/SearchBanner";
import InfoCard from "../Components/InfoCard";
import { makeStyles } from "@mui/styles";
import EventCard from "../Components/EventCard";
import { Grid } from "@mui/material";
import eventData from "../JSON/EventCard.json";
import foodData from "../JSON/InfoCard.json";
import Footer from "../Components/Footer";

export default function MainPage() {
	const classes = useStyles();
	const imagesFood = importAll(require.context("../Images/InfoCard", false, /\.(png|jpe?g|svg)$/));

	function importAll(r) {
		return r.keys().map(r);
	}

	return (
		<div className={classes.root}>
			<Header />
			<SearchBanner />
			<div className={classes.popularEvent}>
				<p>熱門活動</p>
				<Grid container spacing={2} alignItems="flex-start" justifyContent="center">
					{eventData.map((item) => (
						<Grid item lg={6}>
							<EventCard title={item.title} desc={item.desc} location={item.location} />
						</Grid>
					))}
				</Grid>
			</div>
			<div className={classes.popularFood}>
				<p>熱門餐飲</p>
				<Grid container spacing={2} alignItems="flex-start" justifyContent="center">
					{foodData.map((foodData, index) => (
						<>
							<Grid item xs={2} md={3} lg={3}>
								<InfoCard name={foodData.name} location={foodData.location} />
							</Grid>
							<Grid item xs={2} md={3} lg={3}>
								<InfoCard name={foodData.name} location={foodData.location} />
							</Grid>
							<Grid item xs={2} md={3} lg={3}>
								<InfoCard name={foodData.name} location={foodData.location} />
							</Grid>
							<Grid item xs={2} md={3} lg={3}>
								<InfoCard name={foodData.name} location={foodData.location} />
							</Grid>
							<Grid item xs={2} md={3} lg={3}>
								<InfoCard name={foodData.name} location={foodData.location} />
							</Grid>
						</>
					))}
				</Grid>
			</div>
			<Footer />
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyItems: "center",
		alignItems: "center",
		backgroundColor: "#f6f7fb",
		overflow: "scroll",
	},
	popularEvent: {
		marginTop: 60,
		marginBottom: 83,
	},
	popularFood: {},
});
