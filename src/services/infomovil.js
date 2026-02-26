// TODO: Implementar ReCAPTCHA v3 en el formulario de contacto
const BASE = '/api'
const COMERCIO_ID = Number(
  process.env.NEXT_PUBLIC_GEOSOFT_COMERCIO_ID || 322008
)
const APP_TOKEN = process.env.NEXT_PUBLIC_GEOSOFT_TOKEN || ''

async function request(path, payload) {
  const url = `${BASE}${path}`
  const headers = { 'Content-Type': 'application/json' }
  if (APP_TOKEN) headers['X-APP-TOKEN'] = APP_TOKEN

  console.log('POST:', url)

  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    })
  } catch (e) {
    // Error de red / conexión
    throw new Error(
      'No se pudo conectar con el servicio. Intente nuevamente en unos minutos.'
    )
  }

  const contentType = (res.headers.get('content-type') || '').toLowerCase()

  // Si el proxy no existe, normalmente Next responde HTML (doctype)
  const isHtml = contentType.includes('text/html')

  if (!res.ok) {
    const text = await res.text().catch(() => '')

    const looksLikeHtml = isHtml || /^\s*<!doctype html/i.test(text)

    if (looksLikeHtml || res.status === 404) {
      throw new Error(
        'En este momento el formulario no puede enviar el mensaje (servicio no disponible). Por favor, intente más tarde.'
      )
    }

    throw new Error(text || `Error ${res.status}`)
  }

  // OK pero respuesta inesperada (no JSON)
  if (!contentType.includes('application/json')) {
    const text = await res.text().catch(() => '')
    const looksLikeHtml = isHtml || /^\s*<!doctype html/i.test(text)

    if (looksLikeHtml) {
      throw new Error(
        'En este momento el formulario no puede enviar el mensaje (servicio no disponible). Por favor, intente más tarde.'
      )
    }

    throw new Error('Respuesta inesperada del servidor. Intente más tarde.')
  }

  return res.json().catch(() => ({}))
}

export const InfomovilAPI = {
  enviarContacto(form) {
    const payload = {
      correos_usuario: {
        remitente: form.email,
        asunto: 'Contacto desde el sitio de ymca.com.bo',
        cuerpo: form.mensaje,
        nombre: form.nombre,
        comercio_id: COMERCIO_ID,
        numero_celular: form.celular || null
      }
    }

    console.log('Enviando a Infomóvil:', payload)
    return request('/correos_usuarios', payload)
  }
}
