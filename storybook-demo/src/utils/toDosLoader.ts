export const toDosLoader = async () => {
    const res = await fetch('http://localhost:3000/toDos')
  
    return res.json()
  }