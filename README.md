
## 📜 Project Overview

**sBTC Lending Hub** enables secure, decentralized lending by integrating Bitcoin as collateral through the **sBTC protocol**. Borrowers lock their Bitcoin, mint sBTC, and receive STX loans—tracked transparently on-chain with **Clarity smart contracts**.

> 🟢 Fully non-custodial.  
> 🔐 Trustless collateral locking.  
> 💸 Real-time interest and liquidation management.

---

## 🌟 Key Features

- 🔐 **Bitcoin Collateralization:** Users lock BTC via sBTC and use it to borrow STX.
- 📉 **Dynamic Interest Rates:** Utilization-based model for interest.
- 🧮 **Automated Liquidation Engine:** Safeguards against risky positions.
- 📊 **User Dashboard:** Monitor health factor, loan-to-value (LTV), interest accrual.
- 🧾 **On-Chain Transparency:** All logic handled via auditable Clarity contracts.

---

## 🧰 Technology Stack

| Layer        | Tech                                                |
|--------------|-----------------------------------------------------|
| Blockchain   | [Stacks](https://www.stacks.co/)                    |
| Smart Contract | [Clarity](https://docs.stacks.co/docs/clarity-overview) |
| Frontend     | [Next.js](https://nextjs.org/), [React](https://react.dev/) |
| Styling      | [Tailwind CSS](https://tailwindcss.com/)           |
| Integration  | [Stacks.js](https://github.com/stacks-js), [sBTC Bridge](https://docs.stacks.co/stacks-blockchain/stacks-bitcoin/sbtc) |
| Wallet       | [Hiro Wallet](https://www.hiro.so/wallet)          |

---

## 🛠️ Getting Started

### Prerequisites

- Node.js ≥ v18
- Yarn or npm
- Clarinet (`brew install clarinet`)
- Hiro Wallet (Testnet mode enabled)
- Git

### Smart Contacts 
lending-pool.clar

Core lending logic:
	•	borrow(amount, collateral): Locks user’s BTC (sBTC) and mints STX debt
	•	repay(amount): Repays STX loan
	•	get-loan(user): Returns loan details for a specific user

interest-rate-model.clar

Handles dynamic interest calculations:
	•	get-utilization(): Measures overall pool utilization
	•	calculate-interest(amount): Calculates interest rate based on pool status

liquidation-engine.clar

Monitors risk and automates liquidations:
	•	check-health(user): Compares LTV ratio with safety threshold
	•	liquidate(user): Automatically triggers liquidation if undercollateralized

All contracts are located in /contracts

###🙏 Acknowledgments
	•	Stacks Foundation
	•	Hiro Wallet
	•	Stacks.js
	•	Clarity Book
	•	All contributors and community supporters

### Installation

```bash
# Clone the repo
git clone https://github.com/fyzcelik/sbtc-lending-hub.git
cd sbtc-lending-hub

# Install frontend dependencies
cd frontend
npm install
