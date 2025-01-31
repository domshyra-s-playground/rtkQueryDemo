import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import PlaylistCard from "./PlaylistCardSelfFetching";
import { useGetPlaylistsQuery } from "../redux/services/spotifyApi";
import { useGetRatingsQuery } from "../redux/services/playlistRatingApi";

const Index = () => {
	const { data, isLoading } = useGetPlaylistsQuery();
	const [cards, setCards] = useState([]);
	
	useGetRatingsQuery();

	useEffect(() => {
		if (!isLoading && data) {
			setCards(renderCards(data));
		}
	}, [data, isLoading]);


	const renderCards = (data) => {
		return data.map((item) => (
			<React.Fragment key={item.spotifyId}>
				<Grid item xs={12} md={6} lg={4} xl={3} pb={2} px={1}>
					<PlaylistCard {...item} />
				</Grid>
			</React.Fragment>
		));
	};

	return (
		<Grid container>{!isLoading ? cards : null}</Grid>
	);
};

export default Index;
