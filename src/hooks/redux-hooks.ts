import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { IRootState } from "../store";
import * as todoActions from "../store/actions/todoActions";

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(todoActions, dispatch);
}
