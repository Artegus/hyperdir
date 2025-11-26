import type { Tags } from "./tag";

export interface Project {
    id: string;
    name: string;
    category: "hyperliquid" | "hyperevm" | "hypercore";
    description: string;
    website?: string;
    twitter?: string;
    tags: Tags[];
}