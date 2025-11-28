import { TagIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import type { Tag } from "../../types/tag";

type TagFilterPopoverProps = {
    allTags: readonly Tag[];
    selectedTags: Tag[];
    onToggleTag: (tag: Tag) => void;
    onClearTags: () => void;
}

export const TagFilterPopover = ({
    allTags,
    selectedTags,
    onToggleTag,
    onClearTags,
}: TagFilterPopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size='sm'
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-3 text-xs font-medium hover:bg-accent"
                >
                    <TagIcon className="h-3 w-3 mr-1.5" />
                    Tags
                    {selectedTags.length > 0 && (
                        <span className="ml-1.5 bg-foreground text-background rounded-full w-4 h-4 text-[10px] font-semibold flex items-center justify-center">
                            {selectedTags.length}
                        </span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-3" align="end">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xs font-medium text-foreground">Filter by tags</h4>
                        {selectedTags.length > 0 && (
                            <button
                                onClick={() => onClearTags()}
                                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-h-60 overflow-y-auto">
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => onToggleTag(tag)}
                                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${selectedTags.includes(tag)
                                        ? "bg-foreground text-background"
                                        : "bg-accent text-foreground hover:bg-muted"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};