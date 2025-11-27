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
		tags: ["Analytics", "Tools", "Trading", "Tracking", "Perpetuals"],
	},
	{
		id: "3",
		name: "HyperSignals",
		category: "hyperliquid",
		website: 'https://app.hypersignals.ai/',
		twitter: 'https://x.com/HyperSignals_ai',
		description:
			"The Social Platform for Onchain Traders where top traders meet smart money. \n Track pros, build income streams, learn new strategies and grow your community.",
		tags: ["Perpetuals", 'Analytics', 'Tools', 'Tracking'],
	},
	{
		id: "4",
		name: "HyperScrenner",
		category: "hyperliquid",
		description:
			"A comprehensive analytics dashboard by ASXN for Hyperliquid. Track top performers, analyze Hypercore metrics, network activity, market trends, vault performance, and successful derivatives traders.",
		website: "https://hyperscreener.asxn.xyz/home",
		tags: ["Analytics", 'Tools'],
	},
	{
		id: "5",
		name: "HyperSwap",
		category: "hyperevm",
		description:
			"Decentralized exchange for spot trading on HyperEVM with automated market maker functionality.",
		website: "https://hyperswap.xyz",
		tags: ["DEX", "Spot Trading", "AMM"],
	},
	{
		id: '6',
		name: 'HyperScan',
		category: 'hyperevm',
		description: 'HyperEVM explorer by Blockscout',
		tags: ['Explorer'],
		website: 'https://www.hyperscan.com/',
		twitter: 'https://x.com/blockscout'
	},
	{
		id: '7',
		name: 'HyperEVMScan',
		category: 'hyperevm',
		description: 'HyperEVM explorer by Etherscan',
		tags: ['Explorer'],
		website: 'https://hyperevmscan.io/',
		twitter: 'https://x.com/etherscan'
	},
	{
		id: '8',
		name: 'HyperEVM block toggle',
		category: 'hyperevm',
		description: 'Toogle block size',
		tags: ['Tools', 'SDK'],
		website: 'https://hyperevm-block-toggle.vercel.app/',
	},
	{
		id: '9',
		name: 'HL Metrics',
		category: 'hyperliquid',
		description: 'Hyperliquid Metrics made by @rajivpoc',
		tags: ['Analytics'],
		website: 'https://hl-metrics.xyz/',
	},
	{
		id: '10',
		name: 'HyperEVMScan',
		category: 'hyperevm',
		description: 'HyperEVM explorer by Etherscan',
		tags: ['Explorer'],
		website: 'https://hyperevmscan.io/',
		twitter: 'https://x.com/etherscan'
	},
	{
		id: '11',
		name: 'HypurrScan',
		category: 'hyperevm',
		description: 'Explorer for Hyperliquid L1',
		tags: ['Explorer'],
		website: 'https://hypurrscan.io/',
		twitter: 'https://x.com/HypurrScan'
	},
	{
		id: '12',
		name: 'HypeDexer',
		category: 'hypercore',
		description: 'HL Indexer API',
		tags: ['Tools', 'Indexer'],
		website: 'https://hypurrscan.io/',
	},

	{
		id: '13',
		name: 'Allium (Hyperliquid)',
		category: 'hypercore',
		description: 'HL Indexer API. Allium provides comprehensive realtime (datastreams) and historical data for Hyperliquid',
		tags: ['Tools', 'Indexer'],
		website: 'https://docs.allium.so/historical-data/supported-blockchains/hyperliquid/overview',
	},
	{
		id: '14',
		name: 'hyperliquid-python-sdk',
		category: 'hyperliquid',
		description: 'SDK for Hyperliquid API trading with Python.',
		tags: ['Tools', 'SDK'],
		website: 'https://github.com/hyperliquid-dex/hyperliquid-python-sdk',
	},
	{
		id: '15',
		name: 'hyperliquid-rust-sdk',
		category: 'hyperliquid',
		description: 'SDK for Hyperliquid API trading with Rust.',
		tags: ['Tools', 'SDK'],
		website: 'https://github.com/hyperliquid-dex/hyperliquid-rust-sdk',
	},
	{
		id: '16',
		name: 'hyperliquid-ts-sdk',
		category: 'hyperliquid',
		description: 'Unofficial Hyperliquid API SDK written in TypeScript',
		tags: ['Tools', 'SDK'],
		website: 'https://github.com/nktkas/hyperliquid',
	},
	{
		id: '17',
		name: 'hyperliquid-ts/js-sdk',
		category: 'hypercore',
		description: 'Simple and easy way to access the Hyperliquid API using Javascript/Typescript',
		tags: ['Tools', 'Indexer'],
		website: 'https://github.com/nomeida/hyperliquid',
	},
	{
		id: '18',
		name: 'Unit',
		category: 'hyperliquid',
		description: 'Unit is the asset tokenization layer on Hyperliquid, enabling seamless deposits and withdrawals.',
		tags: ['Protocol', 'Bridge'],
		website: 'https://hyperunit.xyz/',
		twitter: 'https://x.com/unitxyz'
	},
	{
		id: '19',
		name: 'Alchemy (Hyperevm)',
		category: 'hyperevm',
		description: 'The Hyperevm API',
		website: 'https://www.alchemy.com/hyperevm',
		tags: ['API', 'Tools']
	},
	{
		id: '20',
		name: 'Trade XYZ',
		category: 'hyperliquid',
		description: "trade[XYZ] is a crypto trading platform that democratizes global financial markets with 24/7 access. It offers equity perpetuals (XYZ perpetuals) to trade stocks anytime, spot crypto with the industry's lowest fees, and leverage on majors with Hyperliquid's deep liquidity.",
		website: 'https://trade.xyz/',
		twitter: 'https://x.com/tradexyz',
		tags: ['HIP-3', 'DEX']
	},
	{
		id: '21',
		name: 'Felix',
		category: 'hyperliquid',
		description: "Felix Protocol is an on-chain borrowing and lending suite on Hyperliquid L1. It enables anyone to unlock liquidity or earn yield securely, risk-adjusted, and frictionlessly via three core primitives: CDP Market (feUSD) for high-LTV leverage, Vanilla Markets with variable rates to lend/borrow native tokens, and Stability Pools for carry trades and stable yields. Perfect for margin trading, leverage looping, HLP/SP carry, spot trades, and DEX LPing within Hyperliquid.",
		website: 'https://www.usefelix.xyz?ref=B78F16A1',
		twitter: 'https://x.com/felixprotocol',
		tags: ['HIP-3', 'Borrowing', 'Lending', 'Protocol', 'DEX']
	},
	{
		id: '22',
		name: 'Valantis',
		category: 'hyperliquid',
		description: 'Valantis Labs is a modular DEX on Hyperliquid that issues stHYPE (liquid-staked HYPE). LPs stake HYPE for stHYPE to earn yield and provide liquidity',
		website: 'https://app.valantis.xyz/vaults',
		tags: ['DEX', 'Vaults']
	}
];
