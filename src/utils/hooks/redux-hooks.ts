import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatchT, RootState} from '../../redux';


export const useAppDispatch = () => useDispatch<AppDispatchT>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;