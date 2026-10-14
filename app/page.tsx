import Link from 'next/link'
import { ArrowRight, BookOpen, Compass, GraduationCap, LayoutDashboard, LogIn, Sparkles } from 'lucide-react'
import CourseList from './components/CourseList'

const navigation = [
  { label: 'Overview', href: '#overview', icon: LayoutDashboard, active: true },
  { label: 'Course catalogue', href: '#courses', icon: BookOpen, active: false },
]

export default function Home() {
  return (
    <main className="lms-shell" id="overview">
      <aside className="lms-sidebar" aria-label="Main navigation">
        <Link href="/" className="brand-lockup" aria-label="Learning Hub home">
          <span className="brand-mark"><GraduationCap size={23} strokeWidth={2.2} /></span>
          <span className="brand-copy"><strong>Learnspace</strong><small>LEARNING PORTAL</small></span>
        </Link>

        <div className="sidebar-section-label">WORKSPACE</div>
        <nav className="sidebar-nav">
          {navigation.map(({ label, href, icon: Icon, active }) => (
            <a key={label} href={href} className={`sidebar-link${active ? ' is-active' : ''}`}>
              <Icon size={18} strokeWidth={1.9} />
              <span>{label}</span>
              {active && <span className="active-indicator" aria-hidden="true" />}
            </a>
          ))}
        </nav>

        <div className="sidebar-spacer" />
        <div className="sidebar-note">
          <span className="sidebar-note-icon"><Sparkles size={17} /></span>
          <p><strong>Keep growing</strong><span>Small steps lead to big progress.</span></p>
        </div>
        <Link href="/auth/signin" className="sidebar-account"><span className="account-avatar">U</span><span className="account-copy"><strong>Your account</strong><small>Sign in to continue</small></span><ArrowRight size={16} /></Link>
      </aside>

      <div className="lms-main">
        <header className="topbar">
          <div className="breadcrumb"><span>Workspace</span><span className="breadcrumb-separator">/</span><strong>Overview</strong></div>
          <div className="topbar-actions"><span className="topbar-status"><span /> Learning portal</span><Link href="/auth/signin" className="topbar-signin"><LogIn size={16} /> Sign in</Link></div>
        </header>

        <div className="dashboard-content">
          <section className="welcome-row">
            <div><p className="eyebrow"><span className="eyebrow-dot" /> YOUR LEARNING SPACE</p><h1>Make room for <span>what’s next.</span></h1><p className="welcome-description">Discover new topics, explore courses and keep building your knowledge one step at a time.</p></div>
            <div className="welcome-symbol" aria-hidden="true"><div className="symbol-orbit orbit-one" /><div className="symbol-orbit orbit-two" /><div className="symbol-core"><GraduationCap size={39} strokeWidth={1.5} /></div><span className="symbol-spark spark-one">✦</span><span className="symbol-spark spark-two">✧</span></div>
          </section>

          <section className="feature-banner" aria-label="Explore learning resources">
            <div className="feature-copy"><span className="feature-label"><Compass size={14} /> YOUR NEXT CHAPTER</span><h2>Curiosity is a great place to start.</h2><p>Find a course that matches your interests and take the next step in your learning journey.</p><a href="#courses" className="feature-button">Explore courses <ArrowRight size={16} /></a></div>
            <div className="feature-art" aria-hidden="true"><div className="art-ring ring-a" /><div className="art-ring ring-b" /><div className="art-card art-card-back"><span /><span /><span /></div><div className="art-card art-card-front"><div className="art-card-icon"><BookOpen size={23} /></div><div className="art-lines"><i /><i /><i /></div><div className="art-progress"><span /></div></div><span className="art-star star-a">✦</span><span className="art-star star-b">✧</span></div>
          </section>

          <section className="catalogue-heading" id="courses"><div><div className="section-kicker">THE LIBRARY</div><h2>Explore the catalogue</h2><p>Browse the courses currently available to you.</p></div><span className="catalogue-icon"><BookOpen size={20} /></span></section>
          <CourseList />

          <footer className="dashboard-footer"><span>Learnspace <span className="footer-dot">·</span> Learning starts with curiosity.</span><a href="#overview">Back to top ↑</a></footer>
        </div>
      </div>
    </main>
  )
}
