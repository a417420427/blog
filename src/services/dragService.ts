export interface DropFile {
  file: File
  fullPath: string
}

// 读取文件入口
async function readFileEntrySync(entry: FileEntry): Promise<File> {
  return new Promise((resolve) => {
    entry.file((file) => {
      resolve(file)
    })
  })
}
// 读取文件夹入口
async function readDirEntrySync(entry: FileEntry): Promise<FileEntry[]> {
  return new Promise((resolve) => {
    const fileEntries: FileEntry[] = []
    const dirReader: DirectoryReader = (entry as any).createReader()
    dirReader.readEntries((entries) => {
      entries.forEach((entry) => {
        fileEntries.push(entry as FileEntry)
      })
      resolve(fileEntries)
    })
  })
}

// https://stackoverflow.com/questions/28487352/dragndrop-datatransfer-getdata-empty/28487486
// 保存入口 由于 DataTransfer 只在 drop的时间段存在, 所以需要提前收集文件信息
export const savedEntries = (e: DragEvent): FileEntry[] => {
  //const entries: FileEntry[] = []
  const items = e.dataTransfer && e.dataTransfer.items
  if (!items) {
    return []
  }
  return Array.from(items).map((item) => item.webkitGetAsEntry())
}

// 处理入口文件
async function readEntry(fileEntry: FileEntry) {
  const files: DropFile[] = []
  if (fileEntry.isFile) {
    const file = await readFileEntrySync(fileEntry)
    files.push({
      file,
      fullPath: fileEntry.fullPath,
    })
  } else if (fileEntry.isDirectory) {
    const fileEntries = await readDirEntrySync(fileEntry)
    for (let i = 0; i < fileEntries.length; i++) {
      const file = await readFileEntrySync(fileEntries[i])
      files.push({
        file,
        fullPath: fileEntry.fullPath,
      })
    }
  }
  return files
}

export async function getFiles(e: DragEvent) {
  let dropFiles: DropFile[] = []

  const entries = savedEntries(e)
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]
    dropFiles = dropFiles.concat(await readEntry(entry))
  }
  return dropFiles
}
