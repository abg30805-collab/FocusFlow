'use client';

import { CheckCircle2, Circle, BookOpen, Target, TrendingUp } from 'lucide-react';

export function DashboardMockup() {
  const interests = [
    { name: 'Web Development', color: 'rgb(144, 224, 216)' },
    { name: 'Design Systems', color: 'rgb(200, 180, 220)' },
    { name: 'Data Science', color: 'rgb(255, 218, 185)' },
  ];

  const tasks = [
    { text: 'Complete React course module 3', completed: true },
    { text: 'Review design patterns', completed: false },
    { text: 'Practice TypeScript', completed: false },
  ];

  return (
    <div className="bg-white rounded-[16px] p-6 shadow-medium border border-[rgb(var(--muted))] border-opacity-50">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-[rgb(var(--pastel-teal))]"></div>
        <div className="w-2 h-2 rounded-full bg-[rgb(var(--pastel-lavender))]"></div>
        <div className="w-2 h-2 rounded-full bg-[rgb(var(--pastel-peach))]"></div>
        <div className="flex-1"></div>
        <span className="text-xs text-[rgb(var(--muted-foreground))]">Dashboard</span>
      </div>

      {/* Interests List Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-4 h-4 text-[rgb(var(--pastel-teal))]" />
          <h3 className="text-sm font-semibold text-[rgb(var(--foreground))]">Your Interests</h3>
        </div>
        <div className="space-y-2">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-[12px] bg-[rgb(var(--muted))] bg-opacity-30"
              style={{ borderLeft: `3px solid ${interest.color}` }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: interest.color }}
              ></div>
              <span className="text-sm text-[rgb(var(--foreground))]">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Path Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-4 h-4 text-[rgb(var(--pastel-lavender))]" />
          <h3 className="text-sm font-semibold text-[rgb(var(--foreground))]">Learning Path</h3>
        </div>
        <div className="p-4 rounded-[12px] bg-[rgb(var(--pastel-lavender))] bg-opacity-10 border border-[rgb(var(--pastel-lavender))] border-opacity-20">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-3 h-3 text-[rgb(var(--pastel-lavender))]" />
            <span className="text-xs font-medium text-[rgb(var(--foreground))]">
              Frontend Mastery
            </span>
          </div>
          <div className="h-1.5 bg-[rgb(var(--muted))] rounded-full overflow-hidden">
            <div
              className="h-full bg-[rgb(var(--pastel-lavender))] rounded-full"
              style={{ width: '65%' }}
            ></div>
          </div>
          <p className="text-xs text-[rgb(var(--muted-foreground))] mt-2">65% complete</p>
        </div>
      </div>

      {/* Tasks Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-4 h-4 text-[rgb(var(--pastel-peach))]" />
          <h3 className="text-sm font-semibold text-[rgb(var(--foreground))]">Today's Tasks</h3>
        </div>
        <div className="space-y-2">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-[12px] bg-[rgb(var(--muted))] bg-opacity-30"
            >
              {task.completed ? (
                <CheckCircle2 className="w-4 h-4 text-[rgb(var(--pastel-peach))]" />
              ) : (
                <Circle className="w-4 h-4 text-[rgb(var(--muted-foreground))]" />
              )}
              <span
                className={`text-sm ${
                  task.completed
                    ? 'text-[rgb(var(--muted-foreground))] line-through'
                    : 'text-[rgb(var(--foreground))]'
                }`}
              >
                {task.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



