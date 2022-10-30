import axios from 'axios'

const ZeroStarting = (value) => value < 10 ? `0${value}` : value

export function getData () {
  const params = new URLSearchParams()
  const week = 7 * 24 * 60 * 60 * 1000
  const weekAgo = new Date(Date.now() - week)

  const formattedDate = [
    weekAgo.getFullYear(),
    ZeroStarting(weekAgo.getMonth() + 1),
    ZeroStarting(weekAgo.getDate())
  ].join('-')

  params.append('order', 'desc')
  params.append('sort', 'stars')
  params.append('per_page', 10)
  params.append('q', `language:javascript created:>${formattedDate}`)
  return axios.get(`https://api.github.com/search/repositories?${params}`)
}

export function getReadme (login, repos) {
  return axios.get(`https://api.github.com/repos/${login}/${repos}/readme`, {
    headers: {
      accept: 'application/vnd.github.v3.html+json'
    }
  })
}

export async function getUser () {
  try {
    const response = await fetch('https://api.github.com/user')
    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
