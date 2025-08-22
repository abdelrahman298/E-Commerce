import { RootDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<RootDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
