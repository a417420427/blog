import { saveAs } from 'file-saver'
export const DownloadFile = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 20,
        right: 20,
        cursor: 'pointer',
      }}
      className="downloadFile"
      onClick={() => saveAs('/config/个人简历(张帆).pdf', '个人简历(张帆).pdf')}
    >
      下载简历
    </div>
  )
}
