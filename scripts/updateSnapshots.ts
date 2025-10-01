import fs from 'node:fs/promises'
import process from 'node:process'

import { fetchDoc } from './lib/fetchDoc.ts'
import { getSnapshotPath, docsList } from './lib/helpers.ts'

const updateSnapshot = async (diffName: string, url: string) => {
  if (!url) {
    throw new Error('Url is not defined')
  }

  if (!diffName) {
    throw new Error('Diff name is not defined')
  }

  const doc = await fetchDoc(url)
  const snapshotPath = getSnapshotPath(diffName)

  console.log(`Saving ${diffName} snapshot to ${snapshotPath}`)

  fs.writeFile(snapshotPath, doc, 'utf8')
}

docsList.forEach(({ name, url }) => {
  updateSnapshot(name, url).catch((err) => {
    console.error(err)
    process.exit(1)
  })
})
