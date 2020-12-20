import { combineReducers } from 'redux';

import header from './header';
import about from './about';

export default combineReducers({
    about,
    header,
})