import { combineReducers } from 'redux';

import header from './header';
import home from './home';
import about from './about';
import education from "./education";
import work from './work';
import skills from './skills';

export default combineReducers({
    home,
    about,
    header,
    education,
    work,
    skills
})