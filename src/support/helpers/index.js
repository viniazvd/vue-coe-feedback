export const colorValidator = color => {
  const rule = /(^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$)/i

  return color.match(rule)
}
