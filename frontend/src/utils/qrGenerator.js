import QRCode from 'qrcode'

export const generateQRCode = async (text, options = {}) => {
  try {
    const qrOptions = {
      width: options.width || 300,
      margin: options.margin || 2,
      color: {
        dark: options.foreground || '#000000',
        light: options.background || '#FFFFFF'
      },
      errorCorrectionLevel: options.errorCorrectionLevel || 'M',
      type: 'image/png',
      quality: 0.92,
      ...options
    }

    const qrDataURL = await QRCode.toDataURL(text, qrOptions)
    return qrDataURL
  } catch (error) {
    console.error('Error generating QR code:', error)
    throw error
  }
}

export const downloadQRCode = (dataURL, filename = 'qrcode.png') => {
  const link = document.createElement('a')
  link.download = filename
  link.href = dataURL
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}