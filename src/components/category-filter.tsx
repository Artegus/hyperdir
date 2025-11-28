import type { FC } from 'react'
import type { CategorySearch } from '../types/project';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

type CategoryFilterProps = {
    selected: CategorySearch;
    onSelect: (category: CategorySearch) => void;
}

const categories: { id: CategorySearch, label: string }[] = [
    { id: "all", label: "All" },
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
            className="sm:inline-flex border border-border rounded-lg p-0.5 bg-background"
        >
            {categories.map((category) => (
                <ToggleGroupItem
                    key={category.id}
                    value={category.id}
                    className="rounded-md px-4 py-1.5 text-xs font-medium data-[state=on]:bg-accent transition-all"
                >
                    {category.label}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    )
}