import type { Tag } from "./tag";
export type Category = "hyperliquid" | "hyperevm" | "hypercore";
export type CategorySearch = Category | 'all'; 
export interface Project {
    id: string;
    name: string;
    category: Category;
    description: string;
    website?: string;
    twitter?: string;
    tags: Tag[];
}