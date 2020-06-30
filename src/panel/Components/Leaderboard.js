import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import "./Leaderboard.css";
import { connect } from "react-redux";
import { globalRankings } from "../../redux/actions/RankingActions";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
  },
  inline: {
    display: "inline",
  },
}));

const AlignItemsList = ({ rankings: { rankings }, globalRankings }) => {
  const classes = useStyles();
  useEffect(() => {
    globalRankings();
  }, []);

  return (
    <List className={classes.root}>
      {rankings &&
        rankings.map((rank, index) => {
          if (index < 3) {
            return (
              <div>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar className="ListItemAvatars">
                    <Avatar
                      alt="I"
                      src={rank.flag}
                      className="ListItemAvatar"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={rank.country}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                        >
                          Rank {index + 1}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            );
          } else {
            return <div></div>;
          }
        })}

      {/* <ListItem alignItems="flex-start">
        <ListItemAvatar className="ListItemAvatars">
          <Avatar alt="A" src="randomImage" className="ListItemAvatar" />
        </ListItemAvatar>
        <ListItemText
          primary="America"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
              >
                Rank 1
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar className="ListItemAvatars">
          <Avatar alt="C" src="randomImage" className="ListItemAvatar" />
        </ListItemAvatar>
        <ListItemText
          primary="China"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
              >
                Rank 1
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem> */}
    </List>
  );
};
AlignItemsList.propTypes = {
  rankings: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  rankings: state.rankings,
});
export default connect(mapStateToProps, { globalRankings })(AlignItemsList);
