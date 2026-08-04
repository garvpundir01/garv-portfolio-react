import { useEffect } from 'react';

/**
 * Sets the document title and meta description per route. This is a client-side
 * SPA, so crawlers that execute JS (Google) pick these up; the static fallbacks
 * in public/index.html cover everything else.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
}

export default usePageMeta;
