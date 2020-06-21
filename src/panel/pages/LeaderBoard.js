import React from "react";
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
import mail from "../email.png";
import arrow from "../back-arrow.png";
import team from "../team.PNG";
import flag from "../flag.PNG";
import "./lead_style.css";

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
function ComLeaderboard() {
  const classes = useStyles();
  return (
    <div>
      <div className="container">
          <div className="error">Please use our desktop site</div>
         </div>
         <div className="panel">
          <Row style={{ borderBottom: "1px #8A8D92 solid" }}>
            <Col sm={2} style={{ backgroundColor: "#2D3135" }} className="logo">
              <img src={logo} className="msc-logo" />
              <Link to="/logout" className="arrow">
                <img src={arrow} className="arrow" />
              </Link>
            </Col>
            <Col sm={10} style={{ backgroundColor: "#2D3135" }}>
              <Link to="/logout">
                <p className="head-icons">Logout</p>
              </Link>

              <Link to="/logout">
                <img src={notepad} className="head-icons" />
              </Link>

              <Link to="/logout">
                <img src={mail} className="head-icons" />
              </Link>
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
                  src={team}
                  alt="Generic placeholder"
                  style={{
                    borderRadius: "50%",
                    marginLeft: "12px",
                  }}
                />
                <Media.Body className="team">
                  <h5>Team 1</h5>
                  <p>Rank 1</p>
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
                    href="/traderulebook"
                    eventKey="link-4"
                    className="navStyle"
                  >
                    <FaWindowMaximize className="icon" />
                    Trade Rulebook
                  </Nav.Link>
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
                <Col sm={12} className="dashboard">
                  Leaderboard
                </Col>
              </Row>
          <Row>
            <Col sm={12} className="component1">
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
                      <Avatar variant="square" >
                        <img src={flag} className="flag" />
                      </Avatar>
                      <Grid>
                        <Typography noWrap>COUNTRY NAME</Typography>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Typography noWrap>RANK 6</Typography>
                    </Grid>
                    <Grid>
                      <Typography>GDP-X BITS</Typography>
                    </Grid>
                  </Grid>
                </Paper>
                <p className={classes.heading}>GLOBAL RANKINGS</p>
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
                        W
                      </Avatar>
                      <Grid>
                        <Typography noWrap>COUNTRY NAME</Typography>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Typography noWrap>RANK 6</Typography>
                    </Grid>
                    <Grid>
                      <Typography>GDP-X BITS</Typography>
                    </Grid>
                  </Grid>
                </Paper>
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
                        W
                      </Avatar>
                      <Grid>
                        <Typography noWrap>COUNTRY NAME</Typography>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Typography noWrap>RANK 6</Typography>
                    </Grid>
                    <Grid>
                      <Typography>GDP-X BITS</Typography>
                    </Grid>
                  </Grid>
                </Paper>
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
                        W
                      </Avatar>
                      <Grid>
                        <Typography noWrap>COUNTRY NAME</Typography>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Typography noWrap>RANK 6</Typography>
                    </Grid>
                    <Grid>
                      <Typography>GDP-X BITS</Typography>
                    </Grid>
                  </Grid>
                </Paper>
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
                        W
                      </Avatar>
                      <Grid>
                        <Typography noWrap>COUNTRY NAME</Typography>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Typography noWrap>RANK 6</Typography>
                    </Grid>
                    <Grid>
                      <Typography>GDP-X BITS</Typography>
                    </Grid>
                  </Grid>
                </Paper>
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
                        W
                      </Avatar>
                      <Grid>
                        <Typography noWrap>COUNTRY NAME</Typography>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Typography noWrap>RANK 6</Typography>
                    </Grid>
                    <Grid>
                      <Typography>GDP-X BITS</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      </div>
    </div>
  );
}
export default ComLeaderboard;
