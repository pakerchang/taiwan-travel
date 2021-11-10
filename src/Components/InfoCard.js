import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import mapIcon from "../Images/Icon/map.png";

export default function InfoCard({ name, location, filePath }) {
	const classes = useStyles();
	const images = importAll(require.context("../Images/InfoCard", false, /\.(png|jpe?g|svg)$/));
	function importAll(r) {
		return r.keys().map(r);
	}
	console.log(images);
	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} component="img" alt="" image={images[0].default} />
			<CardContent>
				<Typography className={classes.desc} variant="p" gutterBottom component="div">
					{name}
				</Typography>
				<Typography className={classes.desc} variant="p" gutterBottom style={{ fontSize: 12, color: "#007350" }}>
					<img src={mapIcon} alt="" />
					{location}
				</Typography>
			</CardContent>
		</Card>
	);
}
const useStyles = makeStyles({
	root: {
		width: 206,
		height: 270,
		margin: 10,
	},
	media: {
		"& img": {
			width: 182,
			height: 137,
			objectFit: "contain",
		},
	},
	desc: {
		fontFamily: "Noto Sans TC",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 14,
	},
});
