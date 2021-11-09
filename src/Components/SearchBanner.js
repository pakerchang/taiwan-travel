import React from "react";
import { makeStyles } from "@mui/styles";
import searchBannerImage from "../Images/BannerComponent/searchBanner.png";
import searchButtonImage from "../Images/BannerComponent/searchButtonImage.png";
import locationImage from "../Images/BannerComponent/locationButtonImage.png";
import taiwanCity from "../JSON/TaiwanCity.json";
import { Autocomplete, Button, Input, TextField } from "@mui/material";

const classSelect = ["景點", "活動"];

export default function SearchBanner() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.logo}>
				<BannerLogo />
				<p>台北、台中、台南、屏東、宜蘭……遊遍台灣</p>
			</div>
			<form action="">
				<div className={classes.mainSearch}>
					<Input
						variant="outlined"
						placeholder="搜尋關鍵字"
						disableUnderline
						className={`${classes.searchInput} ${classes.searchBar}`}
					/>
					<Button className={classes.searchButton} size="small">
						<img src={searchButtonImage} alt="searchButton" />
					</Button>
				</div>

				<div className={classes.selectSearch}>
					<Autocomplete
						className={classes.searchBar}
						id="categorySelect"
						autoHighlight
						options={classSelect.map((item) => item)}
						sx={{ width: 219 }}
						renderInput={(params) => <TextField {...params} label="類別" />}
					/>
					<Autocomplete
						className={classes.searchBar}
						id="withoutCity"
						autoHighlight
						options={taiwanCity.map((item) => item.CityName)}
						sx={{ width: 219 }}
						renderInput={(params) => <TextField {...params} label="不分縣市" />}
					/>
					<Button className={classes.searchButton} size="small">
						<img src={locationImage} alt="locationSearch" />
					</Button>
				</div>
			</form>
		</div>
	);
}
const useStyles = makeStyles({
	root: {
		alignSelf: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "95%",
		height: "800px",
		// width: "1226px",
		// height: "490.06px",
		backgroundSize: "cover",
		backgroundImage: `url(${searchBannerImage})`,
		boxShadow: 3,
	},
	logo: {
		marginBottom: 16,
		"& p": {
			fontFamily: " Noto Sans TC",
			fontStyle: "normal",
			fontWeight: "normal",
			fontSize: 14,
			color: "#fff",
		},
	},
	mainSearch: {
		display: "flex",
		alignItems: "center",
	},
	searchBar: {
		backgroundColor: "#fff",
		borderRadius: "6px",
		marginLeft: 7,
	},
	searchInput: {
		width: 445,
		height: 40,
	},
	selectSearch: {
		display: "flex",
		alignItems: "center",
		marginTop: 6,
	},
	searchButton: {
		display: "flex",
		margin: "0 6",
		alignContent: "center",
		width: 40,
		height: 40,
	},
});

