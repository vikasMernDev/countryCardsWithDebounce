import  { useContext, useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import CountriesList from './CountriesList'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('')
    const [isDark] = useContext(ThemeContext)
    return (
        <>
            <Header />
            <main className={`${isDark ? 'dark' : ''}`}>
                <div className={`search-filter-container ${isDark ? 'dark' : ''}`}>
                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </div>
                <CountriesList searchQuery={searchQuery} />
            </main>
        </>
    )
}
