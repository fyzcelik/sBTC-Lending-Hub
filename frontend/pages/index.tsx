import { useState } from 'react'
import { openContractCall, userSession } from '@stacks/connect'
import { StacksTestnet } from '@stacks/network'
import { stringUtf8CV, uintCV } from '@stacks/transactions'

export default function Home() {
  const [txId, setTxId] = useState('')

  const handleBorrow = async () => {
    const options = {
      contractAddress: 'YOUR_CONTRACT_ADDRESS',
      contractName: 'lending-pool',
      functionName: 'borrow',
      functionArgs: [uintCV(100)],
      network: new StacksTestnet(),
      appDetails: {
        name: 'sBTC Lending Hub',
        icon: window.location.origin + '/favicon.ico',
      },
      onFinish: data => {
        setTxId(data.txId)
      },
    }
    await openContractCall(options)
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">💰 sBTC Lending Demo</h1>
      <button
        onClick={handleBorrow}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Borrow 100 STX (Mock)
      </button>
      {txId && (
        <p className="mt-4 text-sm text-green-600">
          Transaction submitted! TXID: <br /> {txId}
        </p>
      )}
    </main>
  )
}