# dotname

> Spec-first onchain identity. Deploy on Base. Resolve via ENS.

Built on [dotdog](https://github.com/specdog/dotdog). Built for [ETHGlobal New York 2026](https://ethglobal.com/events/newyork2026).

## What

Write a .dog spec for your onchain identity protocol. dotname generates Solidity contracts, deploys them on Base, and registers ENS subdomains. Users get `name.base.eth` that resolves to their verified profile.

## Quick Start

```bash
npx dotname init my-identity
npx dotname generate    # Solidity stubs from .dog spec
npx dotname deploy      # Deploy to Base Sepolia
npx dotname register    # Register .eth subdomain via ENS
```

## Architecture

### Entities
- **Profile** — onchain identity with name, avatar, bio, links
- **Registry** — maps .eth names to profile addresses
- **Resolver** — ENS resolver contract for name → address lookups
- **Registrar** — subdomain registrar for `*.base.eth`

### Flow
```
User writes .dog spec
    ↓
dotname generate → Profile.sol + Registry.sol + Resolver.sol
    ↓
dotname deploy → Base Sepolia
    ↓
dotname register → alice.base.eth → resolves to profile
```

## Prize Targets

| Sponsor | How we integrate |
|---------|-----------------|
| 🟦 **Base** | All contracts deploy on Base Sepolia |
| 🔷 **ENS** | Register subdomains, resolve .eth names |
| 🤖 **AI + Blockchain** | dotdog MCP server — agents query identity spec |
| 🛠 **Best Dev Tool** | Spec-first Solidity with dotdog |

## Templates

| Template | What it builds |
|----------|---------------|
| `profile` | Basic onchain profile (name, avatar, bio) |
| `registry` | ENS-compatible name registry |
| `community` | DAO membership + roles + voting |

## License

MIT
