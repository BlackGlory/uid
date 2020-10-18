export function PORT() {
  return Number(process.env.UID_PORT) || 8080
}

export function HOST() {
  return process.env.UID_HOST || 'localhost'
}

export function HTTP2() {
  return process.env.UID_HTTP2 === 'true'
}
