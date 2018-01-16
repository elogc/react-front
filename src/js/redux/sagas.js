import { fork } from 'redux-saga/effects';

import * as auth from './Auth/auth.sagas';
import * as shops from './Shops/shops.sagas';

export default function* rootSaga() {
  yield [
    // Here comes the sagas of each module
    // fork(i18n.sagas),
    // fork(popups.sagas),
    // fork(preloader.sagas),
    // fork(savePoint.sagas),
    // fork(screens.sagas),
    // fork(ui.sagas),
    // fork(xgame.sagas),
    // fork(documents.sagas),

    // must be here because all other modules register components inside game
    // module .
    // fork(game.sagas),
    // must be the last because this saga start the game initialization
    fork(shops.sagas),
    fork(auth.sagas),
  ];
}
