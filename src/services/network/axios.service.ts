
import axios from 'axios'
//import { AxiosError } from 'axios'
const HOST = 'crm.hippoparking-a-main.hp.dev.family'
//const PORT = 80

export async function getStatistics(
	//client: SupabaseClient<Database, "public">,
) { //:Promise<User[] | null>  {
    const data = {}
    const route = 'admin/statistics'

    localStorage.setItem('token', "eyJpdiI6IjZ0WnF3M0NpZDlTL3pHK2tlejJBc3c9PSIsInZhbHVlIjoiUUx6bERpSDhycWxxaVFSRkUyOWh0OW9mTGxjL2ZnT1NndGdTS1BRdEQzeFNqWEd6aS82Q2wxTjJudXBqRlhIdlFsZzZqcUo4a00vV0xKS0I3dnNpS2Y2ckZ6RytVbi9TbTZjSnZlWnJwNG4rVktJalhLbVhaU29CV1lDSndHQ3EiLCJtYWMiOiJlNzNkMjg4OTdiMGM1YjZhOWVkOGFhNTg2Zjk2ODRkYjU3ZWI5MWQ5YmI3OWIzYTcxNGJmNGZhZTJmYjI2M2MyIiwidGFnIjoiIn0%3D");

    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
    const withCredentials = true

    const options = {
        headers,
        withCredentials,
        data
    }

   const protocol = 'https'
   const url = `${protocol}://${HOST}/${route}`
   const { responseData, error } = await axios
        .get(url, options)
        .then((response) => response.data)
        .catch((error) => error)

   if (error) {
      console.error(error) 
      return null
   } 

   return responseData
}