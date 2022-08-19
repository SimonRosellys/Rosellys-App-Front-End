function SongCard(params) {
  return (
    <Box>
      {songs.map((song) => {
        return (
          <Grid item xs={12}>
            <Item>{song.title}</Item>
          </Grid>
        );
      })}
    </Box>
  );
}

export default SongCard;
