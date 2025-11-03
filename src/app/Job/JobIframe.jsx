"use client";

export default function JobIframe({ slug }) {
  return (
    <div style={{ height: "100vh", backgroundColor: "#fff" }}>
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
