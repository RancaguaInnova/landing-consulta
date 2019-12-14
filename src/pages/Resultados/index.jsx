import React, { Fragment, useState, useEffect } from "react";
import NivoChart from "./nivoChart";
import ChartSocial from "./chartSocial";
import ChartComunal from "./chartComunal";
import Firebase from "components/FirebaseConfig";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";
import _orderBy from "lodash/orderBy";
const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: "#000" } // This is just green.A700 as hex.
  }
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: 0
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold
  },
  sumaryInstitucional: {
    background: "#d5bcd9",
    fontWeight: theme.typography.fontWeightBold
  },
  sumarySocial: {
    background: "#fce1c6",
    fontWeight: theme.typography.fontWeightBold
  },
  sumaryComunal: {
    background: "#e0f1f9",
    fontWeight: theme.typography.fontWeightBold
  },
  tabInstitucional: {
    background: "#d5bcd9"
  },
  tabSocial: {
    background: "#fce1c6"
  },
  tabComunal: {
    background: "#e0f1f9"
  },
  ExpansionPanelDetails: {
    padding: 0
  },
  tabs: {
    padding: 0
  },
  tabPanel: {
    padding: 0
  }
}));

const Resultados = () => {
  const [idPlace, setIdPlace] = useState("100");
  const [Place, setPlace] = useState(null);
  const [Votos, setVotos] = useState(null);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel0");

  const theme2 = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    if (newValue === 0) {
      setExpanded("panel0");
    } else if (newValue === 1) {
      setExpanded("panelSocial0");
    } else if (newValue === 2) {
      setExpanded("panelComunal0");
    }
    setValue(newValue);
  };

  const handleChangeTabIndex = index => {
    setValue(index);
  };
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    newData();
    votosData();
  }, []);

  const newData = () => {
    var db = Firebase.firestore();
    db.collection("Resultados")
      .where("idPlace", "==", idPlace)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          let data = doc.data();
          setPlace(data);
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  };
  const votosData = () => {
    var db = Firebase.firestore();
    db.collection("Votos")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          let Votos = doc.data();
          setVotos(Votos);
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <Fragment>
      <div>
        <br />
        <h4 className="title">Pagina en construcción</h4>
        <h4 className="title">
          Resultados Consulta Ciudadana Municipal Rancagua 2019.
        </h4>
        <div className="container mt-4 Centro">
          <div className="col">
            El domingo 15 de diciembre de 2019 se realizó la histórica Consulta
            Ciudadana Municipal Rancagua 2019, en esta oportunidad cada vecino
            votó por los temas que consideraba relevantes para la comuna y el
            país. La votación se hizo en forma presencial pero con voto digital
            y para las personas de la tercera edad y aquellos que requerían
            asistencia se facilitó un voto en papel pero con registro digital.
            La participación de esta consulta ciudadana fue la siguiente:
          </div>
        </div>

        {Votos && (
          <div className="container mt-4 Centro">
            <div className="col">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Tipo Voto</th>
                    <th scope="col">N° Votos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Votos digitales </td>
                    <td className="tdWidth">{Votos.digitales}</td>
                  </tr>
                  <tr>
                    <td>Votos físicos (papel) </td>
                    <td className="tdWidth">{Votos.papel}</td>
                  </tr>
                  <tr>
                    <th scope="col">TOTAL DE VOTOS VALIDAMENTE EMITIDOS </th>
                    <td className="tdWidth">{Votos.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        <br />
        <div>
          <div className="title2">
            Se realizaron 3 votos: Institucional, Social y Comunal y los
            resultados son los siguientes:
          </div>
        </div>
        <div className="container mt-5 Centro">
          <ThemeProvider theme={theme}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChangeTab}
                indicatorColor="secondary"
                textColor="secondary"
                variant="fullWidth"
                className={classes.tabs}
              >
                <Tab
                  className={classes.tabInstitucional}
                  label="Institucional"
                  {...a11yProps(0)}
                />
                <Tab
                  className={classes.tabSocial}
                  label="Social"
                  {...a11yProps(1)}
                />
                <Tab
                  className={classes.tabComunal}
                  label="Comunal"
                  {...a11yProps(2)}
                />
              </Tabs>
            </AppBar>
          </ThemeProvider>
          <SwipeableViews
            axis={theme2.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeTabIndex}
          >
            <TabPanel
              value={value}
              index={0}
              dir={theme2.direction}
              className={classes.tabPanel}
            >
              {Place && Place.intitucional && Place.intitucional.length > 0 ? (
                <div className="minhe">
                  {Place.intitucional.map(function(item, index) {
                    return (
                      <ExpansionPanel
                        expanded={expanded === "panel" + index}
                        onChange={handleChange("panel" + index)}
                        key={index}
                      >
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          className={classes.sumaryInstitucional}
                        >
                          <Typography className={classes.heading}>
                            {item.pregunta}
                          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <div className="container">
                            <div className="row">
                              <div key={index} className="chart col">
                                <NivoChart data={item} scheme="set2" />
                              </div>

                              <div className="col">
                                <br />
                                <table className="table table-striped table-bordered ">
                                  <thead>
                                    <tr>
                                      <th scope="col" colSpan={3}>
                                        Tabla de Resultados
                                      </th>
                                    </tr>
                                    <tr>
                                      <th scope="col">Respuesta</th>
                                      <th scope="col">%</th>
                                      <th scope="col">N° Votos</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {_orderBy(
                                      item.respuestas,
                                      [
                                        "porcentaje",
                                        "numeroVotos",
                                        "respuesta"
                                      ],
                                      ["desc", "desc", "asc"]
                                    ).map(function(res, indexRes) {
                                      return (
                                        <tr
                                          key={indexRes}
                                          className={
                                            indexRes === 0
                                              ? "table-success font-weight-bold"
                                              : ""
                                          }
                                        >
                                          <td>{res.respuesta}</td>
                                          <td className="tdWidth">
                                            {res.porcentaje} %
                                          </td>
                                          <td>{res.numeroVotos}</td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme2.direction}>
              {Place && Place.social && Place.social.length > 0 ? (
                <div className="minhe">
                  {Place.social.map(function(item, index) {
                    return (
                      <div key={index}>
                        <div className="row">
                          <table className="table table-striped table-bordered tableSocial">
                            <thead>
                              <tr>
                                <th scope="col" colSpan={3}>
                                  {item.pregunta}
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div className="row">
                          <div key={index} className="chartSocial col">
                            <ChartSocial data={item} />
                          </div>

                          <div className="col">
                            <br />
                            <table className="table table-striped table-bordered tableSocialw">
                              <thead>
                                <tr>
                                  <th scope="col" colSpan={3}>
                                    Tabla de Resultados
                                  </th>
                                </tr>
                                <tr>
                                  <th scope="col">Respuesta</th>
                                  <th scope="col">%</th>
                                  <th scope="col">N° Votos</th>
                                </tr>
                              </thead>
                              <tbody>
                                {_orderBy(
                                  item.respuestas,
                                  ["porcentaje", "numeroVotos", "respuesta"],
                                  ["desc", "desc", "asc"]
                                ).map(function(res, indexRes) {
                                  return (
                                    <tr
                                      key={indexRes}
                                      className={
                                        indexRes === 0 ||
                                        indexRes === 1 ||
                                        indexRes === 2
                                          ? "table-success font-weight-bold"
                                          : ""
                                      }
                                    >
                                      <td>{res.respuesta}</td>
                                      <td className="tdWidth">
                                        {res.porcentaje} %
                                      </td>
                                      <td>{res.numeroVotos}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme2.direction}>
              {Place && Place.comunal && Place.comunal.length > 0 ? (
                <div className="minhe">
                  {Place.comunal.map(function(item, index) {
                    return (
                      <ExpansionPanel
                        expanded={expanded === "panelComunal" + index}
                        onChange={handleChange("panelComunal" + index)}
                        key={index}
                      >
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          className={classes.sumaryComunal}
                        >
                          <Typography className={classes.heading}>
                            {item.pregunta}
                          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <div className="container">
                            <div key={index} className="row">
                              <div className="chartComunal col">
                                <ChartComunal data={item} scheme="dark2" />
                              </div>
                              <div className="col">
                                <br />
                                <table className="table table-striped table-bordered">
                                  <thead>
                                    <tr>
                                      <th scope="col" colSpan={3}>
                                        Tabla de Resultados
                                      </th>
                                    </tr>
                                    <tr>
                                      <th scope="col">Respuesta</th>
                                      <th scope="col">%</th>
                                      <th scope="col">N° Votos</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {_orderBy(
                                      item.respuestas,
                                      [
                                        "porcentaje",
                                        "numeroVotos",
                                        "respuesta"
                                      ],
                                      ["desc", "desc", "asc"]
                                    ).map(function(res, indexRes) {
                                      return (
                                        <tr
                                          key={indexRes}
                                          className={
                                            indexRes === 0
                                              ? "table-success font-weight-bold"
                                              : ""
                                          }
                                        >
                                          <td>{res.respuesta}</td>
                                          <td className="tdWidth">
                                            {res.porcentaje} %
                                          </td>
                                          <td>{res.numeroVotos}</td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
      <div />
    </Fragment>
  );
};
export default Resultados;
