import { useState, useEffect } from 'react'
import { openContractCall, callReadOnlyFunction } from '@stacks/connect'
import { StacksTestnet } from '@stacks/network'
import { uintCV, standardPrincipalCV } from '@stacks/transactions'
import { CONTRACT_ADDRESS, CONTRACT_NAME } from '../lib/constants'
import { useConnect } from '@stacks/connect-react'

export default function Home() {
  const [amount, setAmount] = useState('')
  const [loanAmount, setLoanAmount] = useState<number | null>(null)

  const { authOptions } = useConnect()
  const userAddress = authOptions?.appDetails?.userSession?.loadUserData()?.profile?.stxAddress?.testnet

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
      onFinish: () => fetchLoanAmount(), // işlem sonrası güncelle
    })
  }

  const fetchLoanAmount = async () => {
    if (!userAddress) return
    const result = await callReadOnlyFunction({
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'get-loan',
      functionArgs: [standardPrincipalCV(userAddress)],
      network: new StacksTestnet(),
      senderAddress: userAddress,
    })
    const response = result.value?.data?.amount?.value
    if (response) setLoanAmount(Number(response))
  }

  useEffect(() => {
    fetchLoanAmount()
  }, [userAddress])

  return (
    <main className="p-10 space-y-8">
      <h1 className="text-3xl font-bold text-center">💰 sBTC Lending Hub</h1>

      <div className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Borrow Amount (mock STX)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleBorrow} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Borrow Tokens
        </button>
      </div>

      <div className="mt-10 p-4 bg-gray-100 rounded shadow">
        <h2 className="text-xl font-semibold">📄 Current Loan</h2>
        {loanAmount !== null ? (
          <p className="mt-2 text-lg">You have borrowed: <b>{loanAmount}</b> mock STX</p>
        ) : (
          <p className="text-sm text-gray-500">No loan found or not connected.</p>
        )}
      </div>
    </main>
  )
}