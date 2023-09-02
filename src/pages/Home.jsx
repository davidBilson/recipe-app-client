import React, {useEffect, useState} from 'react'

const Home = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    const userId = localStorage.getItem("userId")
    const userName = localStorage.getItem("userName")

    setName(userName)
  }, [name])

  return (
    <div>{name}</div>
  )
}

export default Home