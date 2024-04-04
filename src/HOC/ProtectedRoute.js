import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


//protected routes to check user is authenticated or not to access the component
const ProtectedRoute = (props) => {
  let Cmp = props.Cmp
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('userInfo')) {
      navigate('/')
    }
  }, [navigate])

  return (
    <div>
        <Cmp />
    </div>
  )
}

export default ProtectedRoute