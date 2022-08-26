import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { StoreType, AppDispatch } from './initStore'

export const useTypedDispatch = () => useDispatch<AppDispatch>()

export const useTypedSelector: TypedUseSelectorHook<StoreType> = useSelector