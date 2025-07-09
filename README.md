⸻

📜 Project Overview

sBTC Lending Hub is a decentralized lending platform built on the Stacks blockchain. In this simplified prototype, users can borrow mock STX tokens by proving they have sufficient collateral in their wallet. The system demonstrates key components of decentralized finance using Clarity smart contracts and a React-based frontend.

🟢 Non-custodial demo version
🔐 STX balance as placeholder collateral
💸 Token minting and debt tracking on-chain

⸻

🌟 Key Features
	•	🔐 STX Collateralization: Users must have minimum STX to borrow tokens
	•	💰 Mock Token Borrowing: Mint and receive simulated STX tokens
	•	🧾 On-Chain Loan Tracking: View your loan status via smart contract
	•	⚡ Fast Deployment: Built to run smoothly on testnet with Hiro or Leather Wallet
	•	💻 Simple Frontend Interface: Built with React + Tailwind CSS

⸻

🧰 Technology Stack

Layer	Technology
Blockchain	Stacks (Testnet)
Smart Contract	Clarity
Frontend	Next.js, React
Styling	Tailwind CSS
Integration	Stacks.js
Wallet	Leather Wallet (Testnet mode)


⸻

🛠️ Getting Started

Prerequisites
	•	Node.js ≥ v18
	•	Clarinet (brew install clarinet)
	•	Git
	•	Leather Wallet or Hiro Wallet (testnet mode enabled)
	•	Testnet STX: https://faucet.testnet.stacks.co

⸻

🔐 Smart Contracts

All Clarity contracts are located in /contracts.

lending-pool.clar

Main lending logic:
	•	borrow(amount) → Mints tokens if minimum balance is present
	•	get-loan(user) → Returns loan info for any user

💡 This version uses mock token minting and a minimum STX check instead of actual sBTC bridge logic.

⸻

🚀 Installation & Usage

# Clone the repo
git clone https://github.com/fyzcelik/sbtc-lending-hub.git
cd sbtc-lending-hub

# Install frontend dependencies
cd frontend
npm install
npm run dev

Then open http://localhost:3000, connect your wallet, and test borrowing.

⸻

🙏 Acknowledgments
	•	Stacks Foundation
	•	Leather Wallet
	•	Clarity Book
	•	Stacks.js
	•	All community contributors

⸻

