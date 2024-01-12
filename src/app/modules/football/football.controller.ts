import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";

const getLeagueTable = CatchAsyncError(async (req: Request, res: Response) => {
  const result = [
    {
      team: "Arsenal",
      played: 10,
      win: 7,
      draw: 2,
      loss: 1,
      goalsFor: 16,
      goalsAgainst: 6,
      points: 23,
      logo: "https://media.api-sports.io/football/teams/33.png",
    },
    {
      team: "Tottenham",
      played: 10,
      win: 5,
      draw: 4,
      loss: 1,
      goalsFor: 18,
      goalsAgainst: 7,
      points: 19,
      logo: "https://media.api-sports.io/football/teams/32.png",
    },
    {
      team: "Manchester",
      played: 10,
      win: 5,
      draw: 4,
      loss: 1,
      goalsFor: 12,
      goalsAgainst: 4,
      points: 19,
      logo: "https://media.api-sports.io/football/teams/34.png",
    },
    {
      team: "Liverpool",
      played: 9,
      win: 4,
      draw: 3,
      loss: 2,
      goalsFor: 11,
      goalsAgainst: 11,
      points: 15,
      logo: "https://media.api-sports.io/football/teams/47.png",
    },
    {
      team: "Everton",
      played: 11,
      win: 3,
      draw: 4,
      loss: 4,
      goalsFor: 23,
      goalsAgainst: 20,
      points: 13,
      logo: "https://media.api-sports.io/football/teams/50.png",
    },
  ];

  res.status(200).json({
    success: true,
    result,
    statusCode: 200,
    message: "Football league successfully",
  });
});

const getLeaderBoard = CatchAsyncError(async (req: Request, res: Response) => {
  const result = [
    {
      playerName: "Harry Kane",
      goals: 23,
      penalties: 2,
      photo: "https://media.api-sports.io/football/players/886.png",
    },
    {
      playerName: "Mohamed Salah",
      goals: 21,
      penalties: 1,
      photo: "https://media.api-sports.io/football/players/887.png",
    },
    {
      playerName: "Sergio Agüero",
      goals: 17,
      penalties: 4,
      photo: "https://media.api-sports.io/football/players/888.png",
    },
    {
      playerName: "Raheem Sterling",
      goals: 14,
      penalties: 1,
      photo: "https://media.api-sports.io/football/players/889.png",
    },
    {
      playerName: "Jamie Vardy",
      goals: 12,
      penalties: 4,
      photo: "https://media.api-sports.io/football/players/885.png",
    },
  ];

  res.status(200).json({
    success: true,
    result,
    statusCode: 200,
    message: "Football leader board successfully",
  });
});

const getFixers = CatchAsyncError(async (req: Request, res: Response) => {
  const result = [
    {
      location: "Old Trafford",
      time: "15:00",
      teamOne: {
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png",
      },
      teamTwo: {
        name: "Liverpool",
        logo: "https://media.api-sports.io/football/teams/34.png",
      },
    },
    {
      location: "Etihad Stadium",
      time: "16:00",
      teamOne: {
        name: "Southampton",
        logo: "https://media.api-sports.io/football/teams/49.png",
      },
      teamTwo: {
        name: "Arsenal",
        logo: "https://media.api-sports.io/football/teams/42.png",
      },
    },
    {
      location: "Craven Cotge",
      time: "17:30",
      teamOne: {
        name: "Manchester City",
        logo: "https://media.api-sports.io/football/teams/50.png",
      },
      teamTwo: {
        name: "Newcastle",
        logo: "https://media.api-sports.io/football/teams/47.png",
      },
    },
    {
      location: "Carrow Road",
      time: "18:30",
      teamOne: {
        name: "Leicester City",
        logo: "https://media.api-sports.io/football/teams/46.png",
      },
      teamTwo: {
        name: "Everton",
        logo: "https://media.api-sports.io/football/teams/45.png",
      },
    },
    {
      location: "Amex Stadium",
      time: "20:00",
      teamOne: {
        name: "West Ham United",
        logo: "https://media.api-sports.io/football/teams/52.png",
      },
      teamTwo: {
        name: "Chelsea",
        logo: "https://media.api-sports.io/football/teams/41.png",
      },
    },
  ];

  res.status(200).json({
    success: true,
    result,
    statusCode: 200,
    message: "Football leader board successfully",
  });
});

const getLiveMatch = CatchAsyncError(async (req: Request, res: Response) => {
  const result = {
    location: "Manchester",
    time: "20:00",
    timeLeft: "50:42",
    teamOne: {
      name: "Manchester",
      logo: "https://media.api-sports.io/football/teams/33.png",
      goals: 1,
    },
    teamTwo: {
      name: "Liverpool",
      logo: "https://media.api-sports.io/football/teams/34.png",
      goals: 0,
    },
    leagueName: "Premier league",
    ratioOne: 2.1,
    ratioTwo: 2.2,
    ratioThree: 2.3,
  };

  res.status(200).json({
    success: true,
    result,
    statusCode: 200,
    message: "Football leader board successfully",
  });
});

const getTrendingNow = CatchAsyncError(async (req: Request, res: Response) => {
  const result = {
    location: "Old Trafford",
    time: "18:30",
    timeLeft: "62:30",
    teamOne: {
      name: "Leicester",
      logo: "https://media.api-sports.io/football/teams/41.png",
      goals: 3,
    },
    teamTwo: {
      name: "Everton",
      logo: "https://media.api-sports.io/football/teams/52.png",
      goals: 1,
    },
    leagueName: "Premier league",
    ratioOne: 2.3,
    ratioTwo: 2.2,
    ratioThree: 2.1,
  };

  res.status(200).json({
    success: true,
    result,
    statusCode: 200,
    message: "Football leader board successfully",
  });
});

export const footballControllers = {
  getLeagueTable,
  getLeaderBoard,
  getFixers,
  getLiveMatch,
  getTrendingNow,
};
