import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  // { searchRepositories: dispatch(searchRepositories)} 이런 느낌!
  return bindActionCreators(actionCreators, dispatch);
};
