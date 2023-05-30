import { configureStore } from '@reduxjs/toolkit';
import csgoSlice from './CsgoSlice';
import leagueSlice from './LeagueSlice';
import valorantSlice from './ValorantSlice';
import navSlice from './NavSlice';
import bugSlice from './BugSlice';
import leaderboardSlice from './LeaderboardSlice';
import settingsSlice from './SettingsSlice';
import submitSlice from './SubmitSlice';
import apexSlice from './ApexSlice';
import rainbowSlice from './RainbowSlice';
import fortniteSlice from './FortniteSlice';
import rocketSlice from './RocketSlice';
import overwatchSlice from './OverwatchSlice';

const store = configureStore({
  reducer: {
    csgo: csgoSlice.reducer,
    league: leagueSlice.reducer,
    nav: navSlice.reducer,
    valorant: valorantSlice.reducer,
    bug: bugSlice.reducer,
    leaderboard: leaderboardSlice.reducer,
    settings: settingsSlice.reducer,
    submit: submitSlice.reducer,
    apex: apexSlice.reducer,
    rainbow: rainbowSlice.reducer,
    fortnite: fortniteSlice.reducer,
    rocket: rocketSlice.reducer,
    overwatch: overwatchSlice.reducer,
  },
});

export default store;
