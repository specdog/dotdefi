# dotname — ETHGlobal Prize Map

## Direct Targets

| Sponsor | Prize | How We Qualify |
|---------|-------|---------------|
| **ENS** | $20,000 | Subdomain registration: `name.base.eth` → Resolver → Profile. Onchain identity via ENS. |
| **World** | $15,000 | World ID verification attached to onchain profiles. "Verified human" badge in Profile contract. |
| **Base** | TBD | All contracts deploy on Base Sepolia. Spec describes deployment target. |
| **Chainlink** | $14,000 | Price feeds for registration fee in USD. VRF for fair name allocation. |
| **Uniswap** | $10,000 | Vault entity trades yield via Uniswap pools. DeFi primitives spec'd. |
| **1inch** | $7,000 | DEX aggregation for vault yield optimization. |
| **Google Cloud** | $5,000 | Deploy scripts target GCP. Spec includes cloud infrastructure. |
| **Privy** | $5,000 | Embedded wallets for onboarding. Profile creation without seed phrases. |
| **Dynamic** | $10,000 | Wallet integration. Connect any wallet → register profile. |
| **Ledger** | $10,000 | Hardware wallet signing for high-value profile updates. Governance. |
| **LI.FI** | $15,000 | Cross-chain profile resolution. Profile on Base, resolve from any chain. |

## Maximum Potential

| Approach | Sponsors | Total |
|----------|----------|-------|
| Conservative (Base + ENS) | 2 | ~$25K |
| Identity play (ENS + World + Privy + Dynamic) | 4 | $50K |
| Full stack (add Chainlink + Uniswap + LI.FI) | 7 | $79K |
| Everything | 11 | $136K |

## What We'd Need to Build Per Sponsor

### ENS ($20K) — ALREADY BUILDING
- Registrar: subdomain registration
- Resolver: name → profile address
- Demo: register `alice.base.eth`, resolves to profile

### World ($15K) — ADD THIS
- Profile.worldId: bytes (World ID nullifier)
- verifyHuman() modifier that checks World ID
- Demo: "Only verified humans can create profiles"

### Chainlink ($14K) — ADD THIS
- Registrar uses Chainlink price feed for registration fee
- Profile could use VRF for fair name allocation
- Demo: Fee auto-updates in USD via price feed

### Uniswap ($10K) — SIMPLE ADD
- Vault strategy deposits capital into Uniswap LP
- Spec already has yield strategies
- Demo: Spec a vault → generates contract → LP on Uniswap

### Base (TBD) — ALREADY ON IT
- All contracts deploy Base Sepolia
- Mention in spec, deploy script

## Recommended Focus

Hit **4 sponsors** with one demo:
1. **ENS** — register name.eth
2. **World** — verify human on profile
3. **Base** — deploy on L2
4. **Chainlink** — price feed for fees

Total: $49K+ potential. One demo. Five minutes.
