# dotdefi

> Spec-first DeFi development. Write .dog specs. Generate Solidity stubs. Deploy with confidence.

Built on [dotdog](https://github.com/specdog/dotdog). Built for [ETHGlobal](https://ethglobal.com).

## Why

Smart contracts are unforgiving. One bug costs millions. Write your protocol spec first — entities, relationships, lifecycles — then generate the code. No more unaudited contracts shipped at 4am.

## Quick Start

```bash
npx dotdefi init my-defi
npx dotdefi generate
npx dotdefi deploy --network base-sepolia
```

## Templates

| Template | What it builds |
|----------|---------------|
| `erc20` | Token contract with mint/burn/transfer |
| `erc721` | NFT contract with metadata |
| `vault` | Yield-bearing vault with deposit/withdraw |
| `staking` | Staking pool with rewards |
| `bridge` | Cross-chain token bridge |
| `dao` | Governor + treasury |

## Architecture

```
.spec (.dog)   →   dotdefi generate   →   Solidity stubs   →   deploy
      ↑                                                         ↓
      └────────── dotdefi validate ←────── testnet verification ←┘
```

## Prize Targets

- 🟦 **Base** — deploy on Base Sepolia
- 🔴 **Optimism** — deploy on OP Mainnet
- 🤖 **AI + Blockchain** — MCP server for agent queries
- 🛠 **Best Developer Tool** — spec-first Solidity

## License

MIT
