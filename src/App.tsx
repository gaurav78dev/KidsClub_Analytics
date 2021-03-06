import "./App.css";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import CanvasJSReact from "./assets/canvasjs.react";
import { Grid } from "@material-ui/core";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const kidsData = [
  { member: "steve", game: "Chess", date: "2015-01-01T01:00:00.000Z" },
  { member: "steve", game: "Tennis", date: "2015-01-02T02:00:00.000Z" },
  { member: "steve", game: "Soccer", date: "2015-01-03T03:00:00.000Z" },
  { member: "steve", game: "Chess", date: "2015-01-06T04:00:00.000Z" },
  { member: "steve", game: "Chess", date: "015-01-06T05:00:00.000Z" },

  { member: "steve", game: "Tennis", date: "2015-01-07T06:00:00.000Z" },
  { member: "steve", game: "Tennis", date: "2015-01-07T07:00:00.000Z" },
  { member: "steve", game: "Soccer", date: "2015-01-07T08:00:00.000Z" },
  { member: "steve", game: "Soccer", date: "2015-01-08T09:00:00.000Z" },
  { member: "steve", game: "Chess", date: "2015-01-09T01:00:00.000Z" },

  { member: "steve", game: "Tennis", date: "2015-01-10T02:00:00.000Z" },
  { member: "steve", game: "Soccer", date: "2015-01-11T03:00:00.000Z" },
  { member: "steve", game: "Soccer", date: "2015-01-12T04:00:00.000Z" },
  { member: "steve", game: "Tennis", date: "2015-01-13T05:00:00.000Z" },
  { member: "steve", game: "Chess", date: "2015-01-15T06:00:00.000Z" },

  { member: "steve", game: "Soccer", date: "2015-01-17T07:00:00.000Z" },
  { member: "bob", game: "Tennis", date: "2015-01-01T08:00:00.000Z" },
  { member: "bob", game: "Tennis", date: "2015-03-01T09:00:00.000Z" },
  { member: "bob", game: "Soccer", date: "2015-03-01T01:00:00.000Z" },
  { member: "bob", game: "Chess", date: "2015-08-01T02:00:00.000Z" },

  { member: "jack", game: "Chess", date: "2015-02-01T03:00:00.000Z" },
  { member: "jack", game: "Chess", date: "2015-04-01T04:00:00.000Z" },
  { member: "jack", game: "Tennis", date: "2015-05-01T05:00:00.000Z" },
  { member: "jack", game: "Soccer", date: "2015-05-01T06:00:00.000Z" },
  { member: "jack", game: "Chess", date: "2015-05-01T07:00:00.000Z" },
];

function App() {
  const steveGamesPlayed = kidsData.filter((x) => x.member === "steve").length;
  const bobGamesPlayed = kidsData.filter((x) => x.member === "bob").length;
  const jackGamesPlayed = kidsData.filter((x) => x.member === "jack").length;

  const ChessGamecount =
    (kidsData.filter((x) => x.game === "Chess").length / kidsData.length) * 100;
  const TennisGameCount =
    (kidsData.filter((x) => x.game === "Tennis").length / kidsData.length) *
    100;
  const SoccerGameCount =
    (kidsData.filter((x) => x.game === "Soccer").length / kidsData.length) *
    100;

  const dataPoints = [
    { y: ChessGamecount, label: "Chess" },
    { y: TennisGameCount, label: "Tennis" },
    { y: SoccerGameCount, label: "Soccer" },
  ];

  
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    data: [
      {
        type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
        dataPoints,
      },
    ],
  };

  return (
    <div className="App">
      <div>
        <h1>Data Analysis for Kids Club </h1>
        <h6>Games played by : steve </h6>
      </div>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <div>
            <TableRow>
              <TableCell align="right">Member </TableCell>
              <TableCell align="right">Games Played</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">Steve</TableCell>
              <TableCell align="right">{steveGamesPlayed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">bob</TableCell>
              <TableCell align="right">{bobGamesPlayed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">jack</TableCell>
              <TableCell align="right">{jackGamesPlayed}</TableCell>
            </TableRow>
          </div>
        </Grid>
        <CanvasJSChart options={options} />
      </Grid>
    </div>
  );
}

export default App;
