import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import type { FC, PropsWithChildren } from 'react'
import { Input } from './ui/input'

type SearchBarProps = {
    searchQuery: string;
    onSearchQuery: (query: string) => void;
} & PropsWithChildren;

export const SearchBar: FC<SearchBarProps> = ({ searchQuery, onSearchQuery, children }) => {
    return (
        <div
            className="relative mb-2 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
        >
            <MagnifyingGlassIcon className="absolute z-[1] left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                type="text"
                name='search'
                id='search'
                placeholder="Search project by name"
                value={searchQuery}
                onChange={(e) => onSearchQuery(e.target.value)}
                className="pl-14 pr-6 py-6 text-lg bg-card/40 backdrop-blur-xl border-border/50 focus:border-primary rounded-2xl shadow-lg hover:shadow-xl transition-all"
            />
            {children}
        </div>
    )
}
