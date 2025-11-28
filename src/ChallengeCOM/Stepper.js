import React from 'react';

export default function Stepper({ steps = [], current = 0 }) {
  return (
    <ol className="flex items-center gap-2 overflow-x-auto py-2">
      {steps.map((label, idx) => {
        const done = idx < current;
        const active = idx === current;
        return (
          <li key={label} className="flex items-center gap-2">
            <div className={`flex items-center justify-center w-7 h-7 rounded-full border text-[11px] font-medium transition-colors ${done ? 'bg-slate-300 text-slate-900 border-slate-300' : active ? 'bg-slate-200 text-slate-900 border-slate-300' : 'border-slate-600 text-slate-400'} `}>
              {done ? '✓' : idx + 1}
            </div>
            <span className={`whitespace-nowrap text-xs ${done || active ? 'text-slate-200' : 'text-slate-500'}`}>{label}</span>
            {idx !== steps.length - 1 && <span className="w-10 h-px bg-slate-700" />}
          </li>
        );
      })}
    </ol>
  );
}
