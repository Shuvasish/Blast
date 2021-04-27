// KEY
const key = "key=2f1d74b854e544378848396c088d8c64";

// BASE URL
const base_url = "https://api.rawg.io/api/";

// GETTING DATES
const getCurrentMonth = () => {
  let month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
getCurrentMonth();

// GETTING DATES
const getCurrentDay = () => {
  let day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
getCurrentDay();

// CURRENT DAY/MONTH/YEAR
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// POPULAR GAMES
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}&${key}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}&${key}`;
export const newGamesURL = () => `${base_url}${new_games}&${key}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?${key}`;

//GAME SCREENSHOTS
export const gameScreenShotsURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?${key}`;
