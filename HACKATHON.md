# dotname — Hackathon Build Plan

> Target: ETHGlobal New York 2026. Sponsors: Base + ENS.

## What We're Building

A CLI tool that takes a .dog spec for an onchain identity protocol and generates deployable Solidity contracts targeting Base Sepolia with ENS integration.

## Architecture

```
dotname
├── package.json          — npm CLI: npx dotname
├── bin/dotname           — entry point
├── src/
│   ├── cli.ts            — commands: init, generate, deploy, register
│   ├── generate.ts       — .dag → Solidity codegen
│   └── deploy.ts         — Hardhat deploy to Base Sepolia + ENS registration
├── templates/
│   ├── Profile.sol       — ERC-721 identity NFT
│   ├── Registry.sol      — ENS-compatible name registry
│   ├── Resolver.sol      — ENS resolver (name → profile)
│   └── Registrar.sol     — Subdomain registrar (name.base.eth)
├── contracts/            — generated output
│   ├── Profile.sol
│   ├── Registry.sol
│   ├── Resolver.sol
│   └── Registrar.sol
└── specs/
    └── onchain-id/       — our dogfood spec (already written)
        ├── SPEC.dog
        ├── data-model.dog
        └── onchain-id.dag
```

## Commands

```
dotname init [project]     — scaffolds identity spec via dotdog
dotname generate           — reads .dag, generates Solidity contracts
dotname deploy             — deploys to Base Sepolia via Hardhat
dotname register <name>    — registers name.base.eth
dotname demo               — runs full demo: init → generate → deploy → register
```

## Solidity Generator Logic

```
For each entity in .dag where type = "contract":
  → Create .sol file with entity name
  → Properties → storage variables + getters
  → States → Solidity enum + modifiers
  → Lifecycle → event emissions on state transitions
  → Relationships → interface imports + cross-contract calls

For each entity where type = "event":
  → Solidity event definition
```

## Output Example

`.dag entity Profile` becomes:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

enum ProfileState { Created, Active, Suspended }

contract Profile is Ownable {
    address public profileAddress;
    string public name;
    string public avatar;
    string public bio;
    string public links;
    address public profileOwner;

    ProfileState public state;

    event StateChanged(ProfileState from, ProfileState to);

    constructor(string memory _name, string memory _avatar) Ownable(msg.sender) {
        name = _name;
        avatar = _avatar;
        state = ProfileState.Created;
        emit StateChanged(ProfileState.Created, ProfileState.Created);
    }

    function activate() external onlyOwner {
        require(state == ProfileState.Created);
        state = ProfileState.Active;
        emit StateChanged(ProfileState.Created, ProfileState.Active);
    }

    // ... more generated methods from lifecycle
}
```

## Deploy Script

Uses Hardhat with Base Sepolia RPC. Deploys in order:
1. Resolver (standalone)
2. Registry (references Resolver)
3. Registrar (references Registry)
4. Profile (standalone)

## ENS Integration

`dotname register alice`:
1. Checks `alice.base.eth` availability via ENS subgraph
2. Calls Registrar.register("alice", msg.sender)
3. Profile contract stores ENS name mapping
4. Resolver updated: alice.base.eth → profile address

## Hackathon Deliverables

| When | What |
|------|------|
| Submission | GitHub repo + demo video |
| Demo flow | Live: spec → generate → deploy → register → resolve |
| Pitch | "Spec your onchain identity. Deploy on Base. Resolve via ENS. 5 minutes." |

## Prize Angles

| Prize | Hook |
|-------|------|
| Base | All contracts deploy on Base Sepolia |
| ENS | Subdomain registration + resolution |
| AI + Blockchain | dotdog MCP server — specs are agent-queryable |
| Best Dev Tool | Spec-first Solidity development |
| Open Source | MIT, built on dotdog |
