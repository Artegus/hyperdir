import type { FC } from 'react'

type AppFooterProps = {

}

export const AppFooter: FC<AppFooterProps> = ({ }) => {
    return (
        <footer className="border-t border-border mt-32">
            <div className="container mx-auto px-6 py-8">
                <div className="text-center">
                    <p className="text-xs text-muted-foreground">2025 Hyperliquid Ecosystem</p>
                </div>
            </div>
        </footer>
    )
}
