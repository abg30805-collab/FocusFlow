'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FadeIn, SlideUp } from '@/components/ui/transitions';
import { LogIn, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated, isLoading } = useUserStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <SlideUp>
        <Card className="w-full max-w-md">
          <div className="mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/')}
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to Home
            </Button>
          </div>
          <div className="text-center mb-6">
            <LogIn className="w-12 h-12 mx-auto mb-4 text-[rgb(var(--primary))]" />
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-[rgb(var(--muted-foreground))]">
              Sign in to continue your learning journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <Input
              type="password"
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />

            {error && (
              <div className="p-3 rounded-xl bg-red-50 text-red-600 text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
              icon={<LogIn className="w-4 h-4" />}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-[rgb(var(--muted-foreground))]">
            New to FocusFlow?{' '}
            <span className="text-[rgb(var(--muted-foreground))]">
              You can create an account by entering any email and password above.
            </span>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-[rgb(var(--muted))] text-xs text-center text-[rgb(var(--muted-foreground))]">
            <p className="font-semibold mb-1">Demo Mode</p>
            <p>Use any email/password to sign in</p>
          </div>
        </Card>
      </SlideUp>
    </div>
  );
}

