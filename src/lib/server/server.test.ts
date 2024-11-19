import { test } from 'node:test'
import { strictEqual } from 'node:assert'

import { buildServer } from './server.js'
const { startServer } = await buildServer()

test('should work with fetch', async t => {
  const port = process.env.PORT ? Number(process.env.PORT) : 9999
  t.plan(3)

  startServer({ port })

  const response = await fetch('http://localhost:' + port)
  strictEqual(response.status, 200)

  // const jsonResult = await response.json()
  // strictEqual(jsonResult.hello, 'world')
})
