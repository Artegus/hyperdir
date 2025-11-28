import type { FC } from 'react'
import { FilterSection } from './filters-section'

export const DashboardHeader: FC = ({ }) => {
    return <section>
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-foreground leading-tight animate-fade-in-up">
                    <span className="gradient-text" id="hyperliquid">
                        Hyperliquid
                    </span>{" "}
                    <span>Ecosystem Directory</span>
                </h2>
                <p
                    className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: "0.1s" }}
                >
                    Projects building on Hyperliquid, HyperEVM, and HyperCore
                </p>
                <FilterSection />
            </div>
        </div>
    </section>
}
