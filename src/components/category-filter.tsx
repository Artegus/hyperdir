import type { FC } from 'react'
import type { CategorySearch } from '../types/project';

type CategoryFilterProps = {
    selected: CategorySearch;
    onSelect: (category: CategorySearch) => void;
}

const categories: { id: CategorySearch, label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "hyperliquid", label: "Hyperliquid" },
    { id: "hyperevm", label: "HyperEVM" },
    { id: "hypercore", label: "HyperCore" },
];

export const CategoryFilter: FC<CategoryFilterProps> = ({
    selected,
    onSelect
}) => {
    return <div
        className="flex flex-wrap justify-center gap-3 animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
    >
        {categories.map((category) => (
            <button
                key={category.id}
                onClick={() =>
                    onSelect(category.id)
                }
                className={`px-6 py-3 rounded-full font-medium transition-all ${selected === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                    : "bg-card/40 backdrop-blur-xl border border-border/50 text-secondary-foreground hover:bg-primary/10 hover:border-primary/50"
                    }`}
            >
                {category.label}
            </button>
        ))}
    </div>
}
