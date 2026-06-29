import { useEffect } from 'react';

export default function useDocumentMetadata(title, description) {
  useEffect(() => {
    // Update Document Title
    const defaultTitle = 'BookMyCricBox - Cricket Turf Booking Platform (Coming Soon)';
    document.title = title ? `${title} | BookMyCricBox` : defaultTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    const defaultDescription = 'Discover nearby cricket turfs, view live slot availability, and learn about the upcoming BookMyCricBox mobile app under final development.';
    metaDescription.setAttribute('content', description || defaultDescription);

    // Update Open Graph Description if it exists
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description || defaultDescription);
    }

    // Update Open Graph Title if it exists
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title ? `${title} | BookMyCricBox` : defaultTitle);
    }
  }, [title, description]);
}
