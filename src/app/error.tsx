"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error occurred:", error)
  }, [error])

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600">Something went wrong</h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  )
}
