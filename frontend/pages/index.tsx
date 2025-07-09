import { useState } from 'react'
import { openContractCall } from '@stacks/connect'
import { StacksTestnet } from '@stacks/network'
import { uintCV } from '@stacks/transactions'
import { CONTRACT_ADDRESS, CONTRACT_NAME } from '../lib/constants'

export default function Home() {
  const [amount, setAmount] = useState('')
  const [repayAmount, setRepayAmount] = useState('')

  const handleBorrow = async () => {
    await openContractCall({
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'borrow',
      functionArgs: [uintCV(Number(amount))],
      network: new StacksTestnet(),
      appDetails: {
        name: 'sBTC Lending Hub',
        icon: '',
      },
    })
  }

  const handleRepay = async () => {
    await openContractCall({
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'repay',
      functionArgs: [uintCV(Number(repayAmount))],
      network: new StacksTestnet(),
      appDetails: {
        name: 'sBTC Lending Hub',
        icon: '',
      },
    })
  }

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">💰 sBTC Lending Hub (Testnet)</h1>

      <div className="space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="Borrow Amount (STX)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleBorrow} className="bg-blue-600 text-white px-4 py-2 rounded">
          Borrow STX
        </button>
      </div>

      <div className="space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="Repay Amount (STX)"
          value={repayAmount}
          onChange={(e) => setRepayAmount(e.target.value)}
        />
        <button onClick={handleRepay} className="bg-green-600 text-white px-4 py-2 rounded">
          Repay Loan
        </button>
      </div>
    </main>
  )
}
