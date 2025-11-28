import type { FC } from 'react'
import { useProjectFilterContext } from '../hooks/useProjectFilerContext';
import { SearchBar } from './search-bar';
import { TagFilterPopover } from './filters/tag-filter-popover';
import { TAGS } from '../types/tag';
import { SelectedTags } from './filters/selected-tags';
import { CategoryFilter } from './category-filter';

type FiltersSectionProps = {

}

export const FilterSection: FC<FiltersSectionProps> = ({ }) => {
    const {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedTags,
        toggleTag,
        clearTags,
    } = useProjectFilterContext();

    return (
        <div className='flex flex-col gap-4 items-center'>
            <div className='w-full sm:w-3/4 mx-auto'>
                <SearchBar onSearchQuery={setSearchQuery} searchQuery={searchQuery}>
                    <TagFilterPopover
                        allTags={TAGS}
                        onClearTags={clearTags}
                        onToggleTag={toggleTag}
                        selectedTags={selectedTags}
                    />
                </SearchBar>
                <SelectedTags tags={selectedTags} onRemoveTag={toggleTag} />
            </div>
            <CategoryFilter
                selected={selectedCategory}
                onSelect={setSelectedCategory}
            />
        </div>)
}
