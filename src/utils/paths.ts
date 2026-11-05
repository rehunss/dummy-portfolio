/** Keep internal navigation and public assets valid on root and subpath hosting. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path.startsWith('/') && !path.startsWith('//') ? `${base}${path}` : path;
}

export function withBaseSrcset(srcset: string): string {
  return srcset.split(',').map(candidate => {
    const [path, ...descriptor] = candidate.trim().split(/\s+/);
    return [withBase(path), ...descriptor].join(' ');
  }).join(', ');
}
