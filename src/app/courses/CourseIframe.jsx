"use client";

import { useParams } from "next/navigation";

export default function CourseIframe() {
  const { slug } = useParams();

  return (
    <div style={{ height: "100vh", backgroundColor: "#ffffff" }}>
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
