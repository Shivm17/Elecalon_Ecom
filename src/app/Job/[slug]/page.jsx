"use client";

import { useParams } from "next/navigation";

export default function JobDetail() {
  const { slug } = useParams();

  return (
    <div style={{ height: "100vh" }}>
      {/* Header will already show because it's in layout */}
      <iframe
        src={`/${slug}.html`}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title={slug}
      />
    </div>
  );
}
