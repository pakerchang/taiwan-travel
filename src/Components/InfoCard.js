import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import mapIcon from "../Images/Icon/map.png";

export default function InfoCard() {
	const classes = useStyles();
	const images = importAll(require.context("../Images/InfoCard", false, /\.(png|jpe?g|svg)$/));

	return (
		<Card sx={{ width: 206, height: 243 }}>
			<CardMedia className={classes.media} component="img" alt="" image={images[0].default} />
			<CardContent>
				<Typography className={classes.desc} variant="p" gutterBottom component="div">
					雲林 / 馬蹄蛤生態休閒園區(獲選參加2010台灣美食展...
				</Typography>
				<Typography className={classes.desc} variant="p" gutterBottom style={{ fontSize: 12, color: "#007350" }}>
					<img src={mapIcon} alt="" />
					基隆市中正區
				</Typography>
			</CardContent>
			{/* <CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions> */}
		</Card>
	);
}
const useStyles = makeStyles({
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
function importAll(r) {
	return r.keys().map(r);
}
