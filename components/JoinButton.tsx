'use client'

import { useState } from 'react'
import LeadCaptureModal from './LeadCaptureModal'

interface JoinButtonProps {
  children: React.ReactNode
  className?: string
}

export default function JoinButton({ children, className = '' }: JoinButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {children}
      </button>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
