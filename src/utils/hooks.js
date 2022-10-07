/**
 * @file Custom kooks to manage call to api
 * @namespace hooks
 */

import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * Custom hook getting data from api in fonction of url in param
 *
 * @memberof hooks
 * @method
 * @param {String} url end point path from api
 * @returns {Object} Returns Object.<isLoading: Boolean, data: (Object | Array), error: (Error | undefined)>
 */
export const useGet = (url) => {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.data)
        setData(response.data.data)
      })
      .catch((error) => {
        console.log(error)
        setError(error)
      })
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading, data, error }
}
