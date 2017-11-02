import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_AUDIO = "RECEIVE_SEARCH_AUDIO";

export const receiveSearchAudios = results => {
  return {
    type: RECEIVE_SEARCH_AUDIO,
    results,
  };
};

export const sendSearch = query => dispatch => {
  return SearchApiUtil.sendSearch(query).then(
    results => dispatch(receiveSearchAudios(results))
  );
};
