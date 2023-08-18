import { useContext } from 'react'
import { SettingsContext } from 'materialize/context/settingsContext'

export const useSettings = () => useContext(SettingsContext)
