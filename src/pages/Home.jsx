import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to <span className="highlight">MyGoals</span></h2>
        <p>
          Your personal training assistant that helps you set goals, track progress, and stay motivated on your fitness journey.
        </p>
        <div
          className="actions"
          style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', marginTop: '16px' }}
        >
        <button
            onClick={() => navigate('/authentication')}
            style={{ width: '180px', padding: '8px 12px', background: '#00b3ffff', color: '#fff', border: 'none', borderRadius: '6px' }}
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/about')}
            style={{ width: '160px', padding: '8px 12px', background: '#00ff3cff', color: '#fff', border: 'none', borderRadius: '6px' }}
          >
            Details
          </button>
        </div>
      </section>
    </div>
  )
}
