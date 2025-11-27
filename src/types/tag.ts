export const TAGS = [
	"DEX",
	"Perpetuals",
	"Trading",
	"Analytics",
	"Utils",
	"Tracking",
	"Infrastructure",
	"Protocol",
	"Core",
	"AMM",
	"SDK",
	"Vaults",
	"HIP-3",
	"Explorer",
	"Tools",
	"Lending",
	"Borrowing",
	"Spot Trading",
	'Indexer',
	'Bridge',
	'API'
] as const;

export type Tag = (typeof TAGS)[number];
