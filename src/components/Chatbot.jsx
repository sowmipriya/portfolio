import React, { useState, useRef, useEffect } from 'react'
import { getReply, BOT_GREETING, BOT_NAME } from '../data/chatbotKnowledge'

const FALLBACK_ANSWER = "I didn't catch that. Try asking about Sowmipriya's experience, skills, projects, education, publications, or how to contact her. You can also scroll through her portfolio sections above."

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 1, text: BOT_GREETING, isBot: true, timestamp: Date.now() },
      ])
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const handleSend = () => {
    const text = inputValue.trim()
    if (!text) return

    const userMsg = { id: Date.now(), text, isBot: false, timestamp: Date.now() }
    setMessages((prev) => [...prev, userMsg])
    setInputValue('')

    const reply = getReply(text)
    const botText = reply || FALLBACK_ANSWER
    const botMsg = {
      id: Date.now() + 1,
      text: botText,
      isBot: true,
      timestamp: Date.now(),
    }
    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg])
    }, 400)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating chat button */}
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#73C7C7] text-white shadow-lg hover:bg-[#5fb3b3] hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#A6F1E0] focus:ring-offset-2"
        aria-label={isOpen ? 'Close chat' : 'Open chat - Ask about Sowmipriya'}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-40 w-full max-w-md rounded-2xl bg-white border border-[#73C7C7]/30 shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
          style={{ height: 'min(calc(100vh - 8rem), 520px)' }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#73C7C7] to-[#A6F1E0] text-white">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
              🤖
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg">{BOT_NAME}</h3>
              <p className="text-xs text-white/90">Ask me about Sowmipriya</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F4F8D3]/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    msg.isBot
                      ? 'bg-white border border-[#73C7C7]/30 text-gray-800 rounded-bl-md'
                      : 'bg-[#73C7C7] text-white rounded-br-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about experience, skills, projects..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-[#73C7C7]/40 focus:outline-none focus:ring-2 focus:ring-[#73C7C7] focus:border-transparent text-gray-900 placeholder-gray-500"
              />
              <button
                type="button"
                onClick={handleSend}
                className="px-4 py-2.5 bg-[#73C7C7] text-white rounded-xl hover:bg-[#5fb3b3] transition-colors font-display font-semibold"
              >
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Open-source chatbot · No API · Answers from this portfolio
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
