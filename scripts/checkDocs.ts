import colors from 'colors'
import fs from 'node:fs/promises'
import process from 'node:process'
import { diffWords } from 'diff'

import { fetchDoc } from './lib/fetchDoc.ts'
import { docsList, getSnapshotPath } from './lib/helpers.ts'

const colorizeDiff = (diff: ReturnType<typeof diffWords>) =>
  diff
    .map((part) =>
      part.added
        ? colors.bgGreen(part.value)
        : part.removed
          ? colors.bgRed(part.value)
          : part.value
    )
    .join('')

async function checkDocs(diffName: string, url: string) {
  if (!url) {
    throw new Error('Url is not defined')
  }

  if (!diffName) {
    throw new Error('Diff name is not defined')
  }

  const currentDocContent = await fetchDoc(url)
  const snapshotPath = getSnapshotPath(diffName)

  let snapshot = ''

  try {
    snapshot = await fs.readFile(snapshotPath, 'utf8')
  } catch (err) {
    console.log(`Can't read snapshot file at ${snapshotPath}`)

    throw err
  }

  console.log(`Comparing current doc with snapshot for ${diffName}`)

  if (snapshot !== currentDocContent) {
    const diff = diffWords(snapshot, currentDocContent)

    console.log(diff)

    return {
      diffName,
      changes: colorizeDiff(diff)
    }
  } else {
    return null
  }
}

const result = await Promise.all(
  docsList.map(({ name, url }) =>
    checkDocs(name, url).catch((err) => console.error(err))
  )
)

const filteredResult = result.filter(Boolean)

if (filteredResult.length > 0) {
  console.log(colors.red('⚠️ Documentation changes detected:'))

  filteredResult.forEach(({ diffName, changes }) => {
    console.log(colors.yellow(`Changes in ${diffName}:\n`))
    console.log(changes)
  })

  process.exit(1)
} else {
  console.log('✅ No changes.')
}
