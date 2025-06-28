"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111111]/80 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-3xl z-50 "
          >
            <div className="glass-effect rounded-2xl shadow-xl overflow-hidden h-[80vh]
            overflow-y-auto custom-scrollbar">
              {/* Header */}
              <div className="flex items-center justify-between px-6 mt-5 border-b border-gray-100">
                <h2 className="text-2xl font-semibold text-[#fff]">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 cursor-pointer hover:scale-110 rounded-full transition-colors duration-200"
                >
                  <IoClose className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Modal 