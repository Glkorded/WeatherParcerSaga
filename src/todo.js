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
//TODO: Single source of truth for containers

/*
Logic of favourites - {
  1: On the main screen clicking the button changes the local "favourites" state array,
  2/1: On each changing of the state we set favourites in the localStorage via the Repository,
  2/2: At the same time we dispatch getFavouritesSaga, which takes localStorage and puts it into "favourites" part of store,
  3: In favourites we use DidMount() to take localStorage and put it into "favourites" part of store, 
  4: In favourites we change local state to be able to delete items from favourites,
  5: On each local state change in favourites we set localStorage to be equal to local state,
  6: On DidMount() back in main screen we set local state to be equal to localStorage via Repository
  7: Items selector being used in getting so-called filteredItems, which takes items from saga
}
*/
/*
localStorage-only logic is: 
1: Gets updated on changing local state on main screen
2: Doesn't get fetched by Favourites component //HERE'S PROBLEM
3: But, Favourites changes it on each unfavourite button handling 
4: Back on main screen on DidMount() we get localStorage again
*/
/*
saga-only logic is:
1: On each handling of favourite button dispatched action with payload, 
1.1: which gets being eaten by saga, which changes "favourite" part of store
2: On Favourites DidMount() we take localStorage and put it into "favourite" part of store
3: Selector in Favourite component grabs fucking store and filters it with input data
4: Store ISN'T BEING updated on unfavouriting //HERE'S PROBLEM
*/
