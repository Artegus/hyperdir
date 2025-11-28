import { XIcon } from "@phosphor-icons/react";
import type { Tag } from "../../types/tag";

type SelectedTagsProps = {
    tags: Tag[];
    onRemoveTag: (tag: Tag) => void;
}

export const SelectedTags = ({ tags, onRemoveTag }: SelectedTagsProps) => {
    if (tags.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-accent text-foreground"
                >
                    {tag}
                    <button
                        onClick={() => onRemoveTag(tag)}
                        className="hover:bg-muted rounded p-0.5 transition-colors"
                    >
                        <XIcon className="h-3 w-3" />
                    </button>
                </span>
            ))}
        </div>
    );
}