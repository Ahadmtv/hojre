import { TypedUseSelectorHook , useDispatch, useSelector } from "react-redux";
import type {RootState , AppDispatch} from  '../Redux/index'

// حل مشکل استفاده از برخی هوک ها در تایپ اسکریپت
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();