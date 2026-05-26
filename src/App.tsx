import { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import { Send, Loader2, BookOpen } from 'lucide-react';

// =============================================
// ĐỔI ENDPOINT Ở ĐÂY KHI DEPLOY
// =============================================
// const API_ENDPOINT = 'https://sangdinhvan-rag-history-space.hf.space/search';
const API_ENDPOINT = 'https://sangdinhvan-rag-history-space.hf.space/search';
// =============================================

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const query = input.trim();
    if (!query || isLoading) return;

    const userMsg: Message = { role: 'user', content: query };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: res.statusText }));
        throw new Error(err.detail || `HTTP ${res.status}`);
      }

      const data = await res.json();
      const assistantMsg: Message = {
        role: 'assistant',
        content: data.answer || 'Không có câu trả lời.',
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      const errorMsg: Message = {
        role: 'assistant',
        content: `⚠️ Lỗi: ${err.message || 'Không thể kết nối tới API.'}`,
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
      setTimeout(() => textareaRef.current?.focus(), 50);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#f5f5f0] text-[#2d2d2a]">

      {/* Header */}
      <header className="flex items-center gap-3 px-6 py-4 border-b border-[#5a5a40]/10 bg-[#f5f5f0]/90 backdrop-blur-sm z-10">
        <div className="w-9 h-9 bg-[#5a5a40] rounded-full flex items-center justify-center text-[#f5f5f0]">
          <BookOpen size={18} />
        </div>
        <div>
          <h1 className="text-lg font-semibold font-serif leading-tight">RAG History VN</h1>
          <p className="text-[10px] text-[#5a5a40]/70 tracking-widest uppercase">Cổng hỏi đáp lịch sử Việt Nam</p>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6 h-full">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 opacity-60 select-none">
              <BookOpen size={40} className="text-[#5a5a40]" />
              <p className="font-serif text-xl text-[#2d2d2a]">Hỏi bất kỳ điều gì về lịch sử Việt Nam</p>
              <p className="text-sm text-[#5a5a40]">Ví dụ: Trận Bạch Đằng năm 938 diễn ra như thế nào?</p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 bg-[#5a5a40] rounded-full flex items-center justify-center text-[#f5f5f0] mr-3 mt-1 shrink-0">
                  <BookOpen size={14} />
                </div>
              )}
              <div
                className={`max-w-[75%] rounded-2xl px-5 py-3 text-[15px] leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#5a5a40] text-[#f5f5f0] rounded-br-sm font-sans'
                    : 'bg-white border border-[#5a5a40]/10 text-[#2d2d2a] rounded-bl-sm'
                }`}
              >
                {msg.role === 'assistant' ? (
                  <div className="prose prose-stone prose-sm max-w-none
                    prose-headings:font-serif prose-headings:text-[#2d2d2a]
                    prose-strong:text-[#2d2d2a] prose-strong:font-semibold
                    prose-a:text-[#5a5a40]
                    prose-blockquote:border-l-2 prose-blockquote:border-[#5a5a40] prose-blockquote:italic">
                    <Markdown>{msg.content}</Markdown>
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="w-8 h-8 bg-[#5a5a40] rounded-full flex items-center justify-center text-[#f5f5f0] mr-3 shrink-0">
                <BookOpen size={14} />
              </div>
              <div className="bg-white border border-[#5a5a40]/10 rounded-2xl rounded-bl-sm px-5 py-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5a5a40]/40 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 bg-[#5a5a40]/40 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-[#5a5a40]/40 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-6 pt-2 bg-[#f5f5f0] border-t border-[#5a5a40]/10">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto flex items-end gap-3 bg-white border-2 border-[#5a5a40]/15 rounded-[24px] px-5 py-2 focus-within:border-[#5a5a40] transition-colors"
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Nhập câu hỏi lịch sử... (Enter để gửi)"
            rows={1}
            className="flex-1 resize-none bg-transparent text-[15px] font-sans text-[#2d2d2a] placeholder:text-[#5a5a40]/40 focus:outline-none max-h-[120px] overflow-y-auto leading-relaxed py-2 outline-none"
            style={{ fieldSizing: 'content' } as any}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="w-10 h-10 bg-[#5a5a40] hover:bg-[#4a4a35] text-white rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center shrink-0 mb-0.5"
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={16} />}
          </button>
        </form>
        <p className="text-center text-[11px] text-[#5a5a40]/40 mt-2">Shift+Enter để xuống dòng</p>
      </div>

    </div>
  );
}