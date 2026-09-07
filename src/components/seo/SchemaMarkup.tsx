import React from 'react';

export default function SchemaMarkup({ type, data }: { type: string, data: Record<string, unknown> }) {
  const schemaObj = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
    />
  );
}
