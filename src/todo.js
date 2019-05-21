//TODO: Actions+reducers+selectors into one single file //DONE
//TODO: Root sagas //DONE
//TODO: TDD //DONE
//TODO: manager rename //DONE
//TODO: rename tests //DONE
//TODO: rootReducer and rootSaga //DONE
//TODO: store move to modules //DONE
//TODO: constants api move in managers //DONE
//TODO: Repository //DONE
//TODO: Indexes //DONE
//TODO: Change containers/components architecture //DONE
//TODO: Single source of truth for favourites //DONE

//TODO: Test //DONE
//TODO: Fetches //DONE
//TODO: Minor rebuild in weather duck //DONE
//TODO: Probably minor rebuild in cityweather duck //DONE
//TODO: .env //DONE

/*
how everything must work:
1: On main screen on each button click we dispatch saga with new payload, which sets localStorage to the payload
2: On favourite DidMount() we take localStorage via selectors
3: On unfavouriting we again dispatch saga with new payload and equalising localStorage to the payload
4: On main screen DidMount() we just get new data about favourites via selectors
*/
