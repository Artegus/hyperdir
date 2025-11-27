import type { FC } from 'react'
import type { CategorySearch } from '../types/project';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

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
    return (

        <ToggleGroup
            type="single"
            value={selected}
            onValueChange={(value) => value && onSelect(value as CategorySearch)}
            className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-full p-1 shadow-lg"
        >
            {categories.map((category) => (
                <ToggleGroupItem
                    key={category.id}
                    value={category.id}
                    className="rounded-full px-6 py-2 text-sm font-medium data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-md transition-all"
                >
                    {category.label}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    )
}
