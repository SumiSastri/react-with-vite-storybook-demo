import { redirect } from 'react-router-dom'

export const submitNewToDo = async ({request }): Promise<Response> => {
    const data = await request.formData()
  
    const newToDo = {
      title: data.get('title'),
      description: data.get('description'),
      isPriority: data.get('isPriority') === ''
    }
  
    console.log(newToDo)
  
    return redirect('/')
  }