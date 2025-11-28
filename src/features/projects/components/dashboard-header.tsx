import type { FC } from 'react'
import { FilterSection } from './filters-section'

export const DashboardHeader: FC = ({ }) => {
    return <section className='border-b border-border'>
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-6xl md:text-7xl font-light mb-6 text-foreground leading-[1.1] tracking-tight text-balance">
                    Hyperliquid Ecosystem
                </h1>
                <p
                    className="text-lg text-muted-foreground mb-12 font-light tracking-wide"
                    style={{ animationDelay: "0.1s" }}
                >
                    Projects building on Hyperliquid, HyperEVM, and HyperCore
                </p>
                <FilterSection />
            </div>
        </div>
    </section>
}
