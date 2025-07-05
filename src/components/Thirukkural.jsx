import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchThirukkuralRequest } from '../features/thirukkural/thirukkuralSlice'

const Thirukkural = () => {
  const [number, setNumber] = useState(1)
  const dispatch = useDispatch()
  const { loading, kural, error } = useSelector((state) => state.thirukkural)

  useEffect(() => {
    dispatch(fetchThirukkuralRequest(1))
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    const kuralNumber = parseInt(number)
    if (kuralNumber >= 1 && kuralNumber <= 1330) {
      dispatch(fetchThirukkuralRequest(kuralNumber))
    } else {
      alert('Please enter a number between 1 and 1330')
    }
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      background: 'linear-gradient(135deg, #f8f9fa, #e0e7ff)',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <header style={{
        flex: '0 0 60px',
        backgroundColor: '#4b0082',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}>
       திருக்குறள் (Thirukkural)
      </header>

      {/* Main */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px'
      }}>
        <div style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '16px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          maxHeight: '100%',
          maxWidth: '600px',
          width: '100%',
          overflowY: 'auto'
        }}>
          <h2 style={{ textAlign: 'center', color: '#4b0082' }}>திருக்குறள் (Thirukkural)</h2>

          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              min="1"
              max="1330"
              style={{
                padding: '10px',
                fontSize: '16px',
                width: '150px',
                borderRadius: '8px',
                border: '1px solid #ccc'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '10px 16px',
                marginLeft: '10px',
                border: 'none',
                backgroundColor: '#4b0082',
                color: 'white',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Fetch Kural
            </button>
          </form>

          {loading && <p style={{ textAlign: 'center', color: '#888' }}>Loading...</p>}
          {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

          {kural && kural.line1 && (
            <div style={{
              backgroundColor: '#f4f4fb',
              padding: '16px',
              borderRadius: '14px',
              boxShadow: 'inset 0 0 10px rgba(75, 0, 130, 0.05)',
              fontSize: '16px'
            }}>
              <p><strong>திருக்குறள்:</strong></p>
              <p>{kural.line1}</p>
              <p>{kural.line2}</p>

              <div style={{ marginTop: '10px' }}>
                <strong>Meaning (English):</strong>
                <p>{kural.translation || 'Not available'}</p>
              </div>

              <div style={{ marginTop: '10px' }}>
                <strong>Meaning (Tamil):</strong>
                <ul style={{ paddingLeft: '18px' }}>
                  {kural.urai1 && (
                    <li><em>{kural.urai1Author}</em>: {kural.urai1}</li>
                  )}
                  {kural.urai2 && (
                    <li><em>{kural.urai2Author}</em>: {kural.urai2}</li>
                  )}
                  {kural.urai3 && (
                    <li><em>{kural.urai3Author}</em>: {kural.urai3}</li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        flex: '0 0 40px',
        backgroundColor: '#4b0082',
        color: '#fff',
        textAlign: 'center',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        © {new Date().getFullYear()} Thirukkural Explorer by Aravind
      </footer>
    </div>
  )
}

export default Thirukkural
