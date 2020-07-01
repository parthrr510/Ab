import React, { useEffect, useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Media from "react-bootstrap/Media";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { AiOutlineTable } from "react-icons/ai";
import { FaWindowMaximize } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import logo from "../msc_logo.png";
import notepad from "../note.png";
import arrow from "../back-arrow.png";
import "./lead_style.css";
import Notifications from "../Components/Notifications";
import TradeRulebook from "../pages/TradeRulebook";
import { connect } from "react-redux";
import { leaderData } from "../../redux/actions/LeaderActions";
import { globalRankings } from "../../redux/actions/RankingActions";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: "auto",
    margin: `${theme.spacing(1.5)}px auto`,
    padding: theme.spacing(1.25),
    backgroundColor: "#2e3036",
    color: "#dcdcdc",
    fontSize: "21px",
    borderRadius: "8px",
  },
  heading: {
    color: "#ed6a7a",
    fontSize: "27px",
    alignContent: "center",
  },
  avatar: {
    width: "5rem",
  },
}));
const Leaderboard = ({
  team: { country, continent, flag, GDP },
  leaderData,
  rankings: { rankings },
  globalRankings,
}) => {
  const classes = useStyles();

  //for notifications
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    leaderData();
    globalRankings();
  }, []);

  //for trade rulebook
  const [showBook, setShowBook] = useState(false);

  const handleCloseBook = () => setShowBook(false);
  const handleShowBook = () => setShowBook(true);

  return (
    <div>
      <div className="container">
        <div className="error">Please use our desktop site</div>
      </div>
      <div className="panel">
        <Row style={{ borderBottom: "1px #8A8D92 solid" }}>
          <Col sm={2} style={{ backgroundColor: "#2D3135" }} className="logo">
            <img src={logo} className="msc-logo" alt="MSC_Logo" />
            <Link to="/panel" className="arrow">
              <img src={arrow} className="arrow" alt="back" />
            </Link>
          </Col>
          <Col sm={10} style={{ backgroundColor: "#2D3135" }}>
            <Link to="/logout">
              <p className="head-icons">Logout</p>
            </Link>

            <img
              src={notepad}
              className="head-icons"
              onClick={handleShow}
              alt="Notepad"
            />

            <Notifications
              show={show}
              setShow={setShow}
              handleClose={handleClose}
            />

            <div className="title">ABHYUDAYA</div>
          </Col>
        </Row>
        <Row>
          <Col sm={2} className="side-nav1">
            <Media style={{ marginTop: "3rem" }}>
              <img
                width={55}
                height={55}
                className="team"
                src={flag}
                alt="Generic placeholder"
                style={{
                  borderRadius: "50%",
                  marginLeft: "12px",
                }}
              />
              <Media.Body className="team">
                <h5>{country}</h5>
                <p>{continent}</p>
              </Media.Body>
            </Media>
            <Nav
              className=" d-md-block  sidebar"
              style={{ paddingTop: "2rem" }}
            >
              <div className="sidebar-sticky"></div>
              <Nav.Item>
                <Nav.Link href="/" className="navStyle">
                  <RiHome2Line className="icon" />
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/leaderboard"
                  eventKey="link-1"
                  className="navStyle"
                >
                  <AiOutlineTable className="icon" />
                  Leaderboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/updates"
                  eventKey="link-2"
                  className="navStyle"
                >
                  <MdUpdate className="icon" />
                  Updates
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/trading"
                  eventKey="link-3"
                  className="navStyle"
                >
                  <FaHandshake className="icon" />
                  Trading
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-4"
                  className="navStyle"
                  onClick={handleShowBook}
                >
                  <FaWindowMaximize className="icon" />
                  Trade Rulebook
                </Nav.Link>
                <TradeRulebook
                  showBook={showBook}
                  setShowBook={setShowBook}
                  handleCloseBook={handleCloseBook}
                />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/discord"
                  eventKey="link-5"
                  className="navStyle"
                  style={{ paddingBottom: "44px" }}
                >
                  <FaDiscord className="icon" />
                  Discord
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10} className="dv">
            <Row>
              <Col sm={12} className="dashboard1">
                Leaderboard
              </Col>
            </Row>
            <Row>
              <Col sm={12} className="component1 content-section">
                <div className={classes.root}>
                  <Paper className={classes.paper}>
                    <Grid
                      container
                      wrap="nowrap"
                      spacing={1}
                      style={{ justifyContent: "space-between" }}
                    >
                      <Grid
                        item
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Avatar variant="square">
                          <img src={flag} className="flag" alt="" />
                        </Avatar>
                        <Grid>
                          <Typography noWrap>{country}</Typography>
                        </Grid>
                      </Grid>

                      <Grid item>
                        <Typography noWrap>{continent}</Typography>
                      </Grid>
                      <Grid>
                        <Typography>GDP- {GDP} BITS</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                  <p className={classes.heading}>GLOBAL RANKINGS</p>

                  {rankings &&
                    rankings.map((rank, index) => (
                      <Paper className={classes.paper}>
                        <Grid
                          container
                          wrap="nowrap"
                          spacing={1}
                          style={{ justifyContent: "space-between" }}
                        >
                          <Grid
                            item
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Avatar variant="square" className={classes.avatar}>
                              <img src={rank.flag} alt="I" />
                            </Avatar>
                            <Grid>
                              <Typography noWrap>{rank.country}</Typography>
                            </Grid>
                          </Grid>

                          <Grid item>
                            <Typography noWrap>RANK {index + 1}</Typography>
                          </Grid>
                          <Grid>
                            <Typography>GDP-{rank.GDP} BITS</Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
// Leaderboard.propTypes = {
//   leader: PropTypes.object.isRequired,
//   rankings: PropTypes.array.isRequired,
// };
const mapStateToProps = (state) => ({
  team: state.team,
  rankings: state.rankings,
});

export default connect(mapStateToProps, { leaderData, globalRankings })(
  Leaderboard
);
