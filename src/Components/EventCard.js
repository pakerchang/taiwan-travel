import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography } from "@mui/material";
import mapIcon from "../Images/Icon/map.png";
import ticketIcon from "../Images/Icon/ticket.png";
import clockIcon from "../Images/Icon/clock.png";
import phoneIcon from "../Images/Icon/phone.png";
import { Room, AccessTime, ConfirmationNumber, Phone } from "@mui/icons-material";

export default function EventCard({ title, desc, location }) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const images = importAll(require.context("../Images/EventCard", false, /\.(png|jpe?g|svg)$/));
	function importAll(r) {
		return r.keys().map(r);
	}
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Card sx={{ width: 522, height: 228, display: "flex" }}>
			<CardMedia className={classes.media} component="img" alt="" image={images[0].default} />
			<CardContent>
				<Typography className={`${classes.text} ${classes.title}`} gutterBottom variant="subtitle1" component="div">
					{title}
				</Typography>
				<Typography className={`${classes.text} ${classes.desc}`} variant="body2" color="text.secondary">
					{desc}
				</Typography>
				<CardActions>
					<Typography className={`${classes.text} ${classes.desc}`} variant="p" gutterBottom>
						<img src={mapIcon} alt="" />
						{location}
					</Typography>
					<Button variant="outlined" onClick={handleOpen}>
						活動詳情
					</Button>
					<Modal open={open} onClose={handleClose} sx={{ backdropFilter: "blur(0px)" }}>
						<Box className={classes.modalStyle}>
							<CardMedia
								sx={{ width: 612, height: 459, objectFit: "contain" }}
								component="img"
								alt=""
								image={images[0].default}
							/>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								{title}
							</Typography>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								{desc}
							</Typography>
							<Grid container xs={6} alignItems="center" justifyContent="center">
								<div>
									<AccessTime />
									{/* <img src={clockIcon} alt="" style={{ marginRight: 10 }} /> */}
									<Typography>開放式空間，無時間限制</Typography>
								</div>
								<div>
									<ConfirmationNumber />
									{/* <img src={ticketIcon} alt="" style={{ marginRight: 10 }} /> */}
									<Typography>免費</Typography>
								</div>
								<div>
									<Room />
									<Typography>基隆市中山區湖海路一、二段(協和街)</Typography>
								</div>
								<div>
									{/* <img src={phoneIcon} alt="" style={{ marginRight: 10 }} /> */}
									<Phone />
									<Typography>886-2-24287664</Typography>
								</div>
							</Grid>
							{/* <div style={{ display: "flex", justifyContent: "space-between" }}></div> */}
						</Box>
					</Modal>
				</CardActions>
			</CardContent>
		</Card>
	);
}
const useStyles = makeStyles({
	media: {
		"& img": {
			width: 187,
			height: 196,
			objectFit: "contain",
		},
	},
	text: {
		fontFamily: "Noto Sans TC",
		fontStyle: "normal",
		fontWeight: 400,
		// lineHeight: 23,
		letterSpacing: "0em",
		textAlign: "left",
	},
	title: {
		fontSize: 16,
	},
	desc: {
		fontSize: 14,
	},
	button: {
		color: "#FF1D6C",
		backgroundColor: "#FF1D6C",
	},
	modalStyle: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 670,
		height: 810,
		backgroundColor: "#fff",
		boxShadow: 24,
		p: 4,
	},
});
