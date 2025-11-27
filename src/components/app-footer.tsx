import type { FC } from 'react'

type AppFooterProps = {

}

export const AppFooter: FC<AppFooterProps> = ({ }) => {
    return <footer className="border-t border-border/50 bg-card/20 backdrop-blur-xl mt-20 w-full">
        <div className="container mx-auto px-4 py-4">
            <div className="text-center text-muted-foreground">
                <p>Hyperliquid Ecosystem Directory</p>
            </div>
        </div>
    </footer>
}
