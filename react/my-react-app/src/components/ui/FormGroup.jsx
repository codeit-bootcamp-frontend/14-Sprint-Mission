import React from "react";

function FormGroup({ label, children, style, error }) {
  return (
    <div style={{ marginBottom: 24, ...style }}>
      {label && <div style={{ fontWeight: 600, marginBottom: 8 }}>{label}</div>}
      {children}
      {error && (
        <div style={{ color: "#E54848", fontSize: 14, marginTop: 8 }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default FormGroup;
