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
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-10 px-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-xl"
                >
                    <TagIcon className="h-4 w-4 mr-2" />
                    Tags
                    {selectedTags.length > 0 && (
                        <span className="ml-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-bold">
                            {selectedTags.length}
                        </span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4 bg-card/95 backdrop-blur-xl border-border/50" align="end">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-sm text-foreground">Filter by tags</h4>
                        {selectedTags.length > 0 && (
                            <button
                                onClick={onClearTags}
                                className="text-xs text-muted-foreground hover:text-primary transition-colors"
                            >
                                Clear all
                            </button>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto">
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => onToggleTag(tag)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedTags.includes(tag)
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-card/50 border border-border/50 text-muted-foreground hover:bg-primary/10 hover:border-primary/30"
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