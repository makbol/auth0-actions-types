import process from 'node:process'
import path from 'node:path'
import _docsList from '../docsList.json' with { type: 'json' }

export const DIFF_NAME = process.env.DIFF_NAME
export const DOC_URL = process.env.DOC_URL

export const getSnapshotPath = (diffName: string) => {
  if (!diffName) {
    throw new Error('diffName is not defined')
  }

  return path.resolve(`scripts/snapshots/${diffName}.txt`).replaceAll(':', '_')
}

export const docsList = _docsList
