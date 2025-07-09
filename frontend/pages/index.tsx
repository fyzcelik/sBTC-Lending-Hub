import { useState } from 'react'
import { openContractCall } from '@stacks/connect'
import { StacksTestnet } from '@stacks/network'
import { stringUtf8CV, uintCV } from '@stacks/transactions'
import { CONTRACT_ADDRESS, CONTRACT_NAME } from '../lib/constants'

export default function Home() {
  const [uri, setUri] = useState('')
  const [tokenId, setTokenId] = useState('')
  const [price, setPrice] = useState('')

  const handleMint = async () => {
    await openContractCall({
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'mint',
      functionArgs: [stringUtf8CV(uri)],
      network: new StacksTestnet(),
      appDetails: {
        name: 'NFT Marketplace',
        icon: '',
      },
    })
  }

  const handleList = async () => {
    await openContractCall({
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'list',
      functionArgs: [uintCV(Number(tokenId)), uintCV(Number(price))],
      network: new StacksTestnet(),
      appDetails: { name: 'NFT Marketplace', icon: '' },
    })
  }

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">🖼️ NFT Marketplace (Testnet)</h1>

      <div className="space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="NFT Metadata URI"
          value={uri}
          onChange={(e) => setUri(e.target.value)}
        />
        <button onClick={handleMint} className="bg-blue-600 text-white px-4 py-2 rounded">
          Mint NFT
        </button>
      </div>

      <div className="space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="Token ID"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="Listing Price (in microSTX)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleList} className="bg-green-600 text-white px-4 py-2 rounded">
          List for Sale
        </button>
      </div>
    </main>
  )
}
