import axios from 'axios'
import { clientId } from '../env'

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
export function getIssues (login, repos) {
  return axios.get(`https://api.github.com/repos/${login}/${repos}/issues`, {
    headers: {
      accept: 'application/vnd.github.v3.html+json'
    }
  })
}
export function setStar (login, repos, fol) {
  if (fol) {
    return axios.delete(`https://api.github.com/user/starred/${login}/${repos}`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
        accept: 'application/vnd.github+json'
      }
    })
  } else {
    console.log('sub')
    return axios.put(`https://api.github.com/user/starred/${login}/${repos}`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
        accept: 'application/vnd.github+json'
      }
    })
  }
}
export async function getStarres (login) {
  return axios.get(`https://api.github.com/users/${login}/starred`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export async function getUser () {
  return fetch('https://api.github.com/user', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}
export function getCode () {
  const githubAuthApi = 'https://github.com/login/oauth/authorize'

  const params = new URLSearchParams()

  params.append('client_id', clientId)
  params.append('scope', 'repo:status read:user')

  window.location.href = `${githubAuthApi}?${params}`
}
