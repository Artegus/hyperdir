import type { FC } from 'react'
import { NavLink } from 'react-router'
import { HlSymbolDarkGreen } from './icons/hl-symbol-dark-green'

type AppHeaderProps = {

}

export const AppHeader: FC<AppHeaderProps> = ({ }) => {
    return <header>
        <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between bg-white/95 backdrop-blur-3xl border-border/50 rounded-full px-6 py-3 shadow-lg">
                <NavLink className="flex items-center gap-3" to="/">
                    <HlSymbolDarkGreen size={24} />
                    <h1 className="text-lg italic text-black hidden sm:block">
                        HyperDir
                    </h1>
                </NavLink>
                <nav className="hidden md:flex gap-8 items-center text-black">
                    <a
                        href="https://hyperliquid.gitbook.io/hyperliquid-docs"
                        className="hover:text-primary transition-colors"
                        target='_blank'
                    >
                        HL Resources
                    </a>
                </nav>
            </div>
        </div>
    </header>
}
