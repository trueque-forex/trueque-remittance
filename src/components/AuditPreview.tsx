import { useEffect, useState } from 'react';

export default function AuditPreview() {
  const [summary, setSummary] = useState(null);
  useEffect(() => {
    // fetch audit summary
  }, []);
  return <div>{summary}</div>;
}