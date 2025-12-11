'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { Logo } from './logo';
import { BookOpen, LogOut } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, isAuthenticated } = useUserStore();

  const handleLogout = async () => {
    await logout();
    router.push('/auth/login');
  };

  const isAuthPage = pathname?.startsWith('/auth');

  if (isAuthPage) return null;

  // Helper function to check if a path is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex items-center justify-between py-6 mb-8">
      {/* Logo on left */}
      <button
        onClick={() => router.push('/')}
        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <Logo size={56} />
        <span className="text-xl font-semibold text-[rgb(var(--foreground))]">
          FocusFlow
        </span>
      </button>
      
      {/* Links on right - UNDERLINE STYLE (Default) */}
      <div className="flex items-center gap-8">
        <button
          onClick={() => router.push('/about')}
          className={`relative text-base font-medium text-[rgb(var(--foreground))] transition-all duration-300 hover:scale-105 focus:outline-none rounded-sm px-1 ${
            isActive('/about')
              ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[rgb(var(--pastel-lavender))] after:transition-all after:duration-300'
              : 'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[rgb(var(--pastel-lavender))] hover:after:w-full after:transition-all after:duration-300'
          }`}
        >
          About
        </button>
        <button
          onClick={() => router.push('/dashboard')}
          className={`relative text-base font-medium text-[rgb(var(--foreground))] transition-all duration-300 hover:scale-105 focus:outline-none rounded-sm px-1 ${
            isActive('/dashboard')
              ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[rgb(var(--pastel-blue))] after:transition-all after:duration-300'
              : 'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[rgb(var(--pastel-blue))] hover:after:w-full after:transition-all after:duration-300'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => router.push('/blog')}
          className={`relative text-base font-medium text-[rgb(var(--foreground))] transition-all duration-300 hover:scale-105 focus:outline-none rounded-sm px-1 ${
            isActive('/blog')
              ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[rgb(var(--pastel-pink))] after:transition-all after:duration-300'
              : 'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[rgb(var(--pastel-pink))] hover:after:w-full after:transition-all after:duration-300'
          }`}
        >
          Blog
        </button>
        {isAuthenticated ? (
          <>
            {user && (
              <span className="text-base font-medium text-[rgb(var(--muted-foreground))]">
                {user.name}
              </span>
            )}
            <button
              onClick={handleLogout}
              className="relative text-base font-medium text-[rgb(var(--foreground))] transition-all duration-300 hover:scale-105 focus:outline-none rounded-sm px-1 flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[rgb(var(--pastel-orange))] hover:after:w-full after:transition-all after:duration-300"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => router.push('/auth/login')}
            className="relative text-base font-medium text-[rgb(var(--foreground))] transition-all duration-300 hover:scale-105 focus:outline-none rounded-sm px-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[rgb(var(--pastel-teal))] hover:after:w-full after:transition-all after:duration-300"
          >
            Login
          </button>
        )}
      </div>

      {/* ============================================
          ALTERNATIVE STYLE OPTIONS
          Uncomment the style you want and comment out the "UNDERLINE STYLE" section above
          ============================================ */}

      {/* OPTION 1: PILL-SHAPED BUTTONS
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push('/about')}
          className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 ${
            isActive('/about')
              ? 'bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] shadow-medium'
              : 'bg-[rgb(var(--muted))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--primary))] hover:text-[rgb(var(--primary-foreground))] hover:shadow-medium'
          }`}
        >
          About
        </button>
        <button
          onClick={() => router.push('/blog')}
          className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 flex items-center gap-2 ${
            isActive('/blog')
              ? 'bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] shadow-medium'
              : 'bg-[rgb(var(--muted))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--primary))] hover:text-[rgb(var(--primary-foreground))] hover:shadow-medium'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Blog
        </button>
        {isAuthenticated ? (
          <>
            {user && (
              <span className="text-base font-medium text-[rgb(var(--muted-foreground))] px-2">
                {user.name}
              </span>
            )}
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-full text-base font-medium bg-[rgb(var(--muted))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--primary))] hover:text-[rgb(var(--primary-foreground))] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 flex items-center gap-2 hover:shadow-medium"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => router.push('/auth/login')}
            className="px-5 py-2 rounded-full text-base font-medium bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] hover:bg-[rgb(var(--primary))]/90 shadow-medium hover:shadow-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2"
          >
            Login
          </button>
        )}
      </div>
      */}

      {/* OPTION 2: CARD-STYLE BUTTONS
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push('/about')}
          className={`px-5 py-2.5 rounded-lg text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 ${
            isActive('/about')
              ? 'bg-[rgb(var(--secondary))] text-[rgb(var(--foreground))] shadow-medium border-2 border-[rgb(var(--primary))]'
              : 'bg-[rgb(var(--secondary))] text-[rgb(var(--foreground))] shadow-light border-2 border-transparent hover:shadow-medium hover:border-[rgb(var(--primary))]'
          }`}
        >
          About
        </button>
        <button
          onClick={() => router.push('/blog')}
          className={`px-5 py-2.5 rounded-lg text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 flex items-center gap-2 ${
            isActive('/blog')
              ? 'bg-[rgb(var(--secondary))] text-[rgb(var(--foreground))] shadow-medium border-2 border-[rgb(var(--primary))]'
              : 'bg-[rgb(var(--secondary))] text-[rgb(var(--foreground))] shadow-light border-2 border-transparent hover:shadow-medium hover:border-[rgb(var(--primary))]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Blog
        </button>
        {isAuthenticated ? (
          <>
            {user && (
              <span className="text-base font-medium text-[rgb(var(--muted-foreground))] px-2">
                {user.name}
              </span>
            )}
            <button
              onClick={handleLogout}
              className="px-5 py-2.5 rounded-lg text-base font-medium bg-[rgb(var(--secondary))] text-[rgb(var(--foreground))] shadow-light border-2 border-transparent hover:shadow-medium hover:border-[rgb(var(--primary))] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => router.push('/auth/login')}
            className="px-5 py-2.5 rounded-lg text-base font-medium bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] shadow-medium border-2 border-[rgb(var(--primary))] hover:shadow-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2"
          >
            Login
          </button>
        )}
      </div>
      */}

      {/* OPTION 3: GRADIENT ACCENTS
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push('/about')}
          className={`px-6 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 ${
            isActive('/about')
              ? 'bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--pastel-teal))] text-white shadow-medium'
              : 'bg-gradient-to-r from-[rgb(var(--pastel-teal))] to-[rgb(var(--pastel-blue))] text-[rgb(var(--foreground))] hover:from-[rgb(var(--primary))] hover:to-[rgb(var(--pastel-teal))] hover:text-white hover:shadow-medium'
          }`}
        >
          About
        </button>
        <button
          onClick={() => router.push('/blog')}
          className={`px-6 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 flex items-center gap-2 ${
            isActive('/blog')
              ? 'bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--pastel-teal))] text-white shadow-medium'
              : 'bg-gradient-to-r from-[rgb(var(--pastel-teal))] to-[rgb(var(--pastel-blue))] text-[rgb(var(--foreground))] hover:from-[rgb(var(--primary))] hover:to-[rgb(var(--pastel-teal))] hover:text-white hover:shadow-medium'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Blog
        </button>
        {isAuthenticated ? (
          <>
            {user && (
              <span className="text-base font-medium text-[rgb(var(--muted-foreground))] px-2">
                {user.name}
              </span>
            )}
            <button
              onClick={handleLogout}
              className="px-6 py-2.5 rounded-lg text-base font-semibold bg-gradient-to-r from-[rgb(var(--pastel-teal))] to-[rgb(var(--pastel-blue))] text-[rgb(var(--foreground))] hover:from-[rgb(var(--primary))] hover:to-[rgb(var(--pastel-teal))] hover:text-white hover:shadow-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => router.push('/auth/login')}
            className="px-6 py-2.5 rounded-lg text-base font-semibold bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--pastel-teal))] text-white shadow-medium hover:shadow-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2"
          >
            Login
          </button>
        )}
      </div>
      */}

      {/* OPTION 4: MINIMAL BOLD
      <div className="flex items-center gap-8">
        <button
          onClick={() => router.push('/about')}
          className={`px-4 py-2 text-lg font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 rounded-md ${
            isActive('/about')
              ? 'text-[rgb(var(--primary))] bg-[rgb(var(--muted))]'
              : 'text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))] hover:text-[rgb(var(--primary))]'
          }`}
        >
          About
        </button>
        <button
          onClick={() => router.push('/blog')}
          className={`px-4 py-2 text-lg font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 rounded-md flex items-center gap-2 ${
            isActive('/blog')
              ? 'text-[rgb(var(--primary))] bg-[rgb(var(--muted))]'
              : 'text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))] hover:text-[rgb(var(--primary))]'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          Blog
        </button>
        {isAuthenticated ? (
          <>
            {user && (
              <span className="text-lg font-medium text-[rgb(var(--muted-foreground))]">
                {user.name}
              </span>
            )}
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-lg font-bold text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))] hover:text-[rgb(var(--primary))] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 rounded-md flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => router.push('/auth/login')}
            className="px-4 py-2 text-lg font-bold text-[rgb(var(--primary))] bg-[rgb(var(--muted))] hover:bg-[rgb(var(--primary))] hover:text-[rgb(var(--primary-foreground))] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:ring-offset-2 rounded-md"
          >
            Login
          </button>
        )}
      </div>
      */}
    </nav>
  );
}
