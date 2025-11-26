import type { Project } from "../types/project";

export const projects: Project[] = [
	{
		id: "1",
		name: "Hyperliquid DEX",
		category: "hyperliquid",
		description:
			"The main decentralized exchange offering perpetual futures with deep liquidity and low fees. Native trading platform with advanced order types.",
		website: "https://app.hyperliquid.xyz/join/ARTECOD",
		twitter: "https://twitter.com/hyperliquid_x",
		tags: ["DEX", "Perpetuals", "Trading"],
	},
	{
		id: "2",
		name: "HyperDash",
		category: "hyperliquid",
		description:
			"Hyperdash empowers traders with real-time analytics and insights by tracking the most successful derivatives traders on Hyperliquid.",
		twitter: "https://x.com/hypurrdash",
		website: "https://legacy.hyperdash.com/",
		tags: ["Analytics", "Tools", "Trading", "Tracking"],
	},
	{
		id: "3",
		name: "HyperSignals",
		category: "hyperliquid",
    website: 'https://app.hypersignals.ai/',
    twitter: 'https://x.com/HyperSignals_ai',
		description:
			"The Social Platform for Onchain Traders where top traders meet smart money. \n Track pros, build income streams, learn new strategies and grow your community.",
		tags: ["Infrastructure", "Protocol", "Core"],
	},
	{
		id: "4",
		name: "HyperScrenner",
		category: "hyperliquid",
		description:
			"A comprehensive analytics dashboard by ASXN for Hyperliquid, empowering traders and developers with deep insights into the ecosystem. Track top performers, analyze Hypercore metrics, network activity, market trends, vault performance, and successful derivatives traders. Features include real-time analytics, advanced screening tools, trading interfaces, and performance tracking—ideal for optimizing strategies in DeFi perpetuals. Part of the ASXN suite for Hyperliquid exploration.",
		website: "https://hyperscreener.asxn.xyz/home",
		tags: ["Analytics", "Trading"],
	},
	{
		id: "5",
		name: "HyperEVM SDK",
		category: "hyperevm",
		description:
			"Developer toolkit for building decentralized applications on HyperEVM with comprehensive documentation and examples.",
		twitter: "https://twitter.com/hyperevm",
		tags: ["Developer Tools"],
	},
	{
		id: "6",
		name: "Vault Protocol",
		category: "hyperliquid",
		description:
			"Automated vault strategies for Hyperliquid, optimizing trading and yield generation with sophisticated algorithms.",
		tags: ["Vaults"],
	},
	{
		id: "7",
		name: "HyperCore Validator",
		category: "hypercore",
		description:
			"Validator node software ensuring network security and decentralization of the Hyperliquid blockchain.",
		tags: ["Validators", "Security", "Node"],
	},
	{
		id: "8",
		name: "HyperSwap",
		category: "hyperevm",
		description:
			"Decentralized exchange for spot trading on HyperEVM with automated market maker functionality.",
		website: "https://hyperswap.xyz",
		tags: ["DEX", "Spot Trading", "AMM"],
	},
	{
		id: "9",
		name: "Hyper Lend",
		category: "hyperliquid",
		description:
			"Decentralized lending and borrowing platform integrated with Hyperliquid's liquidity pools.",
		tags: ["Lending", "Borrowing"],
	},
	{
		id: "10",
		name: "HyperCore Explorer",
		category: "hypercore",
		description:
			"Blockchain explorer for tracking transactions, blocks, and network statistics on Hyperliquid.",
		website: "https://explorer.hyperliquid.xyz",
		tags: ["Explorer", "Tools"],
	},
];
