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
	"Developer Tools",
	"SDK",
	"Vaults",
	"HIP-3",
	"Explorer",
	"Tools",
	"Lending",
	"Borrowing",
	"Spot Trading",
	"AMM",
	"Validators",
	"Security",
	"Node",
	'Indexer',
	'Bridge',
	'API'
] as const;

export type Tag = (typeof TAGS)[number];
