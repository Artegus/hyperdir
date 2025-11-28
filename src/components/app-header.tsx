import type { FC } from 'react'
import { NavLink } from 'react-router'
import { HlSymbolDarkGreen } from './icons/hl-symbol-dark-green'
import { HlSymbolLightGreen } from './icons/hl-symbol-light-green'

type AppHeaderProps = {

}

export const AppHeader: FC<AppHeaderProps> = ({ }) => {
    return (
        <header className='border-b border-border'>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <NavLink className="flex items-center gap-3" to="/">
                        <HlSymbolLightGreen size={24} />
                        <h1 className="text-lg italic hidden sm:block">
                            HyperDir
                        </h1>
                    </NavLink>
                    <nav className="md:flex gap-8 items-center font-light">
                        <a
                            href="https://hyperliquid.gitbook.io/hyperliquid-docs"
                            className="transition-colors hover:text-foreground"
                            target='_blank'
                        >
                            HL Resources
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
