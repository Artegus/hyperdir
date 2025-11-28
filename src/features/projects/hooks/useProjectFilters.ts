import { useState, useMemo } from "react";
import { projects } from "@/features/projects/data/projects";
import type { Category } from "../types/project";
import { type Tag } from "../types/tag";

type CategorySearch = Category | 'all';

export const useProjectFilter = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<CategorySearch>('all');
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);


    const toggleTag = (tag: Tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const clearTags = () => setSelectedTags([]);

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;

            const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));

            return matchesSearch && matchesCategory && matchesTags;
        });
    }, [searchQuery, selectedCategory, selectedTags]);

    return {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedTags,
        toggleTag,
        clearTags,
        filteredProjects,
    };
};