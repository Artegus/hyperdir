import { XIcon } from "@phosphor-icons/react";
import type { Tag } from "../../types/tag";

type SelectedTagsProps = {
    tags: Tag[];
    onRemoveTag: (tag: Tag) => void;
}

export const SelectedTags = ({ tags, onRemoveTag }: SelectedTagsProps) => {
    if (tags.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-primary/20 text-primary border border-primary/30"
                >
                    {tag}
                    <button
                        onClick={() => onRemoveTag(tag)}
                        className="hover:bg-primary/30 rounded-full p-0.5 transition-colors"
                    >
                        <XIcon className="h-3 w-3" />
                    </button>
                </span>
            ))}
        </div>
    );
}