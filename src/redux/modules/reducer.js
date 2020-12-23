import { combineReducers } from 'redux';

import header from './header';
import about from './about';
import education from "./education";
import work from './work';

export default combineReducers({
    about,
    header,
    education,
    work
})