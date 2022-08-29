import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export function BackButton() {
  const path = useNavigate();

  return (
    <div className="backBtn">
      <Button
        id="back-button"
        onClick={() => path(-1)}
        style={{ cursor: "pointer" }}
        aria-label="back-button"
        name="back-button"
      >
      </Button>
    </div>
  );
}
