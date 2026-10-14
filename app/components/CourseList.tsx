'use client'

import { useEffect, useState } from 'react'
import { AlertCircle, ArrowUpRight, BookOpen } from 'lucide-react'

interface Course {
  id: string
  title: string
  description: string | null
  instructorId: string
}

const courseAccents = [
  { tone: 'violet', symbol: '01' },
  { tone: 'mint', symbol: '02' },
  { tone: 'amber', symbol: '03' },
  { tone: 'blue', symbol: '04' },
]

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadCourses() {
      try {
        const response = await fetch('/api/courses', {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        })

        if (!response.ok) {
          throw new Error('Courses could not be loaded. Please try again.')
        }

        const data: unknown = await response.json()
        if (!Array.isArray(data)) {
          throw new Error('The server returned an unexpected response.')
        }

        setCourses(data as Course[])
      } catch (cause) {
        if (cause instanceof Error && cause.name !== 'AbortError') {
          setError(cause.message || 'Something went wrong while loading courses.')
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    void loadCourses()
    return () => controller.abort()
  }, [])

  return (
    <div className="course-library">
      <div className="course-library-topline"><span className="course-count"><BookOpen size={15} /> {loading ? 'Loading catalogue' : `${courses.length} ${courses.length === 1 ? 'course' : 'courses'} available`}</span><span className="catalogue-live"><span /> Catalogue</span></div>

      {loading ? (
        <div role="status" className="catalogue-state"><span className="state-loader" /><strong>Gathering your courses</strong><p>The catalogue will be ready in a moment.</p></div>
      ) : error ? (
        <div role="alert" className="catalogue-state error-state"><span className="state-icon error-icon"><AlertCircle size={20} /></span><strong>We couldn’t load the catalogue</strong><p>{error}</p></div>
      ) : courses.length === 0 ? (
        <div className="catalogue-state empty-state"><span className="state-icon"><BookOpen size={23} /></span><span className="empty-state-label">A FRESH START</span><strong>Your course shelf is waiting.</strong><p>There are no courses to show just yet. New course content will appear here when it is available.</p></div>
      ) : (
        <div className="course-grid">
          {courses.map((course, index) => {
            const accent = courseAccents[index % courseAccents.length]
            return (
              <article key={course.id} className="course-card">
                <div className={`course-card-cover tone-${accent.tone}`}><span className="course-number">COURSE {String(index + 1).padStart(2, '0')}</span><span className="course-cover-icon"><BookOpen size={24} strokeWidth={1.6} /></span><span className="cover-decoration" aria-hidden="true">{accent.symbol}</span></div>
                <div className="course-card-body"><div className="course-card-meta"><span className="course-tag">COURSE MATERIAL</span><span className="course-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span></div><h3>{course.title}</h3><p>{course.description || 'No course description is available yet.'}</p></div>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}
