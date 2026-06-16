# dotname

[![Built with dotdog](https://img.shields.io/badge/built%20with-dotdog-orange)](https://github.com/specdog/dotdog)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://github.com/specdog/dotdefi/blob/main/LICENSE)

> Write a spec. Generate contracts. Deploy on Base. Register via ENS.

Built on [dotdog](https://github.com/specdog/dotdog). Built for [ETHGlobal New York 2026](https://ethglobal.com/events/newyork2026).

## The Pitch

Smart contracts are unforgiving. One bug costs millions. Most teams ship code at 4am with no spec.

**dotname makes spec-first onchain identity trivial.** Write a .dog spec describing your identity protocol. Run `dotname demo`. Get deployable Solidity contracts targeting Base Sepolia with ENS subdomain resolution.

```
.dog spec  →  dotname demo  →  4 contracts generated  →  deploy to Base  →  alice.base.eth resolves to profile
```

## Sponsors

- 🟦 **Base** — all contracts deploy on Base Sepolia
- 🔷 **ENS** — subdomain registration + resolution

## Demo

```bash
$ node bin/dotname demo

  ╔══════════════════════════════════════╗
  ║   dotname — onchain identity        ║
  ║   Deploy on Base · Resolve via ENS  ║
  ╚══════════════════════════════════════╝

  [1/4] Spec
  .dog spec defines protocol: 5 entities, 4 relationships
  Profile, Registry, Resolver, Registrar, Registration

  [2/4] Generate
  .dag → Solidity contracts
  4 contracts generated: Profile.sol, Registry.sol, Resolver.sol, Registrar.sol

  [3/4] Deploy
  Deploy to Base Sepolia
  Low fees. Fast finality. Ethereum security.

  [4/4] Register
  Register name.base.eth via ENS
  alice.base.eth → Profile contract → bio, avatar, links
  Fully onchain. Fully yours.
```

## Generated Contracts

Each contract includes:
- NatSpec documentation from .dog spec
- State machine with lifecycle transitions
- Access control (Ownable)
- Relationship references to other protocol contracts

## Architecture

```
specs/yield-vault/           contracts/src/
├── SPEC.dog      →         ├── Profile.sol
├── data-model.dog →        ├── Registry.sol
├── yield-vault.dag →       ├── Resolver.sol
                             └── Registrar.sol
```

## Prize Targets

| Sponsor | Integration |
|---------|------------|
| Base | All contracts deploy on Base Sepolia |
| ENS | Subdomain registration + name → profile resolution |

## License

MIT
