/**
 * Highlights the author's name in the authors list by making it bold
 * @param authors - Full authors string (e.g., "I. Grotova, A Smith, B Jones")
 * @returns HTML string with the author's name in bold
 */
export function highlightAuthor(authors: string): string {
  if (!authors) return ''
  
  // Match various formats of the author's name
  const patterns = [
    'I Grotova',
    'I. Grotova',
    'Iuliia Grotova',
    'Julia Grotova',
  ]
  
  let result = authors
  
  patterns.forEach(pattern => {
    // Use a case-insensitive regex with word boundaries
    const regex = new RegExp(`\\b${pattern}\\b`, 'gi')
    result = result.replace(regex, (match) => `<strong>${match}</strong>`)
  })
  
  return result
}