const BannerLogo = () => {
	return (
		<>
			<svg width="488" height="71" viewBox="0 0 488 71" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d_5806:6918)">
					<path
						d="M33.1104 46.7461L37.8955 21.4531H45.1953L37.3096 57H29.9365L24.1504 33.2207L18.3643 57H10.9912L3.10547 21.4531H10.4053L15.2148 46.6973L21.0742 21.4531H27.2754L33.1104 46.7461ZM60.0879 57.4883C56.2142 57.4883 53.0566 56.3001 50.6152 53.9238C48.1901 51.5475 46.9775 48.3818 46.9775 44.4268V43.7432C46.9775 41.0902 47.4902 38.722 48.5156 36.6387C49.541 34.5391 50.9896 32.9277 52.8613 31.8047C54.7493 30.6654 56.8978 30.0957 59.3066 30.0957C62.9199 30.0957 65.7601 31.235 67.8271 33.5137C69.9105 35.7923 70.9521 39.0231 70.9521 43.2061V46.0869H54.1309C54.3587 47.8122 55.0423 49.1956 56.1816 50.2373C57.3372 51.279 58.7939 51.7998 60.5518 51.7998C63.2699 51.7998 65.3939 50.8151 66.9238 48.8457L70.3906 52.7275C69.3327 54.2249 67.9004 55.3968 66.0938 56.2432C64.2871 57.0732 62.2852 57.4883 60.0879 57.4883ZM59.2822 35.8086C57.8825 35.8086 56.7432 36.2806 55.8643 37.2246C55.0016 38.1686 54.4482 39.5195 54.2041 41.2773H64.0186V40.7158C63.986 39.1533 63.5628 37.9489 62.749 37.1025C61.9352 36.2399 60.7796 35.8086 59.2822 35.8086ZM82.4268 57H75.3467V19.5H82.4268V57ZM99.248 51.7998C100.55 51.7998 101.608 51.4417 102.422 50.7256C103.236 50.0094 103.659 49.0573 103.691 47.8691H110.308C110.291 49.6595 109.803 51.3034 108.843 52.8008C107.882 54.2819 106.564 55.4375 104.888 56.2676C103.228 57.0814 101.388 57.4883 99.3701 57.4883C95.5941 57.4883 92.6156 56.292 90.4346 53.8994C88.2536 51.4906 87.1631 48.1702 87.1631 43.9385V43.4746C87.1631 39.4056 88.2454 36.1585 90.4102 33.7334C92.5749 31.3083 95.5452 30.0957 99.3213 30.0957C102.625 30.0957 105.27 31.0397 107.256 32.9277C109.258 34.7995 110.275 37.2979 110.308 40.4229H103.691C103.659 39.0557 103.236 37.9489 102.422 37.1025C101.608 36.2399 100.534 35.8086 99.1992 35.8086C97.5553 35.8086 96.3102 36.4108 95.4639 37.6152C94.6338 38.8034 94.2188 40.7402 94.2188 43.4258V44.1582C94.2188 46.8763 94.6338 48.8294 95.4639 50.0176C96.2939 51.2057 97.5553 51.7998 99.248 51.7998ZM158.306 30.584L158.525 33.5381C160.397 31.2432 162.928 30.0957 166.118 30.0957C169.52 30.0957 171.855 31.4385 173.125 34.124C174.98 31.4385 177.625 30.0957 181.06 30.0957C183.924 30.0957 186.056 30.9339 187.456 32.6104C188.856 34.2705 189.556 36.777 189.556 40.1299V57H182.476V40.1543C182.476 38.6569 182.183 37.5664 181.597 36.8828C181.011 36.1829 179.977 35.833 178.496 35.833C176.38 35.833 174.915 36.8421 174.102 38.8604L174.126 57H167.07V40.1787C167.07 38.6488 166.769 37.542 166.167 36.8584C165.565 36.1748 164.539 35.833 163.091 35.833C161.089 35.833 159.64 36.6631 158.745 38.3232V57H151.689V30.584H158.306ZM207.158 57.4883C203.285 57.4883 200.127 56.3001 197.686 53.9238C195.26 51.5475 194.048 48.3818 194.048 44.4268V43.7432C194.048 41.0902 194.561 38.722 195.586 36.6387C196.611 34.5391 198.06 32.9277 199.932 31.8047C201.82 30.6654 203.968 30.0957 206.377 30.0957C209.99 30.0957 212.83 31.235 214.897 33.5137C216.981 35.7923 218.022 39.0231 218.022 43.2061V46.0869H201.201C201.429 47.8122 202.113 49.1956 203.252 50.2373C204.408 51.279 205.864 51.7998 207.622 51.7998C210.34 51.7998 212.464 50.8151 213.994 48.8457L217.461 52.7275C216.403 54.2249 214.971 55.3968 213.164 56.2432C211.357 57.0732 209.355 57.4883 207.158 57.4883ZM206.353 35.8086C204.953 35.8086 203.813 36.2806 202.935 37.2246C202.072 38.1686 201.519 39.5195 201.274 41.2773H211.089V40.7158C211.056 39.1533 210.633 37.9489 209.819 37.1025C209.006 36.2399 207.85 35.8086 206.353 35.8086ZM242.949 24.0898V30.584H247.466V35.7598H242.949V48.9434C242.949 49.9199 243.136 50.6198 243.511 51.043C243.885 51.4661 244.601 51.6777 245.659 51.6777C246.44 51.6777 247.132 51.6208 247.734 51.5068V56.8535C246.351 57.2767 244.927 57.4883 243.462 57.4883C238.514 57.4883 235.991 54.9899 235.894 49.9932V35.7598H232.036V30.584H235.894V24.0898H242.949Z"
						fill="white"
					/>
					<path
						d="M334.409 21.4629H321.343V57H312.554V21.4629H299.663V14.3438H334.409V21.4629ZM352.339 57C351.948 56.2383 351.665 55.291 351.489 54.1582C349.438 56.4434 346.772 57.5859 343.491 57.5859C340.386 57.5859 337.808 56.6875 335.757 54.8906C333.726 53.0938 332.71 50.8281 332.71 48.0938C332.71 44.7344 333.95 42.1562 336.431 40.3594C338.931 38.5625 342.534 37.6543 347.241 37.6348H351.138V35.8184C351.138 34.3535 350.757 33.1816 349.995 32.3027C349.253 31.4238 348.071 30.9844 346.45 30.9844C345.024 30.9844 343.901 31.3262 343.081 32.0098C342.28 32.6934 341.88 33.6309 341.88 34.8223H333.413C333.413 32.9863 333.979 31.2871 335.112 29.7246C336.245 28.1621 337.847 26.9414 339.917 26.0625C341.987 25.1641 344.312 24.7148 346.89 24.7148C350.796 24.7148 353.892 25.7012 356.177 27.6738C358.481 29.627 359.634 32.3809 359.634 35.9355V49.6758C359.653 52.6836 360.073 54.959 360.894 56.502V57H352.339ZM345.337 51.1113C346.587 51.1113 347.739 50.8379 348.794 50.291C349.849 49.7246 350.63 48.9727 351.138 48.0352V42.5859H347.974C343.735 42.5859 341.479 44.0508 341.206 46.9805L341.177 47.4785C341.177 48.5332 341.548 49.4023 342.29 50.0859C343.032 50.7695 344.048 51.1113 345.337 51.1113ZM408.647 45.4863L412.808 25.3008H420.981L412.896 57H405.806L399.8 37.0488L393.794 57H386.733L378.647 25.3008H386.821L390.952 45.457L396.753 25.3008H402.876L408.647 45.4863ZM443.569 57C443.179 56.2383 442.896 55.291 442.72 54.1582C440.669 56.4434 438.003 57.5859 434.722 57.5859C431.616 57.5859 429.038 56.6875 426.987 54.8906C424.956 53.0938 423.94 50.8281 423.94 48.0938C423.94 44.7344 425.181 42.1562 427.661 40.3594C430.161 38.5625 433.765 37.6543 438.472 37.6348H442.368V35.8184C442.368 34.3535 441.987 33.1816 441.226 32.3027C440.483 31.4238 439.302 30.9844 437.681 30.9844C436.255 30.9844 435.132 31.3262 434.312 32.0098C433.511 32.6934 433.11 33.6309 433.11 34.8223H424.644C424.644 32.9863 425.21 31.2871 426.343 29.7246C427.476 28.1621 429.077 26.9414 431.147 26.0625C433.218 25.1641 435.542 24.7148 438.12 24.7148C442.026 24.7148 445.122 25.7012 447.407 27.6738C449.712 29.627 450.864 32.3809 450.864 35.9355V49.6758C450.884 52.6836 451.304 54.959 452.124 56.502V57H443.569ZM436.567 51.1113C437.817 51.1113 438.97 50.8379 440.024 50.291C441.079 49.7246 441.86 48.9727 442.368 48.0352V42.5859H439.204C434.966 42.5859 432.71 44.0508 432.437 46.9805L432.407 47.4785C432.407 48.5332 432.778 49.4023 433.521 50.0859C434.263 50.7695 435.278 51.1113 436.567 51.1113ZM465.161 25.3008L465.425 28.9629C467.69 26.1309 470.728 24.7148 474.536 24.7148C477.896 24.7148 480.396 25.7012 482.036 27.6738C483.677 29.6465 484.517 32.5957 484.556 36.5215V57H476.089V36.7266C476.089 34.9297 475.698 33.6309 474.917 32.8301C474.136 32.0098 472.837 31.5996 471.021 31.5996C468.638 31.5996 466.851 32.6152 465.659 34.6465V57H457.192V25.3008H465.161Z"
						fill="#FF1D6C"
					/>
				</g>
				<g filter="url(#filter1_d_5806:6918)">
					<path d="M374.701 5.57067L365.492 10.8155L375.106 16.1607L374.701 5.57067Z" fill="#FF1D6C" />
					<path
						d="M376.2 5.51333L376.106 3.04455L373.959 4.26724L364.75 9.51205L362.434 10.8312L364.763 12.1265L374.377 17.4717L376.707 18.7669L376.605 16.1033L376.2 5.51333Z"
						stroke="#FF1D6C"
						strokeWidth="3"
					/>
				</g>
				<g filter="url(#filter2_d_5806:6918)">
					<rect
						x="255.5"
						y="30.5"
						width="26"
						height="25"
						stroke="#FF1D6C"
						strokeWidth="7"
						shapeRendering="crispEdges"
					/>
				</g>
				<g filter="url(#filter3_d_5806:6918)">
					<circle cx="131.5" cy="44.5" r="14" stroke="#FF1D6C" strokeWidth="7" shapeRendering="crispEdges" />
				</g>
				<g filter="url(#filter4_d_5806:6918)">
					<rect x="365" y="25" width="8" height="32" fill="#FF1D6C" />
				</g>
				<defs>
					<filter
						id="filter0_d_5806:6918"
						x="0.105469"
						y="14.3438"
						width="487.45"
						height="50.2422"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="1.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0431373 0 0 0 0 0.0470588 0 0 0 0.2 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5806:6918" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5806:6918" result="shape" />
					</filter>
					<filter
						id="filter1_d_5806:6918"
						x="356.375"
						y="0.518433"
						width="24.9326"
						height="27.8547"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="1.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0431373 0 0 0 0 0.0470588 0 0 0 0.2 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5806:6918" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5806:6918" result="shape" />
					</filter>
					<filter
						id="filter2_d_5806:6918"
						x="249"
						y="27"
						width="39"
						height="39"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="1.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0431373 0 0 0 0 0.0470588 0 0 0 0.2 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5806:6918" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5806:6918" result="shape" />
					</filter>
					<filter
						id="filter3_d_5806:6918"
						x="111"
						y="27"
						width="41"
						height="42"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="1.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0431373 0 0 0 0 0.0470588 0 0 0 0.2 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5806:6918" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5806:6918" result="shape" />
					</filter>
					<filter
						id="filter4_d_5806:6918"
						x="362"
						y="25"
						width="14"
						height="39"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="1.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0431373 0 0 0 0 0.0470588 0 0 0 0.2 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5806:6918" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5806:6918" result="shape" />
					</filter>
				</defs>
			</svg>
		</>
	);
};
