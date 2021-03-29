import React, { useEffect } from 'react'

import useSWR from 'swr'

const fetcher = (url) => fetch(url, {
	referrerPolicy: 'no-referrer',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Request-Headers':'*'
	},
}).then(res => res.json())

export function getServerInfo () {
  const { data, error } = useSWR("http://173.212.223.23:61208/api/3/uptime", fetcher, { revalidateOnFocus: false})

  return {data, error}

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <div>
	  CPU Load: {data.cpu.load}
	  Disk Current: {data.disk.current}
	  Disk Total: {data.disk.total}
	  Disk Used: {data.disk.used}
	  Memory Current: {data.mem.current}
	  Memory Load: {data.mem.load}
	  Memory Total: {data.mem.total}
	</div>
}